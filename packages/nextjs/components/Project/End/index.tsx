/* eslint-disable @typescript-eslint/no-empty-function */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { moneyFormate } from "~~/utils";

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * Site footer
 */
export const End = ({ item }: any) => {
  const [tabsKey, setTabsKey] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (item) {
      const price = parseFloat(moneyFormate(item.amount, true)) / item.shares;
      const a = price * item.soldShares;
      setTotal(a);
    }
  }, [item]);
  const goto = () => {
    window.open("https://opensea.io")
  }
  return (
    <div
      className="w-[356px] h-[462px] rounded-[12px] overflow-hidden"
      style={{ backgroundColor: "rgba(213, 199, 255, .1)" }}
    >
      <div role="tablist" className="tabs tabs-lifted h-[48px]">
        <a
          role="tab"
          className={`tab h-[100%] font-GothamBold font-extrabold ${tabsKey === 1 && "text-[#fff]"}`}
          style={{
            backgroundColor: tabsKey === 1 ? "rgba(255, 255, 255, .2)" : "transparent",
            color: tabsKey === 1 ? "#fff" : "rgba(255,255,255,.7)",
            border: 0,
          }}
          onClick={() => setTabsKey(1)}
        >
          Invest
        </a>
        <a
          role="tab"
          className={`tab h-[100%] font-GothamBold font-extrabold ${tabsKey === 2 && "text-[#fff]"}`}
          style={{
            backgroundColor: tabsKey === 2 ? "rgba(255, 255, 255, .2)" : "transparent",
            color: tabsKey === 2 ? "#fff" : "rgba(255,255,255,.7)",
            border: 0,
          }}
          onClick={() => setTabsKey(2)}
        >
          Stake
        </a>
        <a
          role="tab"
          className={`tab h-[100%]  font-GothamBold font-extrabold ${tabsKey === 3 && " text-[#fff]"}`}
          style={{
            backgroundColor: tabsKey === 3 ? "rgba(255, 255, 255, .2)" : "transparent",
            color: tabsKey === 3 ? "#fff" : "rgba(255,255,255,.7)",
            border: 0,
          }}
          onClick={() => setTabsKey(3)}
        >
          Unstake
        </a>
      </div>
      <div className="h-[414px]  px-[20px]" style={{ backgroundColor: "rgba(255, 255, 255, .2)" }}>
        <div className="w-[100%] py-[28px]">
          <div className="text-[20px] font-GothamBold font-bold text-[rgba(38,36,66,.5)] bg-[rgba(255,255,255,.6)] flex justify-center items-center w-[311px] h-[66px] rounded-[10px]">
            SOLD OUT
          </div>
          <div className="mt-[34px]">
            <div className="text-[33px] font-GothamBold text-center">${total}</div>
            <div className="mt-[7px] font-Gotham text-[14px] text-center text-[rgba(255,255,255,.5)]">
              Maximum funding goal reached
            </div>
            <div className="w-[100%] h-[10px] relative mt-[12px]">
              <div
                className={` h-[100%] rounded-[80px] absolute left-0 top-0`}
                style={{
                  width: `${(item.soldShares / item.shares) * 100}%`,
                  background: "linear-gradient(90deg, #FF975C 0%, #215FFF 100%)",
                }}
              ></div>
              <div className="w-[100%] h-[100%] rounded-[80px]" style={{ backgroundColor: "rgba(0,0,0,.3)" }}></div>
            </div>
            <div className="mt-[23px] font-Gotham text-[12px] h-[80px] text-center text-[rgba(255,255,255,1)] leading-[16px]" >
              The financing for this project has reached the maximum amount. If you need to purchase, please purchase
              through the Marketplace.
            </div>
            <div
              className="text-[14px] mt-[12px] font-GothamBold font-bold w-[100%] h-[45px] rounded-[50px] flex justify-center items-center cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
              }}
              onClick={() => goto()}
            >
              Marketplace
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
