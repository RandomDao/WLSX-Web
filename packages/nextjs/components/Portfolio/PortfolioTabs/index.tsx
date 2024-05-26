/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Activities } from "./components/Activities";
import { Claim } from "./components/Claim";
import { Items } from "./components/Items";
import { Lists } from "./components/Lists";
import { Offers } from "./components/Offers";
import { Portfolio } from "./components/Portfolio";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import explorerIcon from "~~/app/assets/images/explorerIcon.png";
import question from "~~/app/assets/images/question.png";
import Token from "~~/app/assets/images/token.png";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
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

/**
 * Site footer
 */
export const PortfolioTabs = ({ item, checkSumAddress, queryUserInfo, userInfo }: any) => {
  const { targetNetwork } = useTargetNetwork();
  const [tabsKey, setTabsKey] = useState(1);

  const goExpolreUser = () => {
    window.open(getBlockExplorerAddressLink(targetNetwork, checkSumAddress));
  };
  const shrotAddress = checkSumAddress?.slice(0, 4) + "..." + checkSumAddress?.slice(-4);
  const tabList = [
    {
      id: 1,
      name: "Portfolio",
    },
    {
      id: 2,
      name: "Items",
    },
    {
      id: 3,
      name: "Claimed",
    },
    {
      id: 4,
      name: "Listed",
    },
    {
      id: 5,
      name: "Offers",
    },
    {
      id: 6,
      name: "Activities",
    },
  ];
  return (
    <>
      <div className="mt-[30px]">
        <div role="tablist" className="tabs tabs-lifted h-[48px] px-[45px]">
          {tabList.map((item, key) => (
            <a
              key={key}
              role="tab"
              className={`tab h-[100%] font-GothamBold font-extrabold ${tabsKey === item.id && "text-[#fff]"}`}
              style={{
                backgroundColor: tabsKey === item.id ? "rgba(255, 255, 255, .1)" : "transparent",
                color: tabsKey === item.id ? "#fff" : "rgba(255,255,255,.7)",
                border: 0,
              }}
              onClick={() => setTabsKey(key + 1)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="bg-[rgba(255,255,255,.1)] w-[100%] min-h-[300px]">
          {tabsKey === 1 && <Portfolio userInfo={userInfo} queryUserInfo={queryUserInfo} />}
          {tabsKey === 2 && <Items userInfo={userInfo} queryUserInfo={queryUserInfo} />}
          {tabsKey === 3 && <Claim userInfo={userInfo} queryUserInfo={queryUserInfo} />}
          {tabsKey === 4 && <Lists userInfo={userInfo} queryUserInfo={queryUserInfo} />}
          {tabsKey === 5 && <Offers userInfo={userInfo} queryUserInfo={queryUserInfo} />}
          {tabsKey === 6 && <Activities userInfo={userInfo} queryUserInfo={queryUserInfo} />}
        </div>
      </div>
    </>
  );
};
