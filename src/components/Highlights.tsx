"use client"
import { rightImg } from '@/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'
import dynamic from "next/dynamic";

const VideoCarousel = dynamic(() => import("./VideoCarousel"), {
    ssr: false,
});



const Highlights = () => {


    useGSAP(() => {
        gsap.to("#title", {
            opacity: 1,
            y: 0,
        })
        gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
    })
    return (
        <section id="highlights" className='w-screen overflow-hidden h-fulll common-padding bg-zinc'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full md:flex items-end justify-between'>
                    <h1 id="title" className='section-heading'>
                        Key Features
                    </h1>
                    <div className='flex flex-wrap items-end gap-5'>
                        {/* <p className='link'>Watch the flim
                            <Image src={watchImg} alt='watch' className='ml-2' />
                        </p> */}
                        <p className='link'>Download Now
                            <Image src={rightImg} alt='right' className='ml-2' />
                        </p>
                    </div>
                </div>
                <VideoCarousel />

            </div>

        </section>
    )
}

export default Highlights