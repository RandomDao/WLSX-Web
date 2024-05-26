"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Eign from "~~/app/assets/images/eign.png";
import Token from "~~/app/assets/images/token.png";
import { cardTimeFormate, moneyFormate, toUSDT } from "~~/utils";

/**
 * Site footer
 */
export const ProjectCard = ({ status, item }: any) => {
  const router = useRouter();
  const goToDetail = () => {
    router.push(`/projectDetail?id=${item.project_id}`);
  };

  return (
    <div
      className="cursor-pointer  w-[265px] h-[359px] rounded-[16px] bg-[#1C1E23] relative projectBlockCard"
      style={{
        boxSizing: "border-box",
      }}
      onClick={() => goToDetail()}
    >
      <div
        className="w-[265px] h-[112px] overflow-hidden rounded-tl-[16px] rounded-tr-[16px]"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <img width={265} height={112} src={item.token_icon} alt={""} className="w-[265px] h-[112px]"></img>
      </div>
      <div className="flex justify-center">
        <div
          className="mt-[-31px] p-[2px] w-[62px] h-[62px] rounded-full left-[98px] z-10 absolute"
          style={{
            background: "linear-gradient(0deg, #5C8FFF 0%, #C14BFF 100%)",
          }}
        >
          <img width={62} height={62} src={item.token_icon} alt={""} className="rounded-full"></img>
        </div>
      </div>
      <div className="text-[16px] text-[#fff] font-GothamBold mt-[39px] justify-center text-center">
        {item.token_name}
      </div>
      <div
        className="mt-[16px] h-[75px] flex"
        style={{ borderTop: "1px solid #2E313B", borderBottom: "1px solid #2E313B" }}
      >
        <div className="w-[50%] h-[75px] flex flex-col justify-center items-center">
          <div className="flex gap-[5px] items-center">
            <div className="w-[15px] h-[15px]">
              <Image src={Token} alt="" width={15} height={15} />
            </div>
            <div className="text-[14px] font-GothamBold"> {moneyFormate(item.volume)}</div>
          </div>
          <div className="text-[#777E90] font-Gotham text-[12px] mt-[3px]">24h Vol</div>
        </div>
        <div className="w-[50%] h-[75px]  flex flex-col justify-center items-center" style={{ borderLeft: "1px solid #2E313B" }}>
          <div className="flex gap-[5px] items-center">
            <div className="w-[15px] h-[15px]">
              <Image src={Token} alt="" width={15} height={15} />
            </div>
            <div className="text-[14px] font-GothamBold">{moneyFormate(item.total_volume)}</div>
          </div>
          <div className="text-[#777E90] font-Gotham text-[12px] mt-[3px]">Total Vol</div>

        </div>
      </div>
      <div className="pt-[23px] pb-[25px] pl-[23px] pr-[23px]">
        <div className="flex justify-between">
          <div className="text-[14px] font-Gotham text-[#777E90]">Sell</div>
          <div className="text-[14px] font-GothamBold text-[#fff]">{item.total_sell_account}</div>
        </div>
        <div className="flex justify-between mt-[6px]">
          <div className="text-[14px] font-Gotham text-[#777E90]">Buy</div>
          <div className="text-[14px] font-GothamBold text-[#fff]">{item.total_buy_account}</div>
        </div>
      </div>
    </div>
  );
};
