"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import bannerImg1 from "~~/app/assets/images/banner1.png";
import bannerImg2 from "~~/app/assets/images/banner2.png";
import bannerImg3 from "~~/app/assets/images/banner3.png";
import rightBtn from "~~/app/assets/images/right-btn.png";
import twitterBtn from "~~/app/assets/images/twitterBtn.png";
import { getProjectSummary } from "~~/services/api/api";

export const Header = () => {
  const [projectSummary, setProjectSummary] = useState<any>({});
  const queryProjectSummy = async () => {
    const res = await getProjectSummary();
    setProjectSummary(res);
  };
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      // queryProjectSummy();
    }
  }, []);
  return (
    <>
      <div className="flex justify-between  w-[1209px] mt-[136px] h-[607px] relative">
        <div className="flex flex-col mt-[125px]">
          <div
            className="text-[#fff] text-[53px] font-extrabold leading-[59px] font-PPNeueMachina title-text-shadow"
            style={{ textWrap: "nowrap" }}
          >
            Welcome to WLSX
            <br /> Bringing new energy
            <br />
            to blockchain
          </div>
          <div className="text-[14px] leading-[18px] mt-[28px] text-[#FFFFFF] font-GothamRounded font-[325]">
            Uncover the hidden value of illiquid assets <br />
            Explore the untapped potential of the illiquid market

          </div>
          <div className="flex gap-[18px] mt-[37px]">
            <div
              className="content w-[200px] h-[50px] rounded-[50px] flex items-center justify-center cursor-pointer"
              style={{
                boxSizing: "border-box",
                padding: "2px",
                backgroundImage: "linear-gradient(90deg, #1E3C72, #2A5298, #4A90E2)",

              }}
            >
              <div
                className="flex gap-[11px] bg-[#0e0d1f] font-GothamBold w-[296px] h-[46px] rounded-[46px] justify-center items-center cursor-pointer hover:bg-[#262535] text-[16px]"
                style={{
                  boxShadow: "0px 0px 10px 0px rgba(121, 143, 255, 0.9)",
                }}
              >
                Pre-Market
                <Image src={rightBtn} alt="" width={6} height={10} />
              </div>
            </div>

            <div
              className="w-[148px] h-[50px] rounded-[50px] bg-[#fff] font-GothamBold flex gap-[10px] justify-center items-center text-[#0E0D1F] cursor-pointer hover:bg-[rgba(255,255,255,.8)] text-[16px]"
              style={{
                boxShadow: "0px 0px 10px 0px #798FFF4D",
              }}
            >
              <Image src={twitterBtn} alt="" width={20} height={18} className="cursor-pointer" />
              Twitter
            </div>
          </div>
          {/* <div className="flex  mt-[61px] gap-[100px]">
            <div className="flex items-center flex-col">
              <div className="text-[21px] font-extrabold font-PPNeueMachina title-text-shadow">
                {projectSummary?.raisedCapital}
              </div>
              <div className="text-[10px] text-[#fff] mt-[6px] font-GothamRounded">RAISED CAPITAL</div>
            </div>
            <div className="flex items-center flex-col">
              <div className="text-[21px] font-extrabold font-PPNeueMachina title-text-shadow">
                {projectSummary?.launchedProjects}
              </div>
              <div className="text-[10px] text-[#fff] mt-[6px] font-GothamRounded">LAUNCHED PROJECTS</div>
            </div>
            <div className="flex items-center flex-col">
              <div className="text-[21px] font-extrabold font-PPNeueMachina title-text-shadow">
                {projectSummary?.avgApr}
              </div>
              <div className="text-[10px] text-[#fff] mt-[6px] font-GothamRounded">AVG APR</div>
            </div>
          </div> */}
        </div>
        <div className="animalImg">
          <Image src={bannerImg1} alt="" width={641} height={643} />
        </div>
        <div className="bannerimg2 absolute left-[500px]" >
          <Image src={bannerImg2} alt="" width={71} height={71} />
        </div>
        <div className="bannerimg2 absolute left-[160px] bottom-[-80px]" >
          <Image src={bannerImg3} alt="" width={167} height={175} />
        </div>
      </div>
    </>
  );
};
