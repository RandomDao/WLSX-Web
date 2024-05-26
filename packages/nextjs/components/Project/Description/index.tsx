"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";

/**
 * Site footer
 */
export const Description = ({ projectDetail }: any) => {
  return (
    <div
      id="section2"
      className="section pb-[90px] pr-[59px] pl-[59px] rounded-[12px] mt-[26px] flex flex-col relative"
      style={{ backgroundColor: "rgba(213, 199, 255, .1)" }}
    >
      <div
        className="w-[250px] h-[60px] text-[19px] font-PPNeueMachina font-extrabold flex justify-center items-center rounded-br-[20px] rounded-tl-[20px] absolute left-0 top-0"
        style={{
          background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
        }}
      >
        Description
      </div>
      <div
        className="text-[16px] font-Gotham mt-[127px]"
        style={{ color: "rgba(255,255,255,.5)" }}
        dangerouslySetInnerHTML={{ __html: projectDetail?.content }}
      />
    </div>
  );
};
