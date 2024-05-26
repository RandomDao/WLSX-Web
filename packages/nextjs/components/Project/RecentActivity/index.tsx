/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import explorerIcon from "~~/app/assets/images/explorerIcon.png";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { cardTimeFormate, moneyFormate, shortAddress } from "~~/utils";
import { getBlockExplorerTxLink } from "~~/utils/scaffold-eth";
import { getProjectActivityList, userActivityList } from "~~/services/api/api";

/**
 * Site footer
 */
export const RecentActivity = ({ id }: any) => {
  const { targetNetwork } = useTargetNetwork();
  const [activeTabs, setActiveTabs] = useState("All");
  const filterTabs = [{ name: "All" }, { name: "My Activity" }];
  const [projectActive, setProjectActive] = useState<any>([]);


  const goExpolre = (e: any, item: any) => {
    e.stopPropagation();
    window.open(getBlockExplorerTxLink(targetNetwork.id, item.txid));
  };
  const filterTabsClick = (item: { name: any }) => {
    setActiveTabs(item.name);
  };
  useEffect(() => {
    if (id && activeTabs) {
      if (activeTabs === "All") queryProjectActive();
      if (activeTabs === "My Activity") queryUserActivityList();
    }
  }, [activeTabs, id])
  const queryUserActivityList = async () => {
    const params = {
      projectId: id,
      page: 1,
      pageSize: 999,
    };
    const res = await userActivityList(params);
    setProjectActive(res);
  }
  const queryProjectActive = async () => {
    const params = {
      projectId: id,
      page: 1,
      pageSize: 999,
    };
    const res = await getProjectActivityList(params);
    setProjectActive(res);
  };
  return (
    <div className="section w-[100%] mt-[74px]" id="section3">
      <div className="flex items-center justify-between">
        <div className="text-[32px] text-[#fff] font-extrabold leading-[61px] font-PPNeueMachina title-text-shadow">
          Recent Activity
        </div>
        <div className="flex gap-[22px]">
          {filterTabs.map((item, key) => (
            <div
              key={key}
              onClick={() => filterTabsClick(item)}
              className={`px-[22px] h-[24px] rounded-[24px] text-[14px] font-GothamBold cursor-pointer  text-center flex items-center justify-center hover:text-[#fff] hover:bg-[rgba(213,199,255,.2)] ${activeTabs === item.name ? "text-[#fff] bg-[rgba(213,199,255,.2)]" : "text-[rgba(255,255,255,.5)]"
                }`}
            >
              {item.name}
            </div>
          ))}
        </div>
        {/* <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform"
         className="border-[rgba(255,255,255,.5)] border-[1px] rounded-[16px]"
        >
          <ToggleButton value="All">Web</ToggleButton>
          <ToggleButton value="android">My Active</ToggleButton>
        </ToggleButtonGroup> */}
      </div>
      <div className="mt-[42px]">
        <div
          className="w-[100%] rounded-[10px] py-[7px] font-GothamBold text-[14px] font-bold flex"
          style={{ background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)" }}
        >
          <div className="w-[260px] pl-[29px]">Activity</div>
          <div className="w-[314px]">Date(UTC)</div>
          <div className="w-[229px]">Amount</div>
          <div className="w-[162px] text-right pr-[51px]">Hash</div>
        </div>
        {projectActive.map((item: any, key: any) => (
          <div
            key={key}
            className="pt-[29px] pb-[34px] text-[14px] font-Gotham flex mt-[9px] rounded-[12px]"
            style={{
              backgroundColor: key % 2 == 1 ? "rgba(213, 199, 255, .1)" : "rgba(213, 199, 255, .2)",
            }}
          >
            <div className="w-[263px] pl-[29px] ">{item.activity}</div>
            <div className="w-[314px]">{cardTimeFormate(item.blockTime)}</div>
            <div className="w-[229px] pl-[5px]">${moneyFormate(item.amount)}</div>
            {/* <div className="w-[210px]">{moneyFormate(item.value)?.toString()}</div> */}

            <div
              className="w-[162px] text-right pr-[51px] flex  items-center cursor-pointer justify-end"
              onClick={e => goExpolre(e, item)}
            >
              {shortAddress(item.txid)}
              <div
                className="w-[16px] h-[16px] rounded-[6px] flex justify-center items-center ml-[5px]"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                }}
              >
                <Image src={explorerIcon} width={6} height={6} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
