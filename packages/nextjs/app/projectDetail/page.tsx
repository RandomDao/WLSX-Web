/* eslint-disable prefer-const */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { Suspense, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import * as echarts from "echarts";
// import { useRouter } from 'next/navigation'
import type { NextPage } from "next";
import toast from "react-hot-toast";
import { Address, getAddress } from "viem";
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import Eign from "~~/app/assets/images/eign.png";
import ethLogo from "~~/app/assets/images/eth-logo.svg";
import ethToken from "~~/app/assets/images/ethToken.png";
import expolreBorder from "~~/app/assets/images/expolreBorder.png";
import rightArrow from "~~/app/assets/images/rightArrow.png";
import Token from "~~/app/assets/images/token.png";
import website from "~~/app/assets/images/website.svg";
import { LoadingBox } from "~~/components/LoadingBox";
import { Active } from "~~/components/Project/Active";
import { Description } from "~~/components/Project/Description";
import { End } from "~~/components/Project/End";
import { ProjectDetailHeader } from "~~/components/Project/Header";
import { NotStarted } from "~~/components/Project/NotStarted";
import { RecentActivity } from "~~/components/Project/RecentActivity";
import { TimeLine } from "~~/components/Project/TimeLine";
import { TimeLineNav } from "~~/components/Project/TimeLineNav";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useMatchOrder, useOrderList } from "~~/hooks/solar/useSolarContract";
import { getProjectActivityList, getProjectDetail } from "~~/services/api/api";
import { useGlobalState } from "~~/services/store/store";
import { cardTimeFormate, moneyFormate, shortAddress, timeCount, toUSDT } from "~~/utils";
import { WLSXABIAddress, WLSXAbiConfig, WLSXToken, nftABIConfig, usdtABIConfig } from "~~/utils/config/config";

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
  const [id, setId] = useState(typeof window !== "undefined" && window.location.href.split("id=")[1]);
  const router = useRouter();

  const [unStakeToken, setUnStakeToken] = useState(0);
  const [projectDetail, setProjectDetail] = useState<any>({});
  const initialized = useRef(false);
  const chartsNode = useRef(null);
  const [sharesIndex, setSharesIndex] = useState(-1);
  const [stepActive, setStepActive] = useState(1);
  // 0 未开始 1 进行中 2 已结束
  const [projectStatus, setProjectStatus] = useState<any>(null);
  const [activeSection, setActiveSection] = useState<any>(null);

  const [loadingBoxVisible, setLoadingBoxVisble] = useState(false);
  const [loadingStep, setLoadingStep] = useState([1]);
  const { data: buyOrderList, refetch: refetchBuyOrderList } = useOrderList([id, 0]);
  const { data: sellOrderList, refetch: refetchSellOrderList } = useOrderList([id, 1]);
  console.log(buyOrderList, sellOrderList);
  const queryDetail = async () => {
    const res = await getProjectDetail(id);
    console.log(res.project);
    setProjectDetail(res);
    if (!timeCount(res.startTime)) {
      setProjectStatus(0);
      return;
    }
    if (timeCount(res.endTime)) {
      setProjectStatus(2);
      return;
    }
    setProjectStatus(1);
  };
  const chartsRedner = () => {
    if (chartsNode.current) {
      const myChart = echarts.init(chartsNode.current);
      const option = {
        backgroundColor: "transparent",
        tooltip: {},
        grid: {
          top: "5%",
          left: "0%",
          right: "0%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: false,
              lineStyle: {
                color: "rgba(242, 242, 242, .5)",
              },
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              textStyle: {
                color: "rgba(242, 242, 242, .5)",
                margin: 15,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: "dashed",
                color: "rgba(242, 242, 242, .1)",
              },
            },
            data: ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7"],
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            // max: 140,
            splitNumber: 0,
            splitLine: {
              show: false,
              lineStyle: {
                type: "dashed",

                color: "rgba(242, 242, 242, .1)",
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              margin: 20,
              textStyle: {
                color: "rgba(242, 242, 242, .5)",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "异常流量",
            type: "line",
            smooth: true, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            symbolSize: 0,

            lineStyle: {
              normal: {
                width: 3.5,
                color: "rgba(33, 114, 229, 1)", // 线条颜色
              },
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(33, 114, 229, .9)",
                    },
                    {
                      offset: 1,
                      color: "rgba(33, 114, 229, .1)",
                    },
                  ],
                  false,
                ),

                shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
                shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
            data: [90, 105, 84, 125, 110, 92, 98],
          },
        ],
      };
      myChart.setOption(option);
    }
  };

  useEffect(() => {
    const t = typeof window !== "undefined" && window.location.href.split("id=")[1];
    setId(t);
    window.addEventListener("scroll", handleScroll);
    chartsRedner();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    // Logic to determine the section in view and set active section
    const sections = document.querySelectorAll(".section");
    let currentSection: any = "";
    sections.forEach((section: any) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY > sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
        currentSection = section.getAttribute("id");
      }
    });
    setActiveSection(currentSection);
    // setActiveSection(currentSection);
  };

  useEffect(() => {
    if (id) {
      queryDetail();
      // findStake();
    }
  }, [id]);

  const goBackProject = () => {
    router.push(`/preMarket`);
  };
  const { data: unStakeNftData, write: unStakeNftABI } = useContractWrite({
    ...WLSXAbiConfig,
    functionName: "unstakeNft",
    args: [sharesIndex, unStakeToken],
  });
  const { isLoading: unStakeNftLoading, isSuccess: unStakeNftSuccess } = useWaitForTransaction({
    hash: unStakeNftData?.hash,
  });
  const [total, setTotal] = useState<any>({});
  useEffect(() => {
    if (unStakeNftData?.hash && !unStakeNftLoading && unStakeNftSuccess) {
      setUnStakeToken(0);
      setStepActive(99);
    }
  }, [unStakeNftLoading, unStakeNftSuccess, unStakeNftData]);


  const { writeAsync: writeMatchOrder } = useMatchOrder(toUSDT(moneyFormate(total.deposit, true)), [
    parseInt(total.orderId),
    parseInt(total.amount),
  ]);
  const buyAndSell = async (item: any) => {
    setTotal(item);
    setTimeout(async () => {
      setLoadingStep([1]);
      setLoadingBoxVisble(true);
      try {
        // console.log(total)
        // console.log(toUSDT(moneyFormate(total.deposit, true)), [total.orderId.toString(), parseInt(total.amount)]);
        const hash = await writeMatchOrder({
          args: [parseInt(item.orderId), parseInt(item.amount)],
          value: toUSDT(moneyFormate(item.deposit, true)),
          // value: parseInt(moneyFormate(total.deposit, true)),
        });
        if (hash) {
          setStepActive(99);
          // refetchAllowance();
          setLoadingBoxVisble(false);
        } else {
          setLoadingBoxVisble(false);
        }
      } catch (err) {
        setLoadingBoxVisble(false);

      }
    }, 100);
  }
  // useEffect(() => {
  //   if (userStakeList && projectDetail) {
  //     findStake();
  //   }
  // }, [userStakeList, projectDetail]);
  // const findStake = async () => {
  //   let i = -1;
  //   // const stakeList = await refeshStake();
  //   i = userStakeList?.findIndex(item => item.projectIndex == projectDetail.projectIndex) ?? -1;
  //   setMyStakeToken(userStakeList?.[i]?.shares);

  //   setSharesIndex(i);
  // };

  const goMy = () => {
    router.push(`/portfolio`);
  };
  return (
    <>
      <LoadingBox
        open={loadingBoxVisible}
        setOpen={setLoadingBoxVisble}
        step={loadingStep}
        projectDetail={projectDetail}
        stepActive={stepActive}
        goMy={goMy}
      />
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
                Pre Market
              </div>
              <Image src={rightArrow} alt="" width={4} height={7} />
              <div className="text-[14px] font-GothamBold font-bold "> Details</div>
            </div>
            {/*  */}

            <div
              className="bg-[rgba(34,34,34,1)]  mt-[20px] h-[97px] rounded-[15px] flex items-center justify-between px-[15px]"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center gap-[40px]">
                <div className="flex gap-[8px] items-center">
                  <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                    <img src={projectDetail?.project?.token_icon} alt="" width={48} height={48} />
                  </div>
                  <div className="text-[24px] font-GothamBold">{projectDetail?.project?.token_name}</div>
                </div>
                <div>
                  <div className="text-[20px] font-GothamBold">
                    ${moneyFormate(projectDetail?.project?.buy_volume, true)}
                  </div>
                  <div className="text-[#ff4238] text-[12px]">-1.5%</div>
                </div>

                <div>
                  <div className="text-[12px] text-[#707a8a] font-Gotham">24h Vol</div>
                  <div className="text-[#d8dde6] text-[12px]">
                    <span className="text-[#d8dde6]">$20,200</span>
                    <span className="text-[#ff4238]">&nbsp;&nbsp;-1.5%</span>
                  </div>
                </div>
                <div>
                  <div className="text-[12px] text-[#707a8a] font-Gotham">Total Vol</div>
                  <div className="text-[#d8dde6] text-[12px]">
                    <span className="text-[#d8dde6]">$20,200</span>
                  </div>
                </div>
                <div>
                  <div className="text-[12px] text-[#707a8a] font-Gotham">Settle Starts (UTC)</div>
                  <div className="text-[#d8dde6] text-[12px]">
                    <span className="text-[#d8dde6]">TBA</span>
                  </div>
                </div>

                <div>
                  <div className="text-[12px] text-[#707a8a] font-Gotham">Settle Ends (UTC)</div>
                  <div className="text-[#d8dde6] text-[12px]">
                    <span className="text-[#d8dde6]">TBA</span>
                  </div>
                </div>

                <div>
                  <div className="text-[12px] text-[#707a8a] font-Gotham">Countdown</div>
                  <div className="text-[#d8dde6] text-[12px]">
                    <span className="text-[#d8dde6]">Not Started</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-[32px] h-[32px] bg-[rgba(255,255,255,.1)] rounded-md flex items-center justify-center cursor-pointer">
                  <Image src={website} width={20} height={20} className="text-[rgba(255,255,255,.2)]" alt={""}></Image>
                </div>
              </div>
            </div>
            <div className="flex mt-[20px] justify-between">
              <div
                className="bg-[rgba(34,34,34,1)] w-[775px] h-[368px] rounded-[15px] flex items-center justify-between px-[15px]"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div ref={chartsNode} className="w-[100%] h-[368px]" />
              </div>
              <Active item={projectDetail} projectDetail={projectDetail} id={id} />
            </div>

            <div
              className="bg-[rgba(34,34,34,1)]  mt-[20px] rounded-[15px] flex justify-between px-[15px]  py-[25px] pb-[15px]"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="w-[50%]  pr-[20px] "
                style={{
                  borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="flex w-[100%] pl-[10px] pb-[10px]"
                  style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="w-[30%] text-[12px] text-[#707A8A] font-Gotham">Price</div>
                  <div className="w-[30%] text-[12px] text-[#707A8A] font-Gotham">Amount</div>
                  <div className="w-[20%] text-[12px] text-[#707A8A] font-Gotham">Collateral</div>
                  <div className="w-[20%] text-[12px] text-[#707A8A] font-Gotham"></div>
                </div>
                {/* {projectDetail.orders.map((item, key) => ( */}
                {buyOrderList?.length ? buyOrderList?.map((item: any, key: any) => (
                  <div key={key} className="flex w-[100%] pl-[10px] pb-[10px] mt-[15px]">
                    <div className="w-[30%] text-[14px] text-[#2ed157] font-Gotham">
                      {parseFloat(moneyFormate(item.deposit, true)) / parseInt(item.amount)}
                      {/* {moneyFormate(item.deposit, true)} */}
                    </div>
                    <div className="w-[30%] text-[14px] text-[#fff] font-Gotham">
                      {parseInt(item.amount)}
                      {/* {parseFloat(moneyFormate(item.deposit, true)) / parseInt(item.amount)} */}
                    </div>
                    <div className="w-[20%] text-[14px] text-[#fff] font-Gotham flex items-center">
                      {moneyFormate(item.deposit, true)}
                      <div className="w-[16px] h-[16px] ml-[5px]">
                        <Image src={ethToken} alt="" width={16} height={16} />
                      </div>
                    </div>
                    <div className="w-[20%] text-[14px] text-[#fff] font-Gotham">
                      <div
                        className="w-[60px] h-[28px] rounded-md flex items-center justify-center cursor-pointer text-[#707A8A]"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
                        onClick={() => buyAndSell(item)}
                      >
                        Buy
                      </div>
                    </div>
                  </div>
                )) : <></>}
              </div>
              <div className="w-[50%] pl-[20px]" style={{}}>
                <div
                  className="flex w-[100%] pl-[10px] pb-[10px]"
                  style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="w-[30%] text-[12px] text-[#707A8A] font-Gotham">Price</div>
                  <div className="w-[30%] text-[12px] text-[#707A8A] font-Gotham">Amount</div>
                  <div className="w-[20%] text-[12px] text-[#707A8A] font-Gotham">Collateral</div>
                  <div className="w-[20%] text-[12px] text-[#707A8A] font-Gotham"></div>
                </div>
                {sellOrderList?.length ? sellOrderList?.map((item: any, key: any) => (
                  <div key={key} className="flex w-[100%] pl-[10px] pb-[10px] mt-[15px]">
                    <div className="w-[30%] text-[14px] text-[#ff4238] font-Gotham">
                      {parseFloat(moneyFormate(item.deposit, true)) / parseInt(item.amount)}
                    </div>
                    <div className="w-[30%] text-[14px] text-[#fff] font-Gotham">{parseInt(item.amount)}</div>
                    <div className="w-[20%] text-[14px] text-[#fff] font-Gotham flex items-center">
                      {moneyFormate(item.deposit, true)}
                      <div className="w-[16px] h-[16px] ml-[5px]">
                        <Image src={ethToken} alt="" width={16} height={16} />
                      </div>

                    </div>
                    <div className="w-[20%] text-[14px] text-[#fff] font-Gotham">
                      <div
                        className="w-[60px] h-[28px] rounded-md flex items-center justify-center cursor-pointer text-[#707A8A]"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
                        onClick={() => buyAndSell(item)}

                      >
                        Sell
                      </div>
                    </div>
                  </div>
                )) : <></>}
              </div>
            </div>

            <div
              className="bg-[rgba(34,34,34,1)]  mt-[20px] rounded-[15px] px-[15px]  py-[25px] pb-[15px]"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="text-[24px] font-GothamBold">Activites</div>

              <div
                className="flex w-[100%] pl-[10px] pb-[10px] mt-[25px]"
                style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
              >
                <div className="w-[15%] text-[12px] text-[#707A8A] font-Gotham">Timestamp</div>
                <div className="w-[15%] text-[12px] text-[#707A8A] font-Gotham">Type</div>
                <div className="w-[30%] text-[12px] text-[#707A8A] font-Gotham">Pair</div>
                <div className="w-[10%] text-[12px] text-[#707A8A] font-Gotham">Price ($)</div>
                <div className="w-[10%] text-[12px] text-[#707A8A] font-Gotham">Amount</div>
                <div className="w-[15%] text-[12px] text-[#707A8A] font-Gotham">Collateral</div>
                <div className="w-[15%] text-[12px] text-[#707A8A] font-Gotham">Hash</div>
              </div>
              <div className="flex w-[100%] pl-[10px] pb-[10px] mt-[15px]">
                <div className="w-[15%] text-[14px] text-[#707A8A] font-Gotham">22H ago</div>
                <div className="w-[15%] text-[14px] text-[#2ed157] font-Gotham">Buy</div>
                <div className="w-[30%] text-[14px] text-[#fff] font-Gotham">
                  {projectDetail?.project?.token_name}/USDT
                </div>
                <div className="w-[10%] text-[14px] text-[#fff] font-Gotham">0.001</div>
                <div className="w-[10%] text-[14px] text-[#fff] font-Gotham">4.5k</div>
                <div className="w-[15%] text-[14px] text-[#fff] font-Gotham  flex items-center">
                  1000
                  <div className="w-[16px] h-[16px] ml-[5px]">
                    <Image src={Token} alt="" width={16} height={16} />
                  </div>
                </div>
                <div className="w-[15%] text-[14px] text-[#fff] font-Gotham flex gap-[10px] items-center">
                  0x41kd...d3f
                  <div className="w-[14px] h-[14px] cursor-pointer">
                    <Image src={expolreBorder} alt="" width={14} height={14} />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex gap-[44px] mt-[56px] ">
              <ProjectDetailHeader projectDetail={projectDetail} />
              {projectStatus === 0 && <NotStarted item={projectDetail} />}
              {projectStatus === 1 && <Active item={projectDetail} projectDetail={projectDetail} />}
              {projectStatus === 2 && <End item={projectDetail} />}
            </div>
            <div className="flex">
              <div className="w-[776px]">
                <TimeLine />
                <Description projectDetail={projectDetail} />
                <RecentActivity id={id} />
              </div>
              <div>
                <TimeLineNav currentSection={activeSection} setActiveSection={setActiveSection} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default projectDetail;
