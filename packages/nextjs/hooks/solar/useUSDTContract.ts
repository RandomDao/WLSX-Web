import { useMemo } from "react";
import { useContractRead } from "wagmi";
import { WLSXABIAddress, usdtABIConfig } from "~~/utils/config/config";
import { useSolarContractRead } from "./utils/useSolarContractRead";
import { useSolarContractWrite } from "./utils/useSolarContractWrite";

/**
 * 读取USDT数据
 */
export const useUSDTAmount = (userAddress: string) => {
  return useSolarContractRead("balanceOf", usdtABIConfig, [userAddress]);
};
export const useUSDTAllowance = (userAddress: string) => {
  return useSolarContractRead("allowance", usdtABIConfig, [userAddress, WLSXABIAddress]);
};

export const useUSDTApprove = (args: any) => {
  return useSolarContractWrite("approve", usdtABIConfig, args);
};
