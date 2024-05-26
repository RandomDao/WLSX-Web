/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Tooltip, styled } from "@mui/material";
// import { makeStyles, withStyles } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import toast from "react-hot-toast";
import { Address, getAddress } from "viem";
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import Eign from "~~/app/assets/images/eign.png";
import question from "~~/app/assets/images/question.png";
import Token from "~~/app/assets/images/token.png";
import { LoadingBox } from "~~/components/LoadingBox";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useAddOrder, useInvest, useOrderList } from "~~/hooks/solar/useSolarContract";
import { useUSDTAllowance, useUSDTAmount, useUSDTApprove } from "~~/hooks/solar/useUSDTContract";
import { useGlobalState } from "~~/services/store/store";
import { countDown } from "~~/utils";
import { moneyFormate, toUSDT } from "~~/utils";
import { WLSXABIAddress, WLSXAbiConfig, usdtABIAddress, usdtABIConfig } from "~~/utils/config/config";
import ethToken from "~~/app/assets/images/ethToken.png";

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

const ToBeStyledTooltip = ({ className, ...props }: any) => <Tooltip {...props} classes={{ tooltip: className }} />;
const StyledTooltip = styled(ToBeStyledTooltip)(({ theme }) => ({
  backgroundColor: "rgba(213, 199, 255, .1)",
  color: "rgba(255, 255, 255, .5)",
  marginBottom: "40px!important",
  borderRadius: "12px",
  fontSize: "14px",
  fontFamily: "Gotham",
  padding: "28px 30px",
  width: "357px",
  maxWidth: "357px",
}));
export const Active = ({ item, projectDetail, id }: any) => {
  const router = useRouter();
  const [tabsKey, setTabsKey] = useState(1);

  const { address } = useAccount();
  const checkSumAddress = useMemo(() => {
    if (address) return getAddress(address as Address);
  }, [address]);
  // const [checkSumAddress, setCheckSumAddress] = useState(getAddress(address as Address));
  const quickMoney = [1200, 1500, 2000, 3000];
  const [stepActive, setStepActive] = useState(1);
  const [loadingStep, setLoadingStep] = useState([1]);
  const token = useGlobalState(({ token }) => token);
  const [tokenWidth, setTokenWidth] = useState(35);
  const [tokenNum, setTokenNum] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [maxApprove, setMaxApprove] = useState(false);
  const [loadingBoxVisible, setLoadingBoxVisble] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  // const loadingStep = 99;

  const changeMaxApprove = (e: { target: { checked: any } }) => {
    setMaxApprove(e.target.checked);
  };

  const countShare = () => {
    const b = parseFloat(moneyFormate(projectDetail?.amount ?? "0", true)) / projectDetail?.shares;
    return b;
  };
  const changeTokenNum = (e: any) => {
    const base = 30;

    if (!e.target.value || e.target.value == "NaN" || Number.isNaN(e.target.value) || e.target.value == "") {
      setTokenNum(0);
      setTokenWidth(35);
      return;
    }
    const v = parseFloat(e.target.value);
    if (v.toString().length == 1) {
      setTokenNum(v);
      setTokenWidth(35);
    } else {
      setTokenNum(v);
      setTokenWidth(v.toString().length * 21 + base);
    }
  };
  const changeTokenPrice = (e: any) => {
    if (!e.target.value || e.target.value == "NaN" || Number.isNaN(e.target.value) || e.target.value == "") {
      setTokenPrice(0);
      return;
    }
    if (tokenNum) {
      setTokenPrice(e.target.value);

      setTotalAmount(tokenNum * e.target.value);
    }
  }

  const goMy = () => {
    router.push(`/portfolio`);
  };
  //  * countShare()
  const { writeAsync: writeApprove } = useUSDTApprove([
    WLSXABIAddress,
    maxApprove ? toUSDT("99999999999999999999999") : toUSDT(tokenNum),
  ]);
  const { writeAsync: writeInvest } = useInvest([projectDetail?.projectIndex, toUSDT(tokenNum)]);
  const { writeAsync: writeAddOrder } = useAddOrder(toUSDT(totalAmount), [
    parseInt(id),
    parseInt(tokenPrice.toString()),
    toUSDT(totalAmount),
    0,
    tabsKey - 1,
  ]);

  const approveUSDT = async () => {
    setLoadingStep([1]);
    setLoadingBoxVisble(true);

    try {
      const hash = await writeApprove();
      if (hash) {
        // setStepActive(99);
        refetchAllowance();
        setLoadingBoxVisble(false);
      } else {
        setLoadingBoxVisble(false);
      }
    } catch (err) {
      setLoadingBoxVisble(false);
    }
  };
  const investStatke = async () => {
    setLoadingStep([1]);
    setLoadingBoxVisble(true);
    try {
      const hash = await writeAddOrder();
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
  }
  const quickClick = async (item: number) => {
    changeTokenNum({ target: { value: item } });
  };
  const invest = async () => {
    if (tokenNum <= 0) {
      toast.error("Investment cannot be 0", {
        position: "top-center",
      });
      return;
    }
    try {
      setLoadingStep([2]);
      setStepActive(1);
      setLoadingBoxVisble(true);
      const hash = await writeInvest();
      if (hash) {
        setStepActive(99);
      } else {
        setLoadingBoxVisble(false);
      }
    } catch (err) {
      setLoadingBoxVisble(false);
    }
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
      <div
        className="bg-[rgba(34,34,34,.1)] rounded-[15px] overflow-hidden w-[380px]"
        style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <div role="tablist" className="tabs tabs-lifted h-[48px]">
          <a
            role="tab"
            className={`tab h-[100%] font-GothamBold font-extrabold ${tabsKey === 1 && "text-[#fff]"}`}
            style={{
              backgroundColor: tabsKey === 1 ? "rgba(34,34,34,1)" : "transparent",
              color: tabsKey === 1 ? "#fff" : "rgba(255,255,255,.7)",
              border: 0,
            }}
            onClick={() => setTabsKey(1)}
          >
            Want to Buy
          </a>
          <a
            role="tab"
            className={`tab h-[100%] font-GothamBold font-extrabold ${tabsKey === 2 && "text-[#fff]"}`}
            style={{
              backgroundColor: tabsKey === 2 ? "rgba(34,34,34,1)" : "transparent",
              color: tabsKey === 2 ? "#fff" : "rgba(255,255,255,.7)",
              border: 0,
            }}
            onClick={() => setTabsKey(2)}
          >
            Want to Sell
          </a>
        </div>
        <div className="bg-[rgba(34,34,34,1)] w-[100%] h-[321px] pl-[22px]">
          <div className="pt-[15px]">
            <div className="text-[12px] font-Gotham">Unit Price</div>
            <div
              className="mt-[5px] text-[12px] font-Gotham w-[330px] pl-[19px] pr-[16px] rounded-[4px] flex items-center justify-between py-[6px]"
              style={{
                color: "rgba(255,255,255,.5)",
                border: "2px solid rgba(48, 48, 48, 1)",
                // backgroundColor: "rgba(48, 48, 48, 1)",
              }}
            >
              <div className="flex items-center">
                <input
                  type="text"
                  // defaultValue={0}
                  // value={tokenNum}
                  placeholder="Enter your price"
                  // key={tokenNum}
                  className="text-[13px] font-Gotham border-0 bg-transparent text-[#fff] focus-visible:outline-0"
                  style={{ width: "200px" }}
                  onChange={e => changeTokenNum(e)}
                />
              </div>
              <div className="flex items-center justify-center text-[13px]  gap-[5px]">
                <Image src={ethToken} alt="" width={16} height={16} />
                <div className="text-[#fff] font-Gotham">ETH</div>
              </div>
            </div>

            <div className="text-[12px] font-Gotham mt-[20px]">Amount</div>
            <div
              className="mt-[5px] text-[12px] font-Gotham w-[330px] pl-[19px] pr-[16px] rounded-[4px] flex items-center justify-between py-[6px]"
              style={{
                color: "rgba(255,255,255,.5)",
                border: "2px solid rgba(48, 48, 48, 1)",
                // backgroundColor: "rgba(48, 48, 48, 1)",
              }}
            >
              <div className="flex items-center">
                <input
                  type="text"
                  // defaultValue={0}
                  // value={tokenNum}
                  placeholder="Enter your price"
                  // key={tokenNum}
                  className="text-[13px] font-Gotham border-0 bg-transparent text-[#fff] focus-visible:outline-0"
                  style={{ width: "200px" }}
                  onChange={e => changeTokenPrice(e)}
                />
              </div>
              <div className="flex items-center justify-center text-[13px]  gap-[5px]">
                <img src={projectDetail?.project?.token_icon} alt="" width={16} height={16} className="rounded-full"/>
                <div className="text-[#fff] font-Gotham">
                  { projectDetail?.project?.token_symbol}
                </div>
              </div>
            </div>

            <div className="text-[12px] font-Gotham mt-[20px]">COLLATERAL</div>
            <div
              className="mt-[5px] text-[12px] font-Gotham w-[330px] pl-[19px] pr-[16px] rounded-[4px] flex items-center justify-between py-[6px]"
              style={{
                color: "rgba(255,255,255,.5)",
                border: "2px solid rgba(48, 48, 48, 1)",
                // backgroundColor: "rgba(48, 48, 48, 1)",
              }}
            >
              {totalAmount}
              <div className="flex items-center justify-center text-[13px]  gap-[5px]">
                <Image src={ethToken} alt="" width={16} height={16} />
                <div className="text-[#fff] font-Gotham">ETH</div>
              </div>
            </div>
            <div
              className="mt-[20px] text-[14px] font-GothamBold font-bold w-[330px] h-[45px] rounded-[50px] flex justify-center items-center cursor-pointer"
              style={{
                background: "rgba(33, 114, 229, .9)",
              }}
              onClick={investStatke}
            >
              <div style={{}} >{tabsKey === 1 ? "Buy" : "Sell"}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
