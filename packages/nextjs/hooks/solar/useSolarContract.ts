import { useMemo } from "react";
import { useContractRead } from "wagmi";
import { WLSXABIAddress, WLSXAbiConfig, usdtABIConfig } from "~~/utils/config/config";
import { useSolarContractRead } from "./utils/useSolarContractRead";
import { useSolarContractWrite } from "./utils/useSolarContractWrite";

/**
 * 读取USDT数据
 */


export const useInvest = (args: any) => {
  return useSolarContractWrite("invest", WLSXAbiConfig, args);
};

export const useAddOrder = (value: any, args: any) => {
  return useSolarContractWrite("addOrder", WLSXAbiConfig, args, value);
};
export const useOrderList = (args: any) => {
  return useSolarContractRead("preOrdersList", WLSXAbiConfig, args);
};
export const useMatchOrder = (value: any, args: any) => {
  return useSolarContractWrite("matchOrder", WLSXAbiConfig, args, value);
};
