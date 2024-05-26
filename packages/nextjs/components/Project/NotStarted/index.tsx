/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { updateUserEmail } from "~~/services/api/api";
import { countDown } from "~~/utils";

/**
 * Site footer
 */
export const NotStarted = ({ item }: any) => {
  const [email, setEmail] = useState<any>("");
  const [also, setAlso] = useState<any>(false);
  const [timeObj, setTimeObj] = useState<any>({});
  const interval: any = useRef(null);
  useEffect(() => {
    if (item.startTime) count(item.startTime);

    return () => clearInterval(interval.current);
  }, [item]);
  const count = (t: any) => {
    interval.current = setInterval(function () {
      const a = countDown(t);
      setTimeObj(a);
    }, 1000);
  }
  const notify = async () => {
    const param = {
      email
    }
    const res = await updateUserEmail(param);
    toast.success("Success", {
      position: "top-center",
    });
    setEmail("");
  };
  return (
    <div
      className="w-[356px] h-[462px] rounded-[12px] overflow-hidden flex flex-col"
      style={{ backgroundColor: "rgba(213, 199, 255, .1)" }}
    >
      <div className="w-[100%] h-[150px] ">
        <div
          className="text-[19px] font-PPNeueMachina font-extrabold pl-[28px] pt-[41px]"
          style={{
            color: "transparent",
            background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
            backgroundClip: "text",
          }}
        >
          Fundraising start in:
        </div>
        {/* <div
          className="w-[230px] h-[45px] text-[17px] font-PPNeueMachina flex justify-center items-center rounded-br-[12px]"
          style={{
            background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
          }}
        >
          Start countdown
        </div> */}
        <div className="mt-[10px] flex gap-[13px] w-[100%] justify-center">
          <div className="flex gap-[5px] items-end ">
            <div className="text-[36px] font-GothamBold h-[48px]">{timeObj?.days ?? ''}</div>
            <div className="text-[rgba(255,255,255,.5)] font-Gotham text-[20px]">D</div>
          </div>

          <div className="flex gap-[5px] items-end">
            <div className="text-[36px] font-GothamBold h-[48px]">{timeObj?.hours}</div>
            <div className="text-[rgba(255,255,255,.5)] font-Gotham text-[20px]">H</div>
          </div>

          <div className="flex gap-[5px] items-end">
            <div className="text-[36px] font-GothamBold h-[48px]">{timeObj?.mins}</div>
            <div className="text-[rgba(255,255,255,.5)] font-Gotham text-[20px]">M</div>
          </div>

          <div className="flex gap-[5px] items-end">
            <div className="text-[36px] font-GothamBold h-[48px] w-[46px]">{timeObj?.secs}</div>
            <div className="text-[rgba(255,255,255,.5)] font-Gotham text-[20px]">S</div>
          </div>
        </div>

      </div>
      <div
        className="w-[100%] h-[2px] mt-[10px]"
        style={{
          background: "linear-gradient(90deg, #9A5CFF 0%,#215FFF 100%)",
        }}
      ></div>
      <div className="bg-[rgba(255,255,255,.2)] pt-[36px] px-[28px] pb-[20px]">
        <div className="text-[14px] font-Gotham font-normal">
          Please enter your email address to receive sales notifications.
        </div>
        <div
          className="mt-[13px] text-[12px] font-Gotham w-[100%] py-[5px] pl-[19px] pr-[16px] rounded-[10px] flex items-center justify-between"
          style={{
            color: "rgba(255,255,255,.5)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            backgroundColor: "rgba(25,23,60,.5)",
          }}
        >
          <div className="flex items-center">
            <input
              type="text"
              // defaultValue={0}
              value={email}
              // key={tokenNum}
              placeholder="Email address:"
              className="text-[14px] h-[50px] w-[100%] font-Gotham border-0 bg-transparent text-[#fff] focus-visible:outline-0"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-[18px] flex items-start">
          <input
            type="checkbox"
            className="checkbox w-[18px] h-[18px] rounded-[4px]"
            style={{ border: "1px solid rgba(255,255,255,.4)" }}
            onChange={e => setAlso(e)}
            value={also}
          />
          <span className="label-text ml-[8px] text-[14px] font-Gotham font-normal">
            Also notify me about all news, updates & more from Solar
          </span>
        </div>
        <div
          className="text-[14px] mt-[26px] font-GothamBold font-bold w-[100%] h-[45px] rounded-[50px] flex justify-center items-center cursor-pointer"
          style={{
            background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
          }}
          onClick={() => notify()}
        >
          Notify me
        </div>
      </div>
    </div>
  );
};
