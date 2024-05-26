"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
import { Address, getAddress } from "viem";
import { useAccount, } from "wagmi";
import { useUSDTAllowance, useUSDTAmount } from "~~/hooks/solar/useUSDTContract";
import { useState } from "react";


const Debug: NextPage = () => {
  const { address } = useAccount();
  const [checkSumAddress,] = useState("0xb0950e2c9e309D725a67Fa65F3d40F38d966a878");
  const { data: balance } = useUSDTAmount(checkSumAddress);
  const { data: allowance } = useUSDTAllowance(checkSumAddress);

  return (
    <>
      <DebugContracts />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Debug Contracts</h1>
        <p className="text-neutral">
          You can debug & interact with your deployed contracts here.
          <br /> Check{" "}
          <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1">
            packages / nextjs / app / debug / page.tsx
          </code>{" "}
        </p>
      </div>
    </>
  );
};

export default Debug;
