import Layout from '../../components/layout'
import ArticleSection from '../../sections/articles/article'
import { request, gql } from 'graphql-request';
import { ArticleEntity, } from '../../types/strapi';


const Article = ({
    article,
}: { article: ArticleEntity }) => {
    return (
        <Layout >
            <ArticleSection article={article} />
        </Layout>
    )
}
export default Article

export async function getStaticPaths() {

    const query = gql`
        query Query($locale: I18NLocaleCode) {
            articles(locale: $locale) {
                data {
                    id
                }
            }
        }
    `

    const res = await request(
        process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT!, query, {
        "locale": "am"
    })
    const res1 = await request(
        process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT!, query, {
        "locale": "en"
    })
    let articles = [...res.articles.data, ...res1.articles.data];

    // Get the paths we want to pre-render based on posts
    const paths = articles.map((article: ArticleEntity) => ({
        params: { id: article.id },
    }))

    // We'll pre-render only these paths at build time.
    return { paths, fallback: true }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const query = gql`
       query Query($id: ID, ) {
            article(id: $id, ) {
                data {
                    id
                    attributes {
                        title
                        content
                        publishedAt
                        image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `

    const variables = {
        "id": params.id,
    };

    const data = await request(process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT!, query, variables)

    return {
        props: {
            article: data.article.data,
        },
        revalidate: 3600,
    };
}