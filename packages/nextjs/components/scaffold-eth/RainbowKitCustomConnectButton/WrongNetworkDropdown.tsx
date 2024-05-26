/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { NetworkOptions } from "./NetworkOptions";
import { useDisconnect, useNetwork, useSwitchNetwork } from "wagmi";
import { ArrowLeftOnRectangleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

export const WrongNetworkDropdown = ({ openChainModal }: any) => {
  const { disconnect } = useDisconnect();
  const { switchNetwork } = useSwitchNetwork();
  const allowedNetworks = getTargetNetworks();
  const { chain } = useNetwork();

  useEffect(() => {
    const net = allowedNetworks.filter(allowedNetwork => allowedNetwork.id !== chain?.id)[0];
    // switchNetwork()
    switchNetwork?.(net.id);
    // openChainModal();
    //   if (allowedNetwork.id !== chain?.id)
    //     switchNetwork()
  }, []);
  return (
    <div className="dropdown dropdown-end mr-2">
      <label tabIndex={0} className="btn btn-error btn-sm dropdown-toggle gap-1">
        <span>Wrong network</span>
        <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 mt-1 shadow-center shadow-accent bg-base-200 rounded-box gap-1"
      >
        <NetworkOptions />
        <li>
          <button
            className="menu-item text-error btn-sm !rounded-xl flex gap-3 py-3"
            type="button"
            onClick={() => disconnect()}
          >
            <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" />
            <span>Disconnect</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
