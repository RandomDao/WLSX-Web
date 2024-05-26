/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/navigation'
import type { NextPage } from "next";
import toast from "react-hot-toast";
import { Address, getAddress } from "viem";
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import rightArrow from "~~/app/assets/images/rightArrow.png";
import Token from "~~/app/assets/images/token.png";
import { LoadingBox } from "~~/components/LoadingBox";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { getProjectActivityList, getProjectDetail } from "~~/services/api/api";
import { useGlobalState } from "~~/services/store/store";
import { moneyFormate, shortAddress, toUSDT } from "~~/utils";
import { nftABIConfig, WLSXABIAddress, WLSXAbiConfig, WLSXToken, usdtABIConfig } from "~~/utils/config/config";

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

const projectDetail: NextPage = ({ params }: any) => {
  const token = useGlobalState(({ token }) => token);
  // const address = useGlobalState(({ address }) => address);

  const { address } = useAccount();
  let checkSumAddress = address;
  if (address) {
    checkSumAddress = getAddress(address as Address);
  }
  // const [checkSumAddress, setcheckSumAddress] = useState('0xb0950e2c9e309D725a67Fa65F3d40F38d966a878')
  const router = useRouter();
  const [loadingStep, setLoadingStep] = useState<any>([]);
  const [tabsKey, setTabsKey] = useState(1);
  const [tokenNum, setTokenNum] = useState(0);
  const [nftStake, setNftStake] = useState(0);
  const [tokenWidth, setTokenWidth] = useState(35);
  const [unStakeTokenWidth, setUnStakeTokenWidth] = useState(35);
  const [unStakeToken, setUnStakeToken] = useState(0);
  const [projectDetail, setProjectDetail] = useState<any>({});
  const initialized = useRef(false);
  const [maxApprove, setMaxApprove] = useState(false);
  const [investStatkeStatus, setInvestStatkeStatus] = useState(false);
  const [projectActive, setProjectActive] = useState<any>([]);
  const [myStakeToken, setMyStakeToken] = useState(0);
  const [sharesIndex, setSharesIndex] = useState(-1);
  const [loadingBoxVisible, setLoadingBoxVisble] = useState(false);
  const [stepActive, setStepActive] = useState(1);
  const [stakeTokenWidth, setStakeTokenWidth] = useState(35);
  const { id } = params;
  const queryDetail = async () => {
    const res = await getProjectDetail(id);
    setProjectDetail(res);
  };
  const queryProjectActive = async () => {
    const params = {
      projectId: id,
      page: 1,
      pageSize: 999,
    };
    const res = await getProjectActivityList(params);
    setProjectActive(res);
  };
  useEffect(() => {
    if (!initialized.current) {
      if (id) {
        queryDetail();
        queryProjectActive();
      }
    }
  }, [id]);
  const goMy = () => {
    router.push(`/portfolio`);
  };
  const goBackProject = () => {
    router.push(`/project`);
  };
  const { data: userStakeList, refetch: refeshStake } = useContractRead(
    checkSumAddress
      ? {
          ...WLSXAbiConfig,
          functionName: "getUserStakeList",
          args: [checkSumAddress, 0, 100],
        }
      : {},
  );
  const { data: balance } = useContractRead(
    checkSumAddress
      ? {
          ...usdtABIConfig,
          functionName: "balanceOf",
          args: [checkSumAddress],
          onError: err => {
            console.log(checkSumAddress);
          },
        }
      : {},
  );
  const { data: allowance, refetch: refeshApproveUSDT }: any = useContractRead(
    checkSumAddress
      ? {
          ...usdtABIConfig,
          functionName: "allowance",
          args: [checkSumAddress, WLSXABIAddress],
        }
      : {},
  );
  const { data: nftAmount, refetch: refeshNftAmount }: any = useContractRead(
    checkSumAddress
      ? {
          ...nftABIConfig,
          functionName: "balanceOf",
          args: [checkSumAddress, id],
        }
      : {},
  );
  const { data: isApproved, refetch: refeshApproveNFT }: any = useContractRead(
    checkSumAddress
      ? {
          ...nftABIConfig,
          functionName: "isApprovedForAll",
          args: [checkSumAddress, WLSXABIAddress],
        }
      : {},
  );
  // readAmount();
  const changeTokenNum = (e: any) => {
    console.log(e.target.value === "NaN", Number.isNaN(e.target.value), e.target.value, e.target.value == "");
    const base = 27;

    if (!e.target.value || e.target.value == "NaN" || Number.isNaN(e.target.value) || e.target.value == "") {
      setTokenNum(0);
      setTokenWidth(35);
      return;
    }
    const v = parseInt(e.target.value);
    if (v.toString().length == 1) {
      setTokenNum(v);
      setTokenWidth(35);
    } else {
      setTokenNum(v);
      setTokenWidth(v.toString().length * 20 + base);
    }
  };

  const onChangeunStakeToken = (e: any) => {
    const base = 27;
    console.log(e);
    if (!e.target.value || e.target.value == "NaN" || Number.isNaN(e.target.value) || e.target.value == "") {
      setUnStakeToken(0);
      setUnStakeTokenWidth(35);
      return;
    }
    const v = parseInt(e.target.value);
    if (v > myStakeToken) {
      setUnStakeToken(myStakeToken);

      if (v.toString().length == 1) {
        setUnStakeTokenWidth(35);
      } else {
        setUnStakeTokenWidth(v.toString().length * 20 + base);
      }
    } else {
      setUnStakeToken(v);

      if (v.toString().length == 1) {
        setUnStakeTokenWidth(35);
      } else {
        setUnStakeTokenWidth(v.toString().length * 20 + base);
      }
    }
  };
  const onChangeStakeToken = (e: any) => {
    const base = 27;
    console.log(e);
    if (!e.target.value || e.target.value == "NaN" || Number.isNaN(e.target.value) || e.target.value == "") {
      setNftStake(0);
      setStakeTokenWidth(35);
      return;
    }
    const v = parseInt(e.target.value);
    const at = parseInt(nftAmount);
    if (v > at) {
      setNftStake(at);

      if (v.toString().length == 1) {
        setStakeTokenWidth(35);
      } else {
        setStakeTokenWidth(v.toString().length * 20 + base);
      }
    } else {
      setNftStake(v);

      if (v.toString().length == 1) {
        setStakeTokenWidth(35);
      } else {
        setStakeTokenWidth(v.toString().length * 20 + base);
      }
    }
  };
  const maxToken = () => {
    const base = 27;

    const sy = projectDetail.shares - projectDetail.soldShares;
    const canBuy = parseFloat(moneyFormate(balance?.toString() ?? "", true)) / countShare();
    if (canBuy > sy) {
      setTokenNum(sy);
      setTokenWidth(sy.toString().length * 20 + base);
    } else {
      setTokenNum(parseInt(canBuy.toString()));
      setTokenWidth(parseInt(canBuy.toString()).toString().length * 20 + base);
    }
    console.log(canBuy);
  };
  const countShare = () => {
    const b = parseFloat(moneyFormate(projectDetail.amount, true)) / projectDetail.shares;
    return b;
  };
  const changeMaxApprove = (e: { target: { checked: any } }) => {
    setMaxApprove(e.target.checked);
  };
  //授权USDT

  const {
    data: approveData,
    isError: approveIsError,
    isLoading: approveIsLoading,
    write: approveABI,
  } = useContractWrite({
    ...usdtABIConfig,
    functionName: "approve",
    args: [WLSXABIAddress, maxApprove ? toUSDT("99999999999999999999999") : toUSDT(tokenNum * countShare())],
  });
  const { isLoading: approveUSDTLoading, isSuccess: approveUSDTSuccess } = useWaitForTransaction({
    hash: approveData?.hash,
  });
  useEffect(() => {
    //授权成功进行质押
    if (approveData?.hash && !approveUSDTLoading && approveUSDTSuccess) {
      invest();
    }
  }, [approveUSDTLoading, approveUSDTSuccess, approveData]);

  const {
    data: investData,
    isError: investIsError,
    write: investABI,
  } = useContractWrite({
    ...WLSXAbiConfig,
    functionName: "invest",
    args: [projectDetail.projectIndex, tokenNum],
  });

  const { isLoading: investIsLoading, isSuccess: investIsSuccess } = useWaitForTransaction({
    hash: investData?.hash,
  });
  useEffect(() => {
    console.log(investIsLoading, investIsSuccess, investData, investStatkeStatus);
    if (investData?.hash && !investIsLoading && investIsSuccess) {
      if (investStatkeStatus) {
        stake();
      } else {
        setStepActive(99);
      }
    }
  }, [investIsLoading, investIsSuccess, investData]);

  //授权NFT
  const {
    data: approveNftData,
    isError: approveNftIsError,
    isLoading: approveNftIsLoading,
    write: approveNftABI,
  } = useContractWrite({
    ...nftABIConfig,
    functionName: "setApprovalForAll",
    args: [WLSXABIAddress, true],
  });
  const { isLoading: approveNftLoading, isSuccess: approveNftSuccess } = useWaitForTransaction({
    hash: investData?.hash,
  });
  useEffect(() => {
    if (approveNftData?.hash && !approveNftLoading && approveNftSuccess) {
      stake();
    }
  }, [approveNftLoading, approveNftSuccess, approveNftData]);

  const { data: stakeNftData, write: stakeNftABI } = useContractWrite({
    ...WLSXAbiConfig,
    functionName: "stakeNft",
    args: [id, nftStake],
  });
  const { isLoading: stakeNftLoading, isSuccess: stakeNftSuccess } = useWaitForTransaction({
    hash: stakeNftData?.hash,
  });
  useEffect(() => {
    if (stakeNftData?.hash && !stakeNftLoading && stakeNftSuccess) {
      setNftStake(0);
      refeshNftAmount();
      refeshApproveUSDT();
      setStepActive(99);
    }
  }, [stakeNftLoading, stakeNftSuccess, stakeNftData]);
  const { data: unStakeNftData, write: unStakeNftABI } = useContractWrite({
    ...WLSXAbiConfig,
    functionName: "unstakeNft",
    args: [sharesIndex, unStakeToken],
  });
  const { isLoading: unStakeNftLoading, isSuccess: unStakeNftSuccess } = useWaitForTransaction({
    hash: unStakeNftData?.hash,
  });
  useEffect(() => {
    if (unStakeNftData?.hash && !unStakeNftLoading && unStakeNftSuccess) {
      setUnStakeToken(0);
      refeshNftAmount();
      refeshApproveUSDT();
      setStepActive(99);
    }
  }, [unStakeNftLoading, unStakeNftSuccess, unStakeNftData]);

  const invest = async (step: any = [], isStep = false) => {
    if (tokenNum <= 0) {
      toast.error("Investment cannot be 0", {
        position: "top-center",
      });
      return;
    }
    let steps = step;

    const { data } = await refeshApproveUSDT();
    if (data !== undefined) {
      const a = parseFloat(moneyFormate(data, true));
      // console.log(a, tokenNum * countShare())
      if (a >= tokenNum * countShare()) {
        setStepActive(2);
        investABI();
        if (isStep) {
          steps.push(2);
          setLoadingStep(step);
        }
      } else {
        setStepActive(1);
        approveABI();
        if (isStep) {
          steps.push(1);
          steps.push(2);
          setLoadingStep(step);
        }
      }
    }
    setLoadingBoxVisble(true);
  };
  const investStatke = async () => {
    if (tokenNum <= 0) {
      toast.error("Investment cannot be 0", {
        position: "top-center",
      });
      return;
    }
    const step = [];
    setInvestStatkeStatus(true);
    setNftStake(tokenNum);
    const { data } = await refeshApproveNFT();
    if (data) {
      step.push(4);
    } else {
      step.push(3);
      step.push(4);
    }
    invest(step, true);
  };
  const maxStake = () => {
    setNftStake(parseInt(nftAmount));
  };
  const stake = async (onlyStake = false) => {
    if (nftStake <= 0) {
      toast.error("Investment cannot be 0", {
        position: "top-center",
      });
      return;
    }
    const { data } = await refeshApproveNFT();
    if (onlyStake) {
      const step = [];
      if (data) {
        step.push(4);
      } else {
        step.push(3);
        step.push(4);
      }
      setLoadingStep(step);
      setLoadingBoxVisble(true);
    }
    if (data) {
      setStepActive(4);
      stakeNftABI();
    } else {
      setStepActive(3);
      approveNftABI();
    }
  };
  const unStakeMax = async () => {
    setUnStakeToken(myStakeToken);
  };
  const unStake = () => {
    if (unStakeToken <= 0) {
      toast.error("Investment cannot be 0", {
        position: "top-center",
      });
      return;
    }
    setLoadingBoxVisble(true);
    unStakeNftABI();
  };
  useEffect(() => {
    let i = -1;
    i = userStakeList?.findIndex(item => item.projectIndex == id) ?? -1;
    setMyStakeToken(userStakeList?.[i]?.shares);
    setSharesIndex(i);
  }, [userStakeList]);

  return (
    <>
      <div className="w-[100%] flex items-center flex-col justify-center">
        <div className="flex items-center flex-col  pt-[108px] w-[1178px] ">
          <div className="w-[100%]">
            {/* 顶部 */}
            <div className="flex items-center gap-[20px]">
              <div
                className="font-normal font-Gotham text-[14px] cursor-pointer"
                style={{ color: "rgba(255,255,255,.4)" }}
                onClick={goBackProject}
              >
                Projects
              </div>
              <Image src={rightArrow} alt="" width={4} height={7} />
              <div className="text-[14px] font-GothamBold font-bold "> Details</div>
            </div>
            {/*  */}
            <div className="flex gap-[44px] mt-[56px] ">
              <div className=" rounded-[12px] w-[776px] overflow-hidden">
                <div
                  className="pt-[68px] pb-[63px] pl-[59px] pr-[83px] flex h-[241px]"
                  style={{
                    background: `url(${projectDetail.thumbnail})`,
                  }}
                >
                  <div className="relative">
                    <div
                      className="content w-[114px] h-[114px] rounded-[114px] flex items-center justify-center"
                      style={{
                        boxSizing: "border-box",
                        padding: "2px",
                        backgroundImage: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
                      }}
                    >
                      <div className="w-[110px] h-[110px] rounded-[110px] overflow-hidden">
                        <img className="w-[110px] h-[110px]" src={projectDetail?.logoUrl} alt="" />
                      </div>
                    </div>
                    {/* <div className="absolute right-[-10px] bottom-[-15px] ">
                    <Image src={Token} alt="" width={57} height={57} />
                  </div> */}
                  </div>
                  <div className="ml-[63px]">
                    <div className="text-[32px] font-PPNeueMachina font-extrabold mt-[5px]">{projectDetail?.title}</div>
                    <div
                      className="mt-[0px] text-[16px] font-Gotham font-normal"
                      style={{ color: "rgba(255,255,255,.5)" }}
                    >
                      {projectDetail?.intro}
                      {/* The next generation of decentralized data mesh for blockchain and Web3 */}
                    </div>
                  </div>
                </div>
                <div className="h-[222px] py-[86px] flex" style={{ backgroundColor: "rgba(213, 199, 255, .1)" }}>
                  <div className="h-[50px] w-[231px]" style={{ borderRight: "2px solid rgba(255,255,255,.1)" }}>
                    <div className="text-[18px] font-GothamBold font-bold  text-center">
                      ${moneyFormate(projectDetail?.amount)}
                    </div>
                    <div className="text-[14px] font-Gotham  text-center" style={{ color: "rgba(255,255,255,.5)" }}>
                      Fundraise Goal
                    </div>
                  </div>
                  <div className="h-[50px] w-[156px]" style={{ borderRight: "2px solid rgba(255,255,255,.1)" }}>
                    <div className="text-[18px] font-GothamBold font-bold  text-center">{projectDetail.shares}</div>
                    <div className="text-[14px] font-Gotham  text-center" style={{ color: "rgba(255,255,255,.5)" }}>
                      Shares
                    </div>
                  </div>
                  <div className="h-[50px] w-[187px]" style={{ borderRight: "2px solid rgba(255,255,255,.1)" }}>
                    <div className="text-[18px] font-GothamBold font-bold  text-center">{projectDetail.apr}</div>
                    <div className="text-[14px] font-Gotham  text-center" style={{ color: "rgba(255,255,255,.5)" }}>
                      Staking APR
                    </div>
                  </div>
                  <div className="h-[50px] w-[202px]" style={{}}>
                    <div className="text-[18px] font-GothamBold font-bold  text-center">
                      {projectDetail.participants}
                    </div>
                    <div className="text-[14px] font-Gotham  text-center" style={{ color: "rgba(255,255,255,.5)" }}>
                      Participants
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[356px] h-[462px] rounded-[12px] overflow-hidden"
                style={{ backgroundColor: "rgba(213, 199, 255, .1)" }}
              >
               
                {tabsKey === 1 && (
                  <div className="h-[414px] py-[20px] px-[20px]" style={{ backgroundColor: "rgba(255, 255, 255, .2)" }}>
                    <div
                      className="text-[12px] font-Gotham w-[314px] pt-[18px] pb-[18px] pl-[26px] pr-[24px] rounded-[10px] flex items-center justify-center"
                      style={{
                        color: "rgba(255,255,255,.5)",
                        border: "1px solid rgba(255, 255, 255, 0.4)",
                        backgroundColor: "rgba(25,23,60,.5)",
                      }}
                    >
                      Invest USDT to earn NFT and get revenue from WLSX by staking NFT.
                    </div>
                    <div className="flex justify-between items-center mt-[10px]">
                      <div className="font-bold text-[14px] text-[#fff] font-GothamBold">Total raised</div>

                      <div className="flex items-center gap-[8px] font-Gotham font-normal text-[14px]">
                        <Image src={Token} alt="" width={21} height={21} />
                        {moneyFormate(projectDetail.amount, true)}
                      </div>
                    </div>
                    <div className="w-[100%] h-[10px] relative mt-[12px]">
                      <div
                        className={` h-[100%] rounded-[80px] absolute left-0 top-0`}
                        style={{
                          width: `${(projectDetail.soldShares / projectDetail.shares) * 100}%`,
                          background: "linear-gradient(90deg, #FF975C 0%, #215FFF 100%)",
                        }}
                      ></div>
                      <div
                        className="w-[100%] h-[100%] rounded-[80px]"
                        style={{ backgroundColor: "rgba(0,0,0,.3)" }}
                      ></div>
                    </div>
                    <div className="flex justify-end text-[14px] font-Gotham mt-[16px]">
                      <div>Your Balance</div>
                      <div className="ml-[10px]">{moneyFormate(balance?.toString() ?? "", true)} USDT</div>
                    </div>
                    <div className="flex justify-end text-[14px] font-Gotham mt-[7px]">
                      1 Share = {countShare()} USDT
                    </div>

                    <div
                      className="mt-[13px] text-[12px] font-Gotham w-[314px] py-[5px] pl-[19px] pr-[16px] rounded-[10px] flex items-center justify-between"
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
                          value={tokenNum}
                          // key={tokenNum}
                          className="text-[40px] font-GothamBold font-bold border-0 bg-transparent text-[#fff] focus-visible:outline-0"
                          style={{ width: tokenWidth + "px" }}
                          onChange={e => changeTokenNum(e)}
                        />
                        <div className="text-[12px] ml-[6px]" style={{ color: "rgba(255,255,255,.5)" }}>
                          SHARE
                        </div>
                      </div>
                      <div
                        className="w-[75px] h-[41px] flex items-center justify-center text-[#262442] text-[14px] font-GothamBold cursor-pointer rounded-[6px] bg-[#fff]"
                        onClick={maxToken}
                      >
                        MAX
                      </div>
                    </div>
                    <div className="mt-[12px] flex items-center">
                      <input
                        type="checkbox"
                        className="checkbox w-[18px] h-[18px] rounded-[4px]"
                        style={{ border: "1px solid rgba(255,255,255,.4)" }}
                        onChange={changeMaxApprove}
                      />
                      <span className="label-text ml-[6px] text-[12px] font-Gotham font-normal">Approve infinity</span>
                    </div>

                    <div className="flex justify-between mt-[16px]">
                      {!token || !address ? (
                        <RainbowKitCustomConnectButton isProject={true} />
                      ) : (
                        <>
                          <div
                            className="bg-[#615E74] text-[14px] font-GothamBold font-bold w-[122px] h-[45px] rounded-[50px] flex justify-center items-center cursor-pointer"
                            onClick={() => {
                              setInvestStatkeStatus(false);
                              invest?.([], true);
                            }}
                          >
                            Invest
                          </div>
                          <div
                            className="text-[14px] font-GothamBold font-bold w-[175px] h-[45px] rounded-[50px] flex justify-center items-center cursor-pointer"
                            style={{
                              background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
                            }}
                            onClick={investStatke}
                          >
                            <div style={{}}>Invest & Stake</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
                {tabsKey === 2 && (
                  <div
                    className="h-[414px] py-[20px] px-[20px] flex flex-col justify-between"
                    style={{ backgroundColor: "rgba(255, 255, 255, .2)" }}
                  >
                    <div className="mt-[18px] text-[14px] font-GothamBold">
                      Stake NFT to share the revenue from WLSX.
                    </div>
                    <div>
                      <div className="flex justify-between text-[14px] font-Gotham mt-[16px]">
                        <div>Amount</div>
                        <div className="ml-[10px]">{nftAmount?.toString() ?? 0}</div>
                      </div>
                      <div
                        className="mt-[13px] text-[12px] font-Gotham w-[314px] py-[5px] pl-[19px] pr-[16px] rounded-[10px] flex items-center justify-between"
                        style={{
                          color: "rgba(255,255,255,.5)",
                          border: "1px solid rgba(255, 255, 255, 0.4)",
                          backgroundColor: "rgba(25,23,60,.5)",
                        }}
                      >
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="text-[40px] font-GothamBold font-bold border-0 bg-transparent text-[#fff] focus-visible:outline-0"
                            value={nftStake}
                            onChange={e => onChangeStakeToken(e)}
                            style={{ width: stakeTokenWidth + "px" }}
                          />
                          <div className="text-[12px] ml-[6px]" style={{ color: "rgba(255,255,255,.5)" }}>
                            SHARE
                          </div>
                        </div>
                        <div
                          className="w-[75px] h-[41px] flex items-center justify-center text-[#262442] text-[14px] font-GothamBold cursor-pointer rounded-[6px] bg-[#fff]"
                          onClick={maxStake}
                        >
                          MAX
                        </div>
                      </div>
                      {/* <div className="mt-[12px] flex items-center">
                      <input
                        type="checkbox"
                        className="checkbox w-[18px] h-[18px] rounded-[4px]"
                        style={{ border: "1px solid rgba(255,255,255,.4)" }}
                      />
                      <span className="label-text ml-[6px] text-[12px] font-Gotham font-normal">Approve infinity</span>
                    </div> */}

                      <div className="flex justify-between mt-[33px]">
                        {!token || !address ? (
                          <RainbowKitCustomConnectButton isProject={true} />
                        ) : (
                          <div
                            className="text-[14px] font-GothamBold font-bold w-[100%] h-[45px] rounded-[50px] flex justify-center items-center cursor-pointer"
                            style={{
                              background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
                            }}
                            onClick={() => stake(true)}
                          >
                            Stake
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {tabsKey === 3 && (
                  <div
                    className="h-[414px] py-[20px] px-[20px] flex flex-col justify-between"
                    style={{ backgroundColor: "rgba(255, 255, 255, .2)" }}
                  >
                    <div className="mt-[18px] text-[14px] font-GothamBold">
                      Unstake NFT to trade or deposite in the open Defi world.
                    </div>
                    <div>
                      <div className="flex justify-between text-[14px] font-Gotham mt-[16px]">
                        <div>Amount</div>
                        <div className="ml-[10px]">Staked: {myStakeToken ?? 0}</div>
                      </div>
                      <div
                        className="mt-[13px] text-[12px] font-Gotham w-[314px] py-[5px] pl-[19px] pr-[16px] rounded-[10px] flex items-center justify-between"
                        style={{
                          color: "rgba(255,255,255,.5)",
                          border: "1px solid rgba(255, 255, 255, 0.4)",
                          backgroundColor: "rgba(25,23,60,.5)",
                        }}
                      >
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="text-[40px] font-GothamBold font-bold border-0 bg-transparent text-[#fff] focus-visible:outline-0"
                            value={unStakeToken}
                            style={{ width: unStakeTokenWidth + "px" }}
                            onChange={e => onChangeunStakeToken(e)}
                          />
                          <div className="text-[12px] ml-[6px]" style={{ color: "rgba(255,255,255,.5)" }}>
                            SHARE
                          </div>
                        </div>
                        <div
                          className="w-[75px] h-[41px] flex items-center justify-center text-[#262442] text-[14px] font-GothamBold cursor-pointer rounded-[6px] bg-[#fff]"
                          onClick={unStakeMax}
                        >
                          MAX
                        </div>
                      </div>
                      {/* <div className="mt-[12px] flex items-center">
                      <input
                        type="checkbox"
                        className="checkbox w-[18px] h-[18px] rounded-[4px]"
                        style={{ border: "1px solid rgba(255,255,255,.4)" }}
                      />
                      <span className="label-text ml-[6px] text-[12px] font-Gotham font-normal">Approve infinity</span>
                    </div> */}

                      <div className="flex justify-between mt-[33px]">
                        {!token || !address ? (
                          <RainbowKitCustomConnectButton isProject={true} />
                        ) : (
                          <div
                            className="text-[14px] font-GothamBold font-bold w-[100%] h-[45px] rounded-[50px] flex justify-center items-center cursor-pointer"
                            style={{
                              background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
                            }}
                            onClick={unStake}
                          >
                            Unstake
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/*  */}
            <div
              className="pt-[40px] pb-[45px] pr-[50px] pl-[61px] rounded-[12px] mt-[46px] flex"
              style={{ backgroundColor: "rgba(213, 199, 255, .1)" }}
            >
              <div className="text-[22px] font-GothamBold ">Title</div>
              <div className="text-[16px] font-Gotham mt-[7px] pl-[138px]" style={{ color: "rgba(255,255,255,.5)" }}>
                {projectDetail?.content}
              </div>
            </div>
            {/*  */}

            <div className="w-[100%] mt-[74px]">
              <div className="text-[32px] text-[#fff] font-extrabold leading-[61px] font-PPNeueMachina">
                Recent Activity{" "}
              </div>
              <div className="mt-[42px]">
                <div
                  className="w-[100%] rounded-[10px] py-[7px] font-GothamBold text-[14px] font-bold flex"
                  style={{ background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)" }}
                >
                  <div className="w-[263px] pl-[29px]">Activity</div>
                  <div className="w-[314px]">Date(UTC)</div>
                  <div className="w-[229px]">Amount</div>
                  <div className="w-[230px]">Value</div>
                  <div className="w-[142px] text-right pr-[51px]">Hash</div>
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
                    <div className="w-[314px]">{item.blockTime}</div>
                    <div className="w-[229px]">{item.amount}</div>
                    <div className="w-[230px]">{moneyFormate(item.value)?.toString()}</div>
                    <div className="w-[142px] text-right pr-[51px]">{shortAddress(item.txid)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoadingBox
        open={loadingBoxVisible}
        setOpen={setLoadingBoxVisble}
        step={loadingStep}
        projectDetail={projectDetail}
        stepActive={stepActive}
        goMy={goMy}
      />
    </>
  );
};

export default projectDetail;
