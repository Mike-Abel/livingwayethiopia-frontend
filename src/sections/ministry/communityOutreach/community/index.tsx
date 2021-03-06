import React, { useState } from "react";
import { Container, ImageContainer } from "./style";
import {
  ComponentGlobalDetailedContainer,
  Maybe,
} from "../../../../types/strapi";
import { marked } from "marked";
import ReactHtmlParser from "react-html-parser";

const CommunityContainer = ({
  community,
}: {
  community: Maybe<ComponentGlobalDetailedContainer>[];
}) => {
  return (
    <Container className="mt-16 sm:mt-14">
      {community?.map((data, index) => {
        if (index === 0)
          return (
            <div className="flex flex-col gap-y-3 my-4" key={index}>
              {data?.media?.data?.attributes?.url! && (
                <div
                  className="relative w-full rounded-lg overflow-hidden "
                  style={{ height: "500px" }}
                >
                  <ImageContainer
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={
                      process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                      data?.media?.data?.attributes?.url!
                    }
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                      data?.media?.data?.attributes?.url!
                    }
                    layout="fill"
                    quality={100}
                    alt="video-Image"
                  />
                </div>
              )}
              {data?.title && (
                <p className="text-3xl my-2 md:my-4 ">{data?.title}</p>
              )}
              {data?.detail! && (
                <p className="text-gray-900 text-lg ">
                  {ReactHtmlParser(marked.parse(data?.detail!))}
                </p>
              )}
            </div>
          );
        else
          return (
            <div
              className="flex flex-col gap-y-3 items-center my-16"
              key={index}
            >
              {data?.title && (
                <div>
                  <p className="text-3xl  my-4 font-black">{data?.title}</p>
                </div>
              )}
              <div
                className="flex flex-wrap-reverse gap-y-5 w-full"
                style={{
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                }}
              >
                <div
                  className={
                    data?.media?.data?.attributes?.url!
                      ? "w-full md:w-7/12 "
                      : "w-full"
                  }
                  style={{
                    paddingLeft:
                      index % 2 === 0 && data?.media?.data?.attributes?.url!
                        ? "1.5rem"
                        : "0",
                    paddingRight: index % 2 === 0 ? 0 : "1.5rem",
                  }}
                >
                  {data?.detail! && (
                    <p className="text-gray-900 text-lg ">
                      {ReactHtmlParser(marked.parse(data?.detail!))}
                    </p>
                  )}
                </div>

                {data?.media?.data?.attributes?.url! && (
                  <div
                    className="w-full relative md:w-5/12 rounded-lg overflow-hidden "
                    style={{ height: "500px" }}
                  >
                    <ImageContainer
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={
                        process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                        data?.media?.data?.attributes?.url!
                      }
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                        data?.media?.data?.attributes?.url!
                      }
                      layout="fill"
                      quality={100}
                      alt="video-Image"
                    />
                  </div>
                )}
              </div>
            </div>
          );
      })}
    </Container>
  );
};

export default CommunityContainer;
