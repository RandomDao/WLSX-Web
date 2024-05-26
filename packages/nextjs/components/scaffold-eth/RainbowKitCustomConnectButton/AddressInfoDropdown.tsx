import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NetworkOptions } from "./NetworkOptions";
import CopyToClipboard from "react-copy-to-clipboard";
import { getAddress } from "viem";
import { Address, useDisconnect } from "wagmi";
import { useContractRead } from "wagmi";
import {
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import close from "~~/app/assets/images/close.png";
import explorerIcon from "~~/app/assets/images/explorerIcon.png";
import Token from "~~/app/assets/images/token.png";
import { Balance, BlockieAvatar, isENS } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { moneyFormate } from "~~/utils";
import { WLSXToken, usdtABIConfig } from "~~/utils/config/config";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const allowedNetworks = getTargetNetworks();

type AddressInfoDropdownProps = {
  address: Address;
  blockExplorerAddressLink: string | undefined;
  displayName: string;
  ensAvatar?: string;
  tokenClear?: any;
};

export const AddressInfoDropdown = ({
  address,
  ensAvatar,
  displayName,
  blockExplorerAddressLink,
  tokenClear,
}: AddressInfoDropdownProps) => {
  const { disconnect } = useDisconnect();
  const checkSumAddress = getAddress(address);
  const router = useRouter();
  const [addressCopied, setAddressCopied] = useState(false);
  const shrotAddress = checkSumAddress?.slice(0, 4) + "..." + checkSumAddress?.slice(-4);
  const [selectingNetwork, setSelectingNetwork] = useState(false);
  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const closeDropdown = () => {
    setSelectingNetwork(false);
    dropdownRef.current?.removeAttribute("open");
  };
  useOutsideClick(dropdownRef, closeDropdown);
  const goMyPortfolio = () => {
    router.push(`/portfolio`);
  };
  const logout = () => {
    disconnect();
    window.localStorage.removeItem(WLSXToken);
    tokenClear();
  };
  const { data: balance } = useContractRead({
    ...usdtABIConfig,
    functionName: "balanceOf",
    args: [checkSumAddress],
    watch: true,
  });
  return (
    <>
      <details ref={dropdownRef} className="dropdown dropdown-end leading-3 ml-[14px]">
        <summary
          tabIndex={0}
          className="flex w-[125px] h-[38px] rounded-[50px] overflow-hidden cursor-pointer"
          style={{ border: "2px solid rgba(255,255,255,.3)" }}
        >
          {/* <BlockieAvatar address={checkSumAddress} size={30} ensImage={ensAvatar} /> */}
          <div className="flex w-[0px] items-center pl-[8px]">
            {/* <div className="h-[22px] w-[22px] mr-[5px]">
              <Image src={Token} alt="" width={22} height={22} />
            </div>
            <div className="font-bold font-GothamBold text-[14px]">{moneyFormate(balance?.toString() ?? "")}</div> */}
            {/* <Balance address={checkSumAddress} className="font-bold font-GothamBold text-[14px]" /> */}
          </div>
          <div className="w-[105px] bg-[#222222] font-GothamBold font-extrabold flex items-center justify-center text-[14px]">
            {isENS(displayName) ? displayName : shrotAddress}
          </div>
          {/* <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" /> */}
        </summary>
        <ul
          tabIndex={0}
          style={{ border: "2px solid #FFFFFF1A" }}
          className="dropdown-content menu p-0 z-[2] shadow-center shadow-accent bg-[#181625] rounded-[30px] w-[338px] h-[302px] mt-[15px]"
        >
          <NetworkOptions hidden={!selectingNetwork} />
          <div className={selectingNetwork ? "hidden relative" : ""}>
            <div className="flex items-center py-[18px] px-[22px]">
              <div>
                <BlockieAvatar address={checkSumAddress} size={59} ensImage={ensAvatar} />
              </div>
              <div className="ml-[17px]">
                <div>
                  {addressCopied ? (
                    <div className=" !rounded-xl flex gap-1 items-center font-GothamBold font-bold text-[18px]">
                      {shrotAddress}
                      <CheckCircleIcon
                        className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0"
                        aria-hidden="true"
                      />
                      {/* <span className=" whitespace-nowrap">Copy address</span> */}
                    </div>
                  ) : (
                    <div>
                      {/* {shrotAddress} */}
                      <CopyToClipboard
                        text={checkSumAddress}
                        onCopy={() => {
                          setAddressCopied(true);
                          setTimeout(() => {
                            setAddressCopied(false);
                          }, 800);
                        }}
                      >
                        <div className="!rounded-xl flex gap-1  items-center font-GothamBold font-bold text-[18px]">
                          <span>{shrotAddress}</span>

                          <DocumentDuplicateIcon
                            className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0"
                            aria-hidden="true"
                          />
                          {/* <span className=" whitespace-nowrap">Copy address</span> */}
                        </div>
                      </CopyToClipboard>
                    </div>
                  )}
                </div>
                <div>
                  <Link
                    target="_blank"
                    href={blockExplorerAddressLink || ""}
                    passHref
                    className="mt-[6px] font-normal gap-[3px] w-[111px] flex items-center rounded-[20px] py-[3px] pl-[9px] pr-[11px] font-Gotham text-[11px] items-center"
                    style={{ border: "1px solid rgba(255,255,255,.4)", color: "rgba(255,255,255,.4)" }}
                  >
                    <span>Block Explorer</span>
                    <Image src={explorerIcon} width={6} height={6} alt="" />
                    {/* <ArrowTopRightOnSquareIcon className="h-6 w-4 ml-2 sm:ml-0" /> */}
                    {/* <MagnifyingGlassIcon className="h-4 w-4" /> */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute right-[40px] top-[26px] cursor-pointer" onClick={closeDropdown}>
              <Image src={close} alt="" width={12} height={12} />
            </div>
          </div>
          {/* <div
            className="w-full pt-[7px] pb-[8px] px-[27px] flex justify-between items-center"
            style={{ borderTop: "2px solid rgba(255,255,255,.1)", borderBottom: "2px solid rgba(255,255,255,.1)" }}
          >
            <div className="font-bold font-GothamBold text-[16px]">Balance</div>
            <div className="flex gap-[7px]">
              <Image src={Token} alt="" width={27} height={27} />
              <Balance
                address={checkSumAddress}
                className="font-normal font-Gotham text-[14px]"
                contractBalance={balance}
              />
            </div>
          </div> */}
          <li className={selectingNetwork ? "hidden" : ""}>
            <div
              onClick={goMyPortfolio}
              className="mx-[24px] mt-[18px] h-[60px] rounded-[16px] text-[16px] font-Gotham flex justify-center items-center hover:bg-[rgba(217,217,217,.3)] bg-[rgba(217,217,217,.1)]"
              style={{}}
            >
              My portfolio
            </div>
          </li>
          {allowedNetworks.length > 1 ? (
            <li className={selectingNetwork ? "hidden" : ""}>
              <button
                className="btn-sm !rounded-xl flex gap-3 py-3"
                type="button"
                onClick={() => {
                  setSelectingNetwork(true);
                }}
              >
                <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" /> <span>Switch Network</span>
              </button>
            </li>
          ) : null}
          <li className={selectingNetwork ? "hidden" : ""}>
            <div
              className="mx-[24px] mt-[15px] h-[60px] rounded-[16px] text-[16px] font-Gotham flex justify-center items-center hover:bg-[rgba(217,217,217,.3)] bg-[rgba(217,217,217,.1)]"
              style={{}}
              onClick={() => logout()}
            >
              Disconnect
            </div>
          </li>
        </ul>
      </details>
    </>
  );
};
