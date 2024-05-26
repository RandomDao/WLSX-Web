/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import explorerIcon from "~~/app/assets/images/explorerIcon.png";
import question from "~~/app/assets/images/question.png";
import Token from "~~/app/assets/images/token.png";
import { MyProjectCard } from "~~/components/MyProjectCard";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { getInvestTxList } from "~~/services/api/api";
import { moneyFormate } from "~~/utils";
import { nftABIConfig, WLSXAbiConfig } from "~~/utils/config/config";
import { getBlockExplorerAddressLink, getBlockExplorerTxLink } from "~~/utils/scaffold-eth";

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Site footer
 */
export const Portfolio = ({ userInfo, queryUserInfo, checkSumAddress }: any) => {
  const { targetNetwork } = useTargetNetwork();
  const [activeList, setActiveList] = useState([]);
  const [activeTabs, setActiveTabs] = useState("All");
  const filterTabs = [{ name: "All" }, { name: "Active" }, { name: "Completed" }];
  const listPortfolio = [
    {
      id: 1,
      name: "Total Investment",
    },
    {
      id: 2,
      name: "Claimed",
    },
    {
      id: 3,
      name: "Sales",
    },
    {
      id: 4,
      name: "Residual",
    },
  ];
  useEffect(() => {
    // queryInvestTxList();
  });
  const filterTabsClick = (item: { name: any }) => {
    setActiveTabs(item.name);
  };

  const queryInvestTxList = async () => {
    const res = await getInvestTxList({
      page: 1,
      pageSize: 999,
    });
    setActiveList(res);
  };
  return (
    <>
      <div className="px-[45px] py-[49px]">
        <div className="flex justify-between">
          {listPortfolio.map((item, key) => (
            <div key={key} className="w-[260px] h-[160px] rounded-[12px] bg-[rgba(255,255,255,.2)] overflow-hidden">
              <div
                style={{
                  background: "linear-gradient(91.81deg, #9A5CFF -4.12%, #215FFF 100%)",
                }}
                className="w-[100%] h-[47px] flex justify-center items-center text-[14px] font-Gotham"
              >
                {item.name}
              </div>
              <div className="w-[100%] h-[113px] flex items-center justify-center text-[24px] font-GothamBold">
                $500,000
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[61px] flex items-center">
          <div className="text-[23px] text-[#fff] font-extrabold   font-PPNeueMachina text-left w-[100%]">
            My Investments({activeList?.length || 0})
          </div>
          <div className="flex gap-[22px]">
            {filterTabs.map((item, key) => (
              <div
                key={key}
                onClick={() => filterTabsClick(item)}
                className={`px-[22px] h-[24px] rounded-[24px] text-[14px] font-GothamBold cursor-pointer  text-center flex items-center justify-center hover:text-[#fff] hover:bg-[rgba(213,199,255,.2)] ${
                  activeTabs === item.name ? "text-[#fff] bg-[rgba(213,199,255,.2)]" : "text-[rgba(255,255,255,.5)]"
                }`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[20px] flex gap-[17px]">
          {userInfo?.invest?.map((item: any, key: any) =>
            activeTabs == "Active"
              ? item?.projectInfo?.stage === "INPROGRESS" && (
                  <MyProjectCard
                    status="active"
                    key={key}
                    tbaAddress={userInfo?.tbaAddress}
                    item={item}
                    checkSumAddress={checkSumAddress}
                    queryUserInfo={queryUserInfo}
                  />
                )
              : activeTabs == "Completed"
              ? item?.projectInfo?.stage === "FINISHED" && (
                  <MyProjectCard
                    status="active"
                    key={key}
                    tbaAddress={userInfo?.tbaAddress}
                    item={item}
                    checkSumAddress={checkSumAddress}
                    queryUserInfo={queryUserInfo}
                  />
                )
              : activeTabs == "All" && (
                  <MyProjectCard
                    status="active"
                    key={key}
                    tbaAddress={userInfo?.tbaAddress}
                    item={item}
                    checkSumAddress={checkSumAddress}
                    queryUserInfo={queryUserInfo}
                  />
                ),
          )}
        </div>
      </div>
    </>
  );
};
