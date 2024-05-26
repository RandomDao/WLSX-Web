/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import question from "~~/app/assets/images/question.png";
import Token from "~~/app/assets/images/token.png";
import { moneyFormate } from "~~/utils";
import { nftABIConfig, WLSXAbiConfig } from "~~/utils/config/config";
import { getBlockExplorerAddressLink, getBlockExplorerTxLink } from "~~/utils/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import explorerIcon from "~~/app/assets/images/explorerIcon.png";

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
export const PortfolioHeader = ({ item, checkSumAddress, queryUserInfo }: any) => {
  const { targetNetwork } = useTargetNetwork();

  const goExpolreUser = () => {
    window.open(getBlockExplorerAddressLink(targetNetwork, checkSumAddress))
  };
  const shrotAddress = checkSumAddress?.slice(0, 4) + "..." + checkSumAddress?.slice(-4);

  return (
    <>
      <div className="flex justify-between items-center pt-[34px] px-[40px]">
        <div className="flex gap-[26px]">
          <BlockieAvatar address={checkSumAddress ?? ""} size={95} rounded={"rounded-full"} />
          <div>
            <div className="text-[24px] font-GothamBold">{shrotAddress}</div>
            <div
              className="text-[16px] font-Gotham text-[rgba(255,255,255,.5)] flex items-center cursor-pointer"
              onClick={e => goExpolreUser()}
            >
              {shrotAddress}
              {/* <div
                className="w-[16px] h-[16px] rounded-[6px] flex justify-center items-center ml-[5px]"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                }}
              > */}
              <div className="ml-[6px]">
                <Image src={explorerIcon} width={10} height={10} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[20px] font-GothamBold flex items-center gap-[5px]">
            Total Solar Power
            <Image src={question} alt="" width={17} height={17} />
          </div>
          <div className="text-right mt-[15px]">
            <span className="text-[50px] font-GothamBold">0.</span>
            <span className="text-[30px] font-GothamBold">0</span>
          </div>
        </div>
      </div>
    </>
  );
};
