"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "../../public/howToBuyTitle.svg";
import FaniImage from "../../public/howToBuyFaniImg.svg";
import DotImg from "../../public/dotImg.svg";
import CopyImg from "../../public/copyImg.svg";
import FirtsStep from "../../public/step1Bg.svg";
import SecondStep from "../../public/step2Bg.svg";
import ThirdStep from "../../public/step3Bg.svg";
import FourthStep from "../../public/step4Bg.svg";
import BuyMamiBtnBg from "../../public/buyMamiBtnBg.svg";

const steps = [
  {
    title: "DOWNLOAD WALLET",
    bg: FirtsStep,
    desc: "end, laoreet dolor. Etiam sed pharetra lectus. Duis blandit fringilla orci, et iaculis metus fringilla ut. Morbi et leo vitae lacus hendre",
  },
  {
    title: "GET SOME SOL? ETH?",
    bg: SecondStep,
    desc: "end, laoreet dolor. Etiam sed pharetra lectus. Duis blandit fringilla orci, et iaculis metus fringilla ut. Morbi et leo vitae lacus hendre",
  },
  {
    title: "GET TO Dexscreener",
    bg: ThirdStep,
    desc: "end, laoreet dolor. Etiam sed pharetra lectus. Duis blandit fringilla orci, et iaculis metus fringilla ut. Morbi et leo vitae lacus hendre",
  },
  {
    title: "BUY $MAMI",
    bg: FourthStep,
    desc: "end, laoreet dolor. Etiam sed pharetra lectus. Duis blandit fringilla orci, et iaculis metus fringilla ut. Morbi et leo vitae lacus hendre",
  },
];

const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied!");
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};

export default function HowToBuy() {
  const textToCopy = "sgdaim8crgsdgunkfuQk9EzGY54673456RsdfVosdfh";

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-start items-center 2xl:pb-20 pb-60 overflow-hidden">
      <Image src={Title} alt={""} className="lg:w-[65rem] lg:px-0 px-5" />
      <div className="lg:w-[60rem]">
        <div className="flex lg:flex-row flex-col-reverse justify-start items-center gap-5">
          <p className="text-[#1E1F27] lg:w-96 lg:px-0 px-10 font-robotoMedium">
            end, laoreet dolor. Etiam sed pharetra lectus. Duis blandit
            fringilla orci, et iaculis metus fringilla ut. Morbi et leo vitae
            lacus hendrerit semper. Donec sed
          </p>
          <Image
            src={FaniImage}
            alt={""}
            className="lg:absolute md:w-[15rem] xl:ml-[45rem] lg:ml-[40rem] mb-10 xl:w-[25rem] lg:w-[20rem] w-32"
          />
        </div>
        <div className="bg-[url('../../public/copyBoxBg.svg')] bg-no-repeat bg-cover bg-center lg:w-[39rem] w-[23rem] lg:h-12 h-7 lg:ml-0 md:ml-10 ml-2 mt-20 flex justify-center items-center text-[#1E1F27]">
          <div className="flex flex-row justify-center items-center lg:gap-7 gap-2">
            <p className="lg:text-xl text-xs font-robotoRegular">
              sgdaim8crgsdgunkfuQk9EzGY54673456RsdfVosdfh
            </p>
            <Image src={DotImg} alt={""} className="" />
            <button onClick={() => copyToClipboard(textToCopy)}>
              <Image
                src={CopyImg}
                alt={""}
                className="lg:w-6 lg:block hidden hover:scale-90 duration-500"
              />
            </button>
          </div>
        </div>
        <button
          onClick={() => copyToClipboard(textToCopy)}
          className="lg:hidden flex flex-row justify-center items-center gap-2 mt-2 ml-2 md:ml-10 text-[#1E1F27] border-[#1E1F27] border-[1px] rounded-lg px-3 py-1 hover:scale-95 duration-500"
        >
          <p>Copy</p>
          <Image src={CopyImg} alt={""} className="w-6" />
        </button>
      </div>
      <div className="flex md:flex-row flex-wrap flex-col justify-center items-center gap-5 mt-20">
        {steps.map((step, index) => (
          <StepsItem
            key={index}
            title={step.title}
            bg={step.bg}
            desc={step.desc}
            step={index}
          />
        ))}
      </div>
    </div>
  );
}

interface StepsItemProps {
  title: string;
  bg: StaticImageData;
  desc: string;
  step?: number;
}

const StepsItem = ({ title, bg, desc, step }: StepsItemProps) => {
  return (
    <div className="text-[#1E1F27] flex flex-col justify-center items-center w-[16rem]">
      <Image src={bg} alt={""} className="" />
      <div className="absolute w-48 flex flex-col justify-center items-center gap-3">
        <h4 className={`${step === 3 ? "mt-10" : ""} font-inter`}>{title}</h4>
        <p className="text-xs font-robotoRegular">{desc}</p>
        {step === 3 ? (
          <button>
            <Image
              src={BuyMamiBtnBg}
              alt={""}
              className="w-48 hover:scale-95 duration-500"
            />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
