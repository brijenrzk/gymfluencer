"use client"
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { explore1Img, explore2Img, exploreVideo } from '@/utils';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useGSAP(() => {
        gsap.to("#exploreVideo", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: "#exploreVideo",
                toggleActions: 'play pause reverse restart',
                start: "-20% bottom"
            },
            onComplete: () => {
                if (videoRef.current) {
                    videoRef.current.play();
                }

            }
        })
        gsap.to("#feature_title", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: "#feature_title",
                toggleActions: 'restart none',
                start: 'top 5%'
            }
        })
        gsap.to('.g_grow', {
            scale: 1,
            opacity: 1,
            ease: 'power1',
            scrollTrigger: {
                trigger: ".g_grow",
                toggleActions: 'restart reverse restart reverse',
                start: "top 85%",
                scrub: 5.5
            },


        })
        gsap.to('.g_text', {
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
            duration: 1,
            scrollTrigger: {
                trigger: ".g_text",
                toggleActions: 'restart none',
                start: "top 35%",
            }
        })
    }, [])
    return (
        <section className='h-full common-padding bg-zinc relative overflow-hidden'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full'>
                    <h1 id="feature_title" className='section-heading'>Explore the full story.</h1>
                </div>
                <div className='flex flex-col justify-center items-center overflow-hidden'>
                    <div className='mt-32 mb-24 pl-24'>
                        <h2 className='text-5xl lg:text-7xl font-semibold'>Ultimate</h2>
                        <h2 className='text-5xl lg:text-7xl font-semibold'>fitness companion.</h2>
                    </div>
                    <div className='flex-center flex-col sm:px-10'>
                        <div className='relative h-[50vh] w-full flex items-center'>
                            <video playsInline id="exploreVideo" className='w-full h-full object-cover object-center' preload='none' muted autoPlay ref={videoRef}>
                                <source src={exploreVideo} type='video/mp4' />
                            </video>
                        </div>
                        <div className='flex flex-col w-full relative'>
                            <div className='feature-video-container'>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <Image src={explore1Img} alt='titanium' className='feature-video g_grow' />
                                </div>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <Image src={explore2Img} alt='titanium' className='feature-video g_grow' />
                                </div>
                            </div>
                            <div className='feature-text-container'>
                                <div className='flex-1 flex-center'>
                                    <p className='feature-text g_text'> GymFluencer is {' '}
                                        <span className='text-white'>
                                            your ultimate fitness companion
                                        </span>,
                                        designed to help you track your workouts with ease.
                                    </p>
                                </div>
                                <div className='flex-1 flex-center'>
                                    <p className='feature-text g_text'> Our application allows you to{' '}
                                        <span className='text-white'>
                                            log exercises, count reps, and calculate calories burned
                                        </span>,
                                        all through a user-friendly interface. Whether you’re a beginner or a seasoned athlete, our app will keep you motivated and on track.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features