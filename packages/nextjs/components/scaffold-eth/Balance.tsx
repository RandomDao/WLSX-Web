/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Address } from "viem";
import { useBalance } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";
import { moneyFormate } from "~~/utils";

type BalanceProps = {
  address?: Address;
  className?: string;
  usdMode?: boolean;
  contractBalance?: any;
};

/**
 * Display (ETH & USD) balance of an ETH address.
 */
export const Balance = ({ address, className = "",  contractBalance }: BalanceProps) => {
  const { targetNetwork } = useTargetNetwork();

  const {
    data: balance,
    isError,
    isLoading,
  } = useBalance({
    address,
    watch: true,
  });

  const [displayUsdMode] = useState(true);

  const toggleBalanceMode = () => {
    if (price > 0) {
      setDisplayUsdMode(prevMode => !prevMode);
    }
  };

  if (!address || isLoading || balance === null) {
    return (
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-md bg-slate-300 h-6 w-6"></div>
        <div className="flex items-center space-y-6">
          <div className="h-2 w-28 bg-slate-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={`border-2 border-gray-400 rounded-md px-2 flex flex-col items-center max-w-fit cursor-pointer`}>
        <div className="text-warning">Error</div>
      </div>
    );
  }

  const formattedBalance = balance ? Number(balance.formatted) : 0;

  return (
    <div className={`${className} flex items-center`} onClick={toggleBalanceMode}>
      <div className="w-full flex items-center">
        {displayUsdMode ? (
          <>
            <div className="ml-[3px] font-GothamBold font-bold">
              {moneyFormate(contractBalance?.toString() ?? "", true)}
            </div>
          </>
        ) : (
          <>
            <span>{formattedBalance.toFixed(4)}</span>
            <span className="text-[0.8em] font-bold ml-1">{targetNetwork.nativeCurrency.symbol}</span>
          </>
        )}
      </div>
    </div>
  );
};
