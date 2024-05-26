/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LoadingBox } from "../LoadingBox";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import question from "~~/app/assets/images/question.png";
import Token from "~~/app/assets/images/token.png";
import { moneyFormate } from "~~/utils";
import { nftABIConfig, WLSXAbiConfig } from "~~/utils/config/config";
import Eign from "~~/app/assets/images/eign.png";

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
export const MyProjectCard = ({ item, checkSumAddress, queryUserInfo }: any) => {
  const router = useRouter();
  const [loadingBoxVisble, setLoadingBoxVisble] = useState(false);
  const [stepActive, setStepActive] = useState(1);
  const [canStakeCount, setCanStatkeCount] = useState(0);
  const goToDetail = () => {
    router.push(`/projectDetail?id=${item?.projectInfo?.id}`);
  };
  const goOpenSea = () => {
    window.open("https://opensea.io");
  };
  const { data: unStakeNftData, write: unStakeNftABI } = useContractWrite({
    ...WLSXAbiConfig,
    functionName: "unstakeNft",
    args: [item?.stakeIndex, item?.shares],
  });
  const { isLoading: unStakeNftLoading, isSuccess: unStakeNftSuccess } = useWaitForTransaction({
    hash: unStakeNftData?.hash,
  });
  useEffect(() => {
    if (unStakeNftData?.hash && !unStakeNftLoading && unStakeNftSuccess) {
      setStepActive(99);
      item.stakeableShares += item.shares;
      item.shares = 0;
    }
  }, [unStakeNftLoading, unStakeNftSuccess, unStakeNftData]);
  const { data: nftAmount, refetch: refeshNftAmount }: any = useContractRead(
    checkSumAddress && item?.nftId
      ? {
        ...nftABIConfig,
        functionName: "balanceOf",
        args: [checkSumAddress, item.nftId],
      }
      : {},
  );
  const { data: claimAmount, refetch: refeshClaimAmount }: any = useContractRead(
    checkSumAddress
      ? {
        ...WLSXAbiConfig,
        functionName: "getClaimableAmount",
        args: [checkSumAddress, [item.stakeIndex]],
      }
      : {},
  );
  const unStake = () => {
    if (item.shares > 0) {
      setStepActive(5);
      setLoadingBoxVisble(true);
      unStakeNftABI();
    } else {
      toast.error("There is no Token that can be decompressed", {
        position: "top-center",
      });
    }
  };

  const { data: stakeNftData, write: stakeNftABI } = useContractWrite({
    ...WLSXAbiConfig,
    functionName: "stakeNft",
    args: [item?.nftId, item?.stakeableShares ?? parseInt(nftAmount)],
  });
  const { isLoading: stakeNftLoading, isSuccess: stakeNftSuccess } = useWaitForTransaction({
    hash: stakeNftData?.hash,
  });
  useEffect(() => {
    if (stakeNftData?.hash && !stakeNftLoading && stakeNftSuccess) {
      if (item.projectId && item.userId) {
        item.shares += item.stakeableShares;
        item.stakeableShares = 0;
      } else {
        item.shares = parseInt(nftAmount);
        item.stakeableShares = 0;
        queryUserInfo();
      }
      setStepActive(99);
    }
  }, [stakeNftLoading, stakeNftSuccess, stakeNftData]);
  const stake = () => {
    if (item.stakeableShares > 0 || parseInt(nftAmount) > 0) {
      setStepActive(4);
      setLoadingBoxVisble(true);
      stakeNftABI();
    } else {
      toast.error("There are no tokens that can be pledged", {
        position: "top-center",
      });
    }
  };
  const { data: claimData, write: claimABI } = useContractWrite({
    ...WLSXAbiConfig,
    functionName: "claim",
    args: [[item?.stakeIndex]],
  });
  const { isLoading: claimLoading, isSuccess: claimSuccess } = useWaitForTransaction({
    hash: claimData?.hash,
  });
  useEffect(() => {
    if (claimData?.hash && !claimLoading && claimSuccess) {
      // item.claimedReward = 0;
      refeshClaimAmount();
      setStepActive(99);
    }
  }, [claimLoading, claimSuccess, claimData]);
  const claim = () => {
    if (parseFloat(claimAmount ?? "0") > 0) {
      setStepActive(1);
      setLoadingBoxVisble(true);
      claimABI();
    } else {
      toast.error("You can not withdraw money yet", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <LoadingBox
        open={loadingBoxVisble}
        setOpen={setLoadingBoxVisble}
        projectDetail={item}
        stepActive={stepActive}
        isGo={false}
      />
      <div
        className="content w-[374px] ml-[-40px] h-[490px] rounded-[12px] flex items-center justify-center shadow-xl mt-[57px]"
        style={{
          boxSizing: "border-box",
          transform: "scale(0.8)",
          transformOrigin: '0 0'
        }}
      //
      >
        <div
          className="card w-[100%] h-[100%] rounded-[12px] relative"
          style={{ backgroundColor: "rgba(213, 199, 255, .1)" }}
        >
          <div className="absolute top-[-57px] z-10 left-[132px] cursor-pointer">
            <div
              className="content w-[114px] h-[114px] rounded-[114px] flex items-center justify-center"
              onClick={() => goToDetail()}
              style={{
                boxSizing: "border-box",
                padding: "2px",
                backgroundImage: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
              }}
            >
              <div className="w-[110px] h-[110px] rounded-[110px] overflow-hidden">
                <img className="w-[110px] h-[110px]" src={"https://i.ibb.co/gTDyLyn/azuro-logo.jpg"} alt="" />
              </div>
            </div>
            {/* <div className="absolute right-[-10px] bottom-[-15px] ">
            <Image src={Token} alt="" width={57} height={57} />
          </div> */}
          </div>

          <div className="pt-[55px] px-[22px]  overflow-hidden">
            <div className="mt-[23px] text-[16px] font-PPNeueMachina text-center leading-[22px] h-[46px]">
              {/* {item?.projectInfo?.title} */}
              azuro
            </div>
            <div className="flex flex-col gap-[18px] mt-[23px]">
              <div
                className="rounded-[8px] pt-[15px] pb-[15px] px-[23px] flex justify-between"
                style={{
                  backgroundColor: "rgba(213, 199, 255, .1)",
                }}
              >
                <div>
                  <div className="text-[14px] font-GothamBold text-[rgba(255,255,255,.6)]">Amount</div>
                  <div className="text-[26px] font-GothamBold">
                    10
                    {/* {item?.stakeableShares ?? parseInt(nftAmount)} */}
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div
                    className="rounded-[40px] pt-[8px] pb-[10px] font-normal px-[20px] text-[14px] font-Gotham text-[rgba(255,255,255,.6)] cursor-pointer"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, .1)",
                    }}
                    onClick={stake}
                  >
                    Stake
                  </div>
                  <div
                    className="rounded-[40px] pt-[8px] pb-[10px] font-normal px-[20px] text-[14px] font-Gotham text-[rgba(255,255,255,.6)] cursor-pointer"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, .1)",
                    }}
                    onClick={goOpenSea}
                  >
                    Opensea
                  </div>
                </div>
              </div>
              <div
                className="rounded-[8px] pt-[15px] pb-[15px] px-[23px] flex justify-between"
                style={{
                  backgroundColor: "rgba(213, 199, 255, .1)",
                }}
              >
                <div>
                  <div className="text-[14px] font-GothamBold text-[rgba(255,255,255,.6)]">STAKED</div>
                  <div className="text-[26px] font-GothamBold">{item?.shares ?? 0}</div>
                </div>
                <div className="flex items-center">
                  <div
                    className="rounded-[40px] pt-[8px] pb-[10px] font-normal px-[20px] text-[14px] font-Gotham text-[rgba(255,255,255,.6)] cursor-pointer"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, .1)",
                    }}
                    onClick={unStake}
                  >
                    Unstake
                  </div>
                </div>
              </div>
              <div
                className="rounded-[8px] pt-[15px] pb-[15px] px-[23px] flex justify-between"
                style={{
                  backgroundColor: "rgba(213, 199, 255, .1)",
                }}
              >
                <div>
                  <div className="text-[14px] font-GothamBold text-[rgba(255,255,255,.6)] flex items-center gap-[5px]">
                    INCOME
                    <Image src={question} alt="" width={14} height={14} />
                  </div>
                  <div className="text-[26px] font-GothamBold flex items-center gap-[6px]">
                    <Image src={Token} alt="" width={22} height={22} />
                    {moneyFormate(claimAmount?.toString() ?? "", true)}
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    className="rounded-[40px] pt-[8px] pb-[10px] font-normal px-[20px] text-[14px] font-Gotham text-[rgba(255,255,255,.6)] cursor-pointer"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, .1)",
                    }}
                    onClick={claim}
                  >
                    Claim
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
