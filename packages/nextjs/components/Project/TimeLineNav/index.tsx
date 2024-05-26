"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

/**
 * Site footer
 */
export const TimeLineNav = ({ currentSection, setActiveSection }: any) => {

  const scrollTo = (id: any) => {
    console.log(id);
    setActiveSection(id);
    const section = document.getElementById(id);
    console.log(section);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pb-[90px] pr-[59px] pl-[59px] rounded-[12px] mt-[26px] flex flex-col  sticky top-[10px]">
      <div className="flex">
        <div className="relative h-[190px] flex flex-col justify-between mt-[20px]">
          <div style={{ borderLeft: "1px dashed rgba(255,255,255,.1)" }} className="absolute h-[100%] left-[4px]" />
          <div onClick={() => scrollTo("section1")} className="flex items-center gap-[10px] cursor-pointer">
            <div

              className="w-[9px] h-[9px] rounded-full"
              style={{
                background:
                  currentSection != "section2" && currentSection != "section3"
                    ? "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)"
                    : "#3E3D4C",
              }}
            />
            <div>Timeline</div>
          </div>
          <div onClick={() => scrollTo("section2")} className="flex items-center gap-[10px] cursor-pointer">
            <div
              className="w-[9px] h-[9px] rounded-full"
              style={{
                background:
                  currentSection == "section2" ? "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)" : "#3E3D4C",
              }}
            />

            <div>Description</div>
          </div>
          <div onClick={() => scrollTo("section3")} className="flex items-center gap-[10px] cursor-pointer">
            <div

              className="w-[9px] h-[9px] rounded-full"
              style={{
                background:
                  currentSection == "section3" ? "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)" : "#3E3D4C",
              }}
            />
            <div>Recent Activity</div>
          </div>
        </div>
      </div>
    </div>
  );
};
