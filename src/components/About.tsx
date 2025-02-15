import React from "react"
import Image from "next/image"
import TextImg from "../../public/aboutText.svg"
import BigImage from "../../public/aboutBigImage.svg"
import SmallFirst from "../../public/aboutSM1.svg"
import SmallSecond from "../../public/aboutSM2.svg"
import SmallThird from "../../public/aboutSM3.svg"
import DescriptionBg from "../../public/aboutDescriptionBg.svg"

export default function About() {
    return (
        <div className="bg-[url('../../public/aboutBg.png')] bg-no-repeat bg-cover w-full h-screen relative 2xl:bottom-32 lg:bottom-20 bottom-10 z-20 flex justify-center items-center">
            <div className='flex flex-col justify-center items-center w-10/12'>
                <Image
                    src={TextImg}
                    alt={""}
                    className='2xl:w-[65rem] w-[55rem] relative lg:right-16 lg:bottom-0 bottom-10'
                />
                <div className='flex md:flex-row flex-col justify-center items-center gap-5'>
                    <div className='2xl:w-[45rem] lg:w-[32rem] md:w-[28rem]'>
                        <Image
                            src={BigImage}
                            alt={""}
                            className='2xl:w-[45rem] lg:w-[32rem] md:w-[28rem] w-80'
                        />
                        <div className='flex flex-row justify-center items-center gap-3 2xl:gap-5'>
                            <Image
                                src={SmallFirst}
                                alt={""}
                                className='2xl:w-52 lg:w-[10rem] md:w-28 w-24'
                            />
                            <Image
                                src={SmallSecond}
                                alt={""}
                                className='2xl:w-52 lg:w-[10rem] md:w-28 w-24'
                            />
                            <Image
                                src={SmallThird}
                                alt={""}
                                className='2xl:w-52 lg:w-[10rem] md:w-28 w-24'
                            />
                        </div>
                    </div>
                    <div className='2xl:w-[30rem] lg:w-[28rem] flex flex-col justify-center items-center'>
                        <Image
                            src={DescriptionBg}
                            alt={""}
                            className='2xl:w-[30rem] w-[24rem]'
                        />
                        <p className='lg:w-[20rem] lg:text-base md:text-sm text-base md:w-64 w-72 absolute font-robotoMedium'>
                            {`fanixbt is a nerdy degen trader living on-chain. as every memecoin trader, fani is an expert in losing huge sums of money and she's properly wetawded. she was about to hack the fbi at age 13, but then got distracted playing the sims. allegedly funded by peter thiel (no proof of that)`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
