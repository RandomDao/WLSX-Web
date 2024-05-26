/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AddressInfoDropdown } from "./AddressInfoDropdown";
import { AddressQRCodeModal } from "./AddressQRCodeModal";
import { WrongNetworkDropdown } from "./WrongNetworkDropdown";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Address } from "viem";
import { useAccount, useSignMessage } from "wagmi";
import connectIcon from "~~/app/assets/images/connectIcon.png";
import { useAutoConnect } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";
import { solarSign } from "~~/utils";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";
import { WLSXToken } from "~~/utils/config/config";

export const RainbowKitCustomConnectButton = ({ isProject }: any) => {
  useAutoConnect();

  const { address, isConnected, isConnecting, isReconnecting, } = useAccount();
  // const [address, setAddress] = useState('')
  const initializedAddress = useRef<any>("");

  // const add = useRef(address);
  const localstorageToken: any = typeof window !== "undefined" && window.localStorage.getItem(WLSXToken);
  const token = useGlobalState(({ token }) => token);
  const setToken = useGlobalState(({ setToken }) => setToken);
  // const addressState = useGlobalState(({ address }) => address);
  // const setAddress = useGlobalState(({ setAddress }) => setAddress);
  // const [token, setToken] = useState(typeof window !== "undefined" && window.localStorage.getItem(WLSXToken));

  useEffect(() => {
    if (initializedAddress.current === address) return;
    initializedAddress.current = address;
    if (address) {
      // setAddress(address)
      window.localStorage.setItem("solarAddress", address);
    }
    if (address && !token) {
      solarSign({ setToken, refesh: true, });
    }
  }, [address]);
  useEffect(() => {
    if (localstorageToken) setToken(localstorageToken);

  }, [])
  // const networkColor = useNetworkColor();
  const { targetNetwork } = useTargetNetwork();
  // const { switchNetwork } = useSwitchNetwork();
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted, openChainModal, authenticationStatus }: any) => {
        const connected =
          mounted && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(targetNetwork, account.address)
          : undefined;
        // if (account?.address) {
        //   setAddress(account?.address)
        //   window.localStorage.setItem("solarAddress", account?.address);
        // }
        // if (account?.address && !token) {
        //   solarSign({ setToken, signMessageAsync });
        // }
        return (
          <>
            {(() => {
              const connectAuth = () => {
                if (address) {
                  solarSign({ refesh: true, setToken, });
                } else {
                  openConnectModal();
                }
              };
              if (!connected || !token) {
                return isProject ? (
                  <div
                    className="text-[14px] font-GothamNewMedium w-[100%] h-[45px] rounded-[50px] flex justify-center items-center cursor-pointer"
                    style={{
                      background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
                    }}
                    onClick={connectAuth}
                  >
                    <div style={{}}>Connect Wallet</div>
                  </div>
                ) : (
                  <div
                    className="w-[169px] h-[38px] rounded-[50px] ml-[45px] text-[14px] text-[#fff] cursor-pointer flex justify-center items-center font-GothamNewMedium font-weight-[350]"
                    style={{ border: "2px solid rgba(255, 255, 255, .3)" }}
                    onClick={connectAuth}
                  >
                    <Image src={connectIcon} alt="" width={13} height={16} className="mr-[9px]" />
                    Connect Wallet
                  </div>
                );
              }

              if (chain.unsupported || chain.id !== targetNetwork.id) {
                // const { switchNetwork } = useSwitchNetwork();
                return <WrongNetworkDropdown openChainModal={openChainModal} />;
              }

              return (
                <>
                  {/* <div className="flex flex-col items-center mr-1">
                    <Balance address={account.address as Address} className="min-h-0 h-auto" />
                    <span className="text-xs" style={{ color: networkColor }}>
                      {chain.name}
                    </span>
                  </div> */}
                  <AddressInfoDropdown
                    address={account.address as Address}
                    displayName={account.displayName}
                    ensAvatar={account.ensAvatar}
                    blockExplorerAddressLink={blockExplorerAddressLink}
                    tokenClear={() => setToken("")}
                  />
                  <AddressQRCodeModal address={account.address as Address} modalId="qrcode-modal" />
                </>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
