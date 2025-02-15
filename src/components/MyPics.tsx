"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "../../public/myPicsTitle.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import firstImg from "../../public/myPics/1.png";
import secondImg from "../../public/myPics/2.png";
import thirdImg from "../../public/myPics/3.png";
import fourthImg from "../../public/myPics/4.png";
import fifthImg from "../../public/myPics/5.png";
import sixthImg from "../../public/myPics/6.png";
import seventhImg from "../../public/myPics/7.png";
import eighthImg from "../../public/myPics/8.png";
import ninthImg from "../../public/myPics/9.png";
import tenthImg from "../../public/myPics/10.png";
import borderImg from "../../public/myPics/border.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useMediaQuery from "../../hooks/useMediaQuery";

const myPics = [
  firstImg,
  secondImg,
  thirdImg,
  fourthImg,
  fifthImg,
  sixthImg,
  seventhImg,
  eighthImg,
  ninthImg,
  tenthImg,
];

export default function MyPics() {
  const isDesktop = useMediaQuery("(min-width: 700px)");

  return (
    <div className="bg-[url('../../public/MyPicsBg.png')] bg-no-repeat bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <Image src={Title} alt={""} className="px-3" />
      <div className="text-black mt-32 lg:w-10/12 w-11/12">
        <>
          <Swiper
            cssMode={true}
            slidesPerView={isDesktop ? 3 : 1}
            spaceBetween={isDesktop ? 30 : 0}
            loop={true}
            centeredSlides={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {myPics.map((image, index) => (
              <SwiperSlide key={index}>
                <CarouselItem image={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
}

interface CarouselProps {
  image: StaticImageData;
}

const CarouselItem = ({ image }: CarouselProps) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex justify-center items-center">
        <Image
          src={image}
          alt={""}
          className="2xl:h-[35rem] lg:h-[20rem] md:h-[15rem] h-[20rem] rounded-3xl border-[1px] border-white shadow-md"
        />
      </div>
      <Image
        src={borderImg}
        alt={""}
        className="2xl:h-[35rem] lg:h-[20rem] md:h-[15rem] h-[20rem] relative lg:right-7 md:right-5 right-7"
      />
    </div>
  );
};
