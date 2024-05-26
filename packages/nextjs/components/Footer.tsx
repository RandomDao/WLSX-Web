import React from "react";
import Image from "next/image";
import bi1 from "~~/app/assets/images/bi1.png";
import bi2 from "~~/app/assets/images/bi2.png";
import bi3 from "~~/app/assets/images/bi3.png";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="relative  mt-[106px] flex">
      <div className="w-[100%] h-[305px] opacity-[.4]" style={{ background: "rgba(25, 27, 31, 1)" }}></div>
      <div className="absolute top-0 left-[0] right-[0] mx-auto pt-[88px] pb-[93px] flex w-[100%] max-w-[1178px] justify-between">
        <div className="flex relative  flex-col">
          <Image alt="WLSX logo" className="cursor-pointer" src="/logo.png" width={211} height={27} />
          <div className="mt-[25px] text-[14px] font-Gotham text-[rgba(255,255,255,.8)]">
            Uncover the hidden value of illiquid assets<br/>
            Explore the untapped potential of the illiquid market
          </div>
        </div>
        <div className="flex gap-[70px] ml-[200px]">
          {/* <div>
            <div className="text-[16px] font-[700] font-GothamBold">WLSX Labs</div>
            <div className="flex flex-col gap-[5px] mt-[22px]">
              <div className="text-[14px] font-Gotham font-normal">About WLSX</div>
              <div className="text-[14px] font-Gotham font-normal">About WLSX</div>
              <div className="text-[14px] font-Gotham font-normal">About WLSX</div>
              <div className="text-[14px] font-Gotham font-normal">About WLSX</div>
            </div>
          </div> */}
          <div>
            <div className="text-[16px] font-[700] font-GothamBold">Company</div>
            <div className="flex flex-col gap-[5px] mt-[22px]">
              <div className="text-[14px] font-Gotham font-normal">Terms of Services</div>
              <div className="text-[14px] font-Gotham font-normal">Privacy Policy</div>
            </div>
          </div>
          <div>
            <div className="text-[16px] font-[700] font-GothamBold">Resources</div>
            <div className="flex flex-col gap-[5px] mt-[22px]">
              <div className="text-[14px] font-Gotham font-normal">launchpad</div>
              <div className="text-[14px] font-Gotham font-normal">Marketing</div>
              <div className="text-[14px] font-Gotham font-normal">Staking</div>
              <div className="text-[14px] font-Gotham font-normal">Portfolio</div>
            </div>
          </div>
          <div>
            <div className="text-[16px] font-[700] font-GothamBold">Follow us on</div>
            <div className="flex gap-[16px] mt-[15px] items-center">
              <Image src={bi1} alt="" width={24} height={22} className="cursor-pointer" />
              <Image src={bi2} alt="" width={30} height={23} className="cursor-pointer" />
              <Image src={bi3} alt="" width={34} height={34} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
