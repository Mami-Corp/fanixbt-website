import React from "react";
import Image from "next/image";
import TextImg from "../../public/heroText.svg";
import FaniMami from "../../public/heroHead.png";
import { Parallax } from "react-scroll-parallax";

export default function HeroSection() {
  return (
    <div className="overflow-hidden bg-[url('../../public/heroBg.png')] bg-no-repeat bg-cover bg-center md:h-screen h-[90vh] flex lg:flex-row flex-col lg:justify-start justify-end items-end">
      <div className="lg:w-6/12 mr-64 md:w-[40rem] mb-[20vh] relative lg:left-32 lg:px-0 px-5 flex justify-center">
        <Parallax speed={10}>
          <Image src={TextImg} alt={""} />
        </Parallax>
      </div>
      <div className="lg:w-1/2 relative lg:right-36 lg:top-5 z-10">
        <Parallax speed={-10}>
          <Image src={FaniMami} alt={""} />
        </Parallax>
      </div>
    </div>
  );
}
