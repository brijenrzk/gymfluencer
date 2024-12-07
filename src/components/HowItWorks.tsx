'use client'
import { chipImg, frameImg } from '@/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React from 'react'

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
    useGSAP(() => {
        gsap.from("#chip", {
            scrollTrigger: {
                trigger: "#chip",
                start: '35% bottom',
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })
        gsap.to("#frame", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: "#frame",
                toggleActions: 'restart reverse restart reverse',
                start: "-15% bottom",
                scrub: 5.5
            },
        })
        gsap.to(".g_fadeIn", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".g_fadeIn",
                toggleActions: 'restart reverse restart reverse',
                start: "top 75%",
                scrub: 5.5
            },
        })
    }, [])
    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <div id='chip' className='flex-center w-full my-8'>
                    <Image src={chipImg} alt='chip' width={200} height={200} />

                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        Track
                        <br />Your Fitness
                    </h2>
                    <p className='hiw-subtitle'>
                        with our user-friendly interface
                    </p>
                </div>
                <div className='nt-10 md:mt-20 mb-14'>
                    <div className='relative h-full flex-center'>
                        <div className='overflow-hidden'>
                            <Image id="frame" src={frameImg} alt='frame' className='bg-transparent relative z-10 opacity-0' />
                        </div>
                    </div>

                </div>
                <div className='hiw-text-container'>
                    <div className='flex flex-1 justify-center flex-col'>
                        <p className='hiw-text g_fadeIn'> To get started with GymFluencer, {' '}
                            <span className='text-white'>
                                Log your exercises, count reps, and track detailed progress.
                            </span>
                        </p>


                        <p className='hiw-text g_fadeIn'> Review workout {' '}
                            <span className='text-white'>
                                stats and summaries {' '}
                            </span>
                            to stay motivated and achieve your fitness goals.
                        </p>
                    </div>


                    <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                        <p className='hiw-text'>Download</p>
                        <p className='hiw-bigtext'>GymFluencer</p>
                        <p className='hiw-text'>available in playstore & appstore.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks