"use client"
import React from "react"
import Image from "next/image"
import FaniImg from "../../public/joinFani.svg"
import Stars from "../../public/stars.svg"
import Stars2 from "../../public/stars2.svg"
import WantSomeBtn from "../../public/wantsomeBtn.svg"
import ComeAndGetBtn from "../../public/comeAndGetBtn.svg"
import useMediaQuery from "../../hooks/useMediaQuery"

export default function Join() {
    const isDesktop = useMediaQuery("(min-width: 1024px)")

    return (
        <>
            {isDesktop ? (
                <div className='bg-white flex flex-row justify-center items-center pt-32'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='flex flex-col justify-start items-end text-[#1E1F27] font-inter'>
                            <h3 className='text-8xl'>JOIN ME</h3>
                            <h4 className='text-5xl'>AND</h4>
                        </div>
                        <Image src={Stars} alt={""} className='mr-12' />
                        <a
                            href='https://x.com/fanixbt'
                            rel='noreferrer'
                            target='_blank'>
                            <Image
                                src={WantSomeBtn}
                                alt={""}
                                className='w-80 hover:scale-95 duration-500'
                            />
                        </a>
                    </div>
                    <Image src={FaniImg} alt={""} className='' />
                    <div className='flex flex-col justify-center items-start gap-10'>
                        <div className='flex flex-col justify-start items-start gap-2'>
                            <Image src={Stars2} alt={""} className='' />
                            <a
                                href='https://x.com/fanixbt'
                                rel='noreferrer'
                                target='_blank'>
                                <Image
                                    src={ComeAndGetBtn}
                                    alt={""}
                                    className='w-80 hover:scale-95 duration-500'
                                />
                            </a>
                        </div>
                        <h3 className='text-8xl text-[#1E1F27] font-inter'>
                            HAVE FUN
                        </h3>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col justify-end items-center pt-20 bg-white'>
                    <div className='flex flex-col justify-start items-end text-[#1E1F27] font-inter'>
                        <h3 className='text-6xl'>JOIN ME</h3>
                        <h4 className='text-3xl'>AND</h4>
                        <h3 className='text-6xl text-[#1E1F27]'>HAVE FUN</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-10'>
                        <button>
                            <Image
                                src={WantSomeBtn}
                                alt={""}
                                className='w-64 hover:scale-95 duration-500'
                            />
                        </button>
                        <button>
                            <Image
                                src={ComeAndGetBtn}
                                alt={""}
                                className='w-64 hover:scale-95 duration-500'
                            />
                        </button>
                    </div>
                    <Image src={FaniImg} alt={""} className='' />
                </div>
            )}
        </>
    )
}
