
import React, { useState } from 'react';
import Image from "next/image";
import { Container, ImageContainer } from './style';
import { theme } from '../../../styles/theme';
import { AboutUsEntity } from '../../../types/strapi';


const Members = ({ members }: { members: { image: string, name: string, title: string }[] }) => {

    return (
        <Container >
            <p className='sm:mt-2 md:mt-9 text-5xl py-3 font-sans font-thin tracking-widest text-center mb-10' style={{ color: "#EA3A60" }}>
                Main Church  Staff
                <br />
                And leaders
            </p>
            <div className="rounded-lg grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3  gap-4 py-2">
                {members.map((data, index) => {
                    return <div className="flex-col flex justify-center items-center py-3 hover:bg-slate-50 hover:shadow-md rounded-lg " key={index}>
                        <div className="relative rounded-full h-36 w-36 overflow-hidden border-2 " style={{ borderColor: theme.colors.text }}>
                            <ImageContainer
                                loading='lazy'
                                placeholder="blur"
                                blurDataURL={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data.image}
                                layout='fill'
                                alt="profile"
                                quality={100}
                                src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data.image}
                            />
                        </div>
                        <div className="mt-2 text-center flex flex-col">
                            <span className=" text-lg font-bold" style={{ color: theme.colors.text }}>
                                {data.name}
                            </span>
                            <span className="text-xs" style={{ color: "#343D48" }}>
                                {data.title}
                            </span>
                        </div>
                    </div>
                })}

            </div>

        </Container >
    );
}

export default Members;