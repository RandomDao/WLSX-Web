"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { moneyFormate } from "~~/utils";

/**
 * Site footer
 */
export const ProjectDetailHeader = ({ projectDetail }: any) => {
  return (
    <div className="rounded-[12px] w-[776px] overflow-hidden">
      {/* pt-[68px] pb-[63px]*/}
      <div
        className="flex h-[320px] relative"
        style={{
          backgroundImage: `url(${projectDetail?.thumbnail})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 bg-[rgba(0,0,0,.2)] w-[100%] h-[320px] z-0"></div>

        <div className="absolute  w-[100%] h-[320px] z-10 top-0 left-0 flex pl-[59px] pr-[53px]  items-center">
          <div className="relative z-2">
            <div
              className="content w-[114px] h-[114px] rounded-[114px] flex items-center justify-center"
              style={{
                boxSizing: "border-box",
                padding: "2px",
                backgroundImage: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
              }}
            >
              <div className="w-[110px] h-[110px] rounded-[110px] overflow-hidden">
                <img className="w-[110px] h-[110px]" src={projectDetail?.logoUrl} alt="" />
              </div>
            </div>
            {/* <div className="absolute right-[-10px] bottom-[-15px] ">
                    <Image src={Token} alt="" width={57} height={57} />
                  </div> */}
          </div>
          <div className="ml-[33px] h-[241px] flex flex-col justify-center z-2">
            <div className="text-[32px] font-PPNeueMachina font-extrabold  leading-[30px]">{projectDetail?.title}</div>
            <div
              className="mt-[15px] text-[16px] font-Gotham font-normal leading-[22px]"
              style={{ color: "rgba(255,255,255,.8)" }}
            >
              {projectDetail?.intro}
              {/* The next generation of decentralized data mesh for blockchain and Web3 */}
            </div>
          </div>
        </div>

      </div>
      <div className="h-[143px] py-[45px] flex" style={{ backgroundColor: "rgba(213, 199, 255, .1)" }}>
        <div className="h-[50px] w-[207px]" style={{ borderRight: "2px solid rgba(255,255,255,.1)" }}>
          <div className="text-[18px] font-GothamBold font-bold  text-center">
            {projectDetail?.amount ? "$" + moneyFormate(projectDetail?.amount) : ""}
            {/* ${moneyFormate(projectDetail?.amount)} */}
          </div>
          <div className="text-[14px] font-Gotham  text-center" style={{ color: "rgba(255,255,255,.5)" }}>
            Fundraise Goal
          </div>
        </div>
        <div className="h-[50px] w-[106px]" style={{ borderRight: "2px solid rgba(255,255,255,.1)" }}>
          <div className="text-[18px] font-GothamBold font-bold  text-center">{projectDetail?.apr}</div>
          <div className="text-[14px] font-Gotham  text-center" style={{ color: "rgba(255,255,255,.5)" }}>
            APY
          </div>
        </div>
        <div className="h-[50px] w-[203px]" style={{ borderRight: "2px solid rgba(255,255,255,.1)" }}>
          <div className="text-[18px] font-GothamBold font-bold  text-center">
            {/* ${moneyFormate(projectDetail?.minInvestAmount)} */}${projectDetail?.minInvestAmount}
          </div>
          <div className="text-[14px] font-Gotham  text-center" style={{ color: "rgba(255,255,255,.5)" }}>
            Minimum investment
          </div>
        </div>
        <div className="h-[50px] w-[260px]" style={{}}>
          <div className="text-[18px] font-GothamBold font-bold  text-center">{projectDetail?.period}</div>
          <div className="text-[14px] font-Gotham  text-center" style={{ color: "rgba(255,255,255,.5)" }}>
            Investment Revenue Cycle
          </div>
        </div>
      </div>
    </div>
  );
};
