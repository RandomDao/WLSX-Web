/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import CopyToClipboard from "react-copy-to-clipboard";
import { Address, getAddress } from "viem";
import { useAccount } from "wagmi";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import ethLogo from "~~/app/assets/images/eth-logo.svg";
import explorerIcon from "~~/app/assets/images/explorerIcon.png";
import question from "~~/app/assets/images/question.png";
import rightBtn from "~~/app/assets/images/right-btn.png";
import { MyProjectCard } from "~~/components/MyProjectCard";
import { PortfolioHeader } from "~~/components/Portfolio/PortfolioHeader";
import { PortfolioTabs } from "~~/components/Portfolio/PortfolioTabs";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import {
  getInvestTxList,
  getUserInfo,
  getclaimTxList,
  getstakeTxList,
  getunstakeTxList,
  userActivityList,
} from "~~/services/api/api";
import { cardTimeFormate, moneyFormate, shortAddress } from "~~/utils";
import { getBlockExplorerAddressLink, getBlockExplorerTxLink } from "~~/utils/scaffold-eth";
import { ModalHeader } from "~~/components/ModalHeader";

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

// export const metadata = getMetadata({
//   title: "Project",
//   // description: "Debug your deployed 🏗 WLSX Labs contracts in an easy way",
// });

const Portfolio: NextPage = () => {
  const { targetNetwork } = useTargetNetwork();

  const goExpolreUser = () => {
    window.open(getBlockExplorerAddressLink(targetNetwork, checkSumAddress));
  };
  const [userInfo, setUserInfo] = useState<any>({});
  const [activeTabs, setActiveTabs] = useState("All");

  const { address } = useAccount();
  let checkSumAddress = "";
  if (address) {
    checkSumAddress = getAddress(address as Address);
  }
  const shrotAddress = checkSumAddress?.slice(0, 4) + "..." + checkSumAddress?.slice(-4);
  const router = useRouter();
  const goToDetail = (item: any) => {
    router.push(`/projectDetail?id=${item.projectId}`);
  };
  const goExpolre = (e: any, item: any) => {
    e.stopPropagation();
    window.open(getBlockExplorerTxLink(targetNetwork.id, item.txid));
  };
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      queryUserInfo();
      // queryUserActivityList();
    }
  }, []);

  const goToProjects = () => {
    router.push(`/project`);
  };
  const queryUserInfo = async () => {
    const res = await getUserInfo();
    // const nftIds = res.nftIds;
    // const stakeList = res.stakes;
    // nftIds.forEach((item: any) => {
    //   const i = stakeList.findIndex((n: any) => item.nftId == n.nftId);
    //   if (i < 0) {
    //     res.stakes.push({
    //       projectInfo: item.projectInfo,
    //       nftId: item.nftId,
    //     });
    //   }
    // });
    console.log(res);
    setUserInfo(res);
  };
  const filterTabsClick = (item: { name: any }) => {
    setActiveTabs(item.name);
  };
  // const { data, isError, isLoading } = useEnsAvatar()
  return (
    <div className="w-[100%] flex items-center flex-col justify-center pt-[110px]">
      <div className="w-[1176px] ">
        <div
          className=" mt-[20px] rounded-[15px] flex items-center justify-between "
          style={
            {
              // bg-[rgba(34,34,34,1)]
              // border: "1px solid rgba(255, 255, 255, 0.1)",
            }
          }
        >
          <div className="flex gap-[26px]">
            <BlockieAvatar address={checkSumAddress ?? ""} size={60} rounded={"rounded-full"} />
            <div>
              <CopyToClipboard text={checkSumAddress}>
                <div className="!rounded-xl flex gap-1  items-center font-GothamBold font-bold text-[20px]">
                  <span>{shrotAddress}</span>

                  <DocumentDuplicateIcon
                    className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0"
                    aria-hidden="true"
                  />
                  {/* <span className=" whitespace-nowrap">Copy address</span> */}
                </div>
              </CopyToClipboard>
              <div className="flex mt-[7px]">
                <div
                  className="rounded-md cursor-pointer flex px-[8px] py-[3px] gap-[5px] text-[#707a8a]"
                  onClick={e => goExpolreUser()}
                  style={{ border: "1px solid rgba(255, 255, 255, 0.4)" }}
                >
                  <Image src={ethLogo} alt="" width={10} height={16} />
                  <div className="text-[12px] font-Gotham"> Link Wallet</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[36px]">
            <div>
              <div className="text-[#707a8a] text-[12px] font-Gotham text-right">TOTAL TRADES</div>
              <div className="text-[14px] font-GothamBold text-[#d8dde6] text-right mt-[5px]">0</div>
            </div>
            <div style={{ borderRight: "1px solid rgba(255, 255, 255, 0.4)" }} className="pr-[36px]">
              <div className="text-[#707a8a] text-[12px] font-Gotham text-right">TOTAL SETTLED</div>
              <div className="text-[14px] font-GothamBold text-[#d8dde6] text-right mt-[5px]">0</div>
            </div>

            <div>
              <div className="text-[#707a8a] text-[12px] font-Gotham text-right">Staking</div>
              <div className="text-[14px] font-GothamBold text-[#d8dde6] text-right mt-[5px]">0</div>
            </div>
            <div>
              <div className="text-[#707a8a] text-[12px] font-Gotham text-right">APY</div>
              <div className="text-[14px] font-GothamBold text-[#2ed157] text-right mt-[5px]">35.4%</div>
            </div>
          </div>
        </div>
        <div className="mt-[100px]"></div>
        <ModalHeader>My Orders</ModalHeader>

        <div
          className=" mt-[30px] rounded-[15px] flex flex-wrap pl-[30px]"
        // style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }} bg-[#15161b]
        >
          <MyProjectCard />


        </div>
        {/* <PortfolioHeader checkSumAddress={checkSumAddress} />
        <PortfolioTabs userInfo={userInfo} queryUserInfo={queryUserInfo} checkSumAddress={checkSumAddress} /> */}
        {/* <div className="flex justify-between items-center pt-[34px] px-[40px]">
          <div className="flex gap-[26px]">
            <BlockieAvatar address={checkSumAddress} size={95} rounded={"rounded-full"} />
            <div>
              <div className="text-[24px] font-GothamBold">{shrotAddress}</div>
              <div
                className="text-[16px] font-Gotham text-[rgba(255,255,255,.5)] flex items-center cursor-pointer"
                onClick={e => goExpolreUser()}
              >
                {shrotAddress}
                <div
                  className="w-[16px] h-[16px] rounded-[6px] flex justify-center items-center ml-[5px]"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                >
                  <Image src={explorerIcon} width={6} height={6} alt="" />

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
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
