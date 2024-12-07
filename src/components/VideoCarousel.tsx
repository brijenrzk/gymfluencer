import { hightlightsSlides } from '@/constants'
import { pauseImg, playImg, replayImg } from '@/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VideoState {
    isEnd: boolean;
    startPlay: boolean;
    videoId: number;
    isLastVideo: boolean;
    isPlaying: boolean;
}



const VideoCarousel = () => {
    const videoRef = useRef<(HTMLVideoElement | null | any)[]>([]);
    const videoSpanRef = useRef<(HTMLSpanElement | null)[]>([]);
    const videoDivRef = useRef<(HTMLSpanElement | null)[]>([]);

    const [video, setVideo] = useState<VideoState>({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    })

    const [loadedData, setLoadedData] = useState<number[]>([])

    const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

    useGSAP(() => {
        gsap.to("#slider", {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 2,
            ease: 'power2.inOut'
        })
        gsap.to("#video", {
            scrollTrigger: {
                trigger: "#video",
                toggleActions: 'restart none none none'

            },
            onComplete: () => {
                setVideo((prev) => ({
                    ...prev,
                    startPlay: true,
                    isPlaying: true
                }))
            }


        })
    }, [isEnd, videoId])

    useEffect(() => {
        if (loadedData.length > 3) {
            const currentVideo = videoRef.current[videoId];
            if (currentVideo) {
                if (!isPlaying) {
                    currentVideo.pause();
                } else {
                    startPlay && currentVideo.play();
                }
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData])

    const handleLoadedMetaData = (i: number, e: any) => setLoadedData((pre) => [...pre, e])

    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;
        if (span[videoId]) {
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() * 100)
                    if (progress != currentProgress) {
                        currentProgress = progress
                    }
                    gsap.to(videoDivRef.current[videoId], {
                        width: window.innerWidth < 760 ? '10vw' :
                            window.innerWidth < 1200 ? '10vw'
                                : '2vw'
                    })
                    gsap.to(span[videoId], {
                        width: `${currentProgress}%`,
                        backgroundColor: 'white'
                    })

                },
                onComplete: () => {
                    if (isPlaying) {
                        gsap.to(videoDivRef.current[videoId], {
                            width: '12px'
                        })
                        gsap.to(span[videoId], {
                            backgroundColor: "#afafaf"
                        })
                    }
                }
            })
            if (videoId === 0) {
                anim.restart();
            }

            const animUpdate = () => {
                anim.progress(videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration)
            }
            if (isPlaying) {
                gsap.ticker.add(animUpdate)
            } else {
                gsap.ticker.remove(animUpdate)
            }
        }

    }, [videoId, startPlay])

    const handleProcess = (type: String, i: number) => {
        switch (type) {
            case 'video-end':
                setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }))
                break;
            case 'video-last':
                setVideo((pre) => ({ ...pre, isLastVideo: true }))
                break;
            case 'video-reset':
                setVideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0 }))
                break;
            case 'play':
                setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
                break;
            default:
                return video;
        }
    }

    return (
        <>
            <div className='flex items-center'>
                {hightlightsSlides.map((list, i) => (
                    <div key={list.id} id="slider" className='sm:pr-20 pr-10'>
                        <div className='video-carousel_container'>
                            <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                                <video
                                    key={list.id}
                                    src={list.video}
                                    className={`${list.id === 2 && 'translate-x-44'}
                                    pointer-events-none
                                    `}
                                    preload="auto"
                                    muted
                                    onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                                    id="video"
                                    playsInline={true}
                                    ref={(el) => { videoRef.current[i] = el }}
                                    onPlay={() => {
                                        setVideo((prevVideo) => ({
                                            ...prevVideo, isPlaying: true
                                        }))
                                    }}
                                    onEnded={() =>
                                        i !== 3 ? handleProcess('video-end', i)
                                            : handleProcess('video-last', i)
                                    }

                                />
                            </div>
                            <div className='absolute top-12 left-[5%] z-10'>
                                {list.textLists.map((text) => (
                                    <p key={text} className='md:text-2xl textxl font-medium'>
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='relative flex-center mt-10'>
                <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
                    {videoRef.current.map((_, i) => (
                        <span key={i} ref={(el) => { videoDivRef.current[i] = el; }} className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'>
                            <span ref={(el) => { videoSpanRef.current[i] = el }} className='absolute h-full w-full rounded-full' />
                        </span>
                    ))}
                </div>
                <button className='control-btn'>
                    <Image
                        src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
                        alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
                        onClick={isLastVideo ? () => handleProcess('video-reset', videoId)
                            : !isPlaying ? () => handleProcess('play', videoId)
                                : () => handleProcess('play', videoId)
                        }
                    />
                </button>
            </div>
        </>
    )
}

export default VideoCarousel