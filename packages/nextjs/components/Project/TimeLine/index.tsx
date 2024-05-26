/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import timeline1 from "~~/app/assets/images/timeline1.png";
import timeline2 from "~~/app/assets/images/timeline2.png";
import timeline3 from "~~/app/assets/images/timeline3.png";
import Image from "next/image";

/**
 * Site footer
 */
export const TimeLine = ({ projectDetail }: any) => {
  return (
    <div
      id="section1"
      className="section pb-[90px] pr-[59px] pl-[59px] rounded-[12px] mt-[26px] flex flex-col relative"
      style={{ backgroundColor: "rgba(213, 199, 255, .1)" }}
    >
      {/* <div className="text-[22px] font-GothamBold ">Description</div> */}
      <div
        className="w-[345px] h-[60px] text-[19px] font-PPNeueMachina font-extrabold flex justify-center items-center rounded-br-[20px] rounded-tl-[20px] absolute left-0 top-0"
        style={{
          background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
        }}
      >
        Investment Timeline
      </div>
      <div className=" mt-[133px]">
        <div className="flex w-[100%] items-center gap-[7px]">
          <div className="w-[19px] h-[19px]">
            <Image src={timeline1} alt="" width={19} height={19} />
          </div>
          <div className="text-[rgba(255,255,255,.5)] text-[14px] font-Gotham font-medium">
            22 May 2024, 23:59 pm UTC
          </div>
        </div>
        <div
          className="pl-[16px] pt-[6px] mt-[14px] ml-[8px] h-[92px]"
          style={{ borderLeft: "2px solid rgba(255,255,255,.1)" }}
        >
          <div className="text-[16px] font-GothamBold">Fundraise Start Time</div>
          <div className="text-[14px] font-Gotham mt-[7px] text-[rgba(255,255,255,.5)]">
            Participants must have at least $1,000 in USDT tokens (EVM chain, such as Ethereum) in their connected
            wallet prior to the investment start date.
          </div>
        </div>

        <div className="flex w-[100%] items-center gap-[7px] mt-[14px]">
          <div className="w-[19px] h-[19px]">
            <Image src={timeline2} alt="" width={19} height={19} />
          </div>
          <div className="text-[rgba(255,255,255,.5)] text-[14px] font-Gotham font-medium">
            22 May 2024, 23:59 pm UTC
          </div>
        </div>
        <div
          className="pl-[16px] pt-[6px] mt-[14px] ml-[8px] h-[109px]"
          style={{ borderLeft: "2px solid rgba(255,255,255,.1)" }}
        >
          <div className="text-[16px] font-GothamBold">Fundraise End Time</div>
          <div className="text-[14px] font-Gotham mt-[7px] text-[rgba(255,255,255,.5)]">
            Participants need to complete the investment as soon as possible before the investment end date. Investments can be made in multiple transactions, but they need to be invested in multiples of the minimum $1,000.
          </div>
        </div>

        <div className="flex w-[100%] items-center gap-[7px] mt-[14px]">
          <div className="w-[19px] h-[19px]">
            <Image src={timeline3} alt="" width={19} height={19} />
          </div>
          <div className="text-[rgba(255,255,255,.5)] text-[14px] font-Gotham font-medium">25TH OF EACH MONTH</div>
        </div>
        <div
          className="pl-[16px] pt-[6px] mt-[14px] ml-[8px] "
          style={{ borderLeft: "2px solid rgba(255,255,255,.1)" }}
        >
          <div className="text-[16px] font-GothamBold">Benefit Date</div>
          <div className="text-[14px] font-Gotham mt-[7px] text-[rgba(255,255,255,.5)]">
            After the investment is completed, investors will receive 240 NFTs. On the 25th of the following month, the
            expired NFTs will be destroyed and corresponding benefits will be obtained. Investors can also resell
            unexpired NFTs through the marketplace.
          </div>
        </div>
      </div>
    </div>
  );
};
