/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SwitchTheme } from "./SwitchTheme";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import Draw from "~~/app/assets/images/draw.png";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  target?: string;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/project",
    // icon: <BugAntIcon className="h-4 w-4" />,
  },
  {
    label: "Marketplace",
    href: "https://opensea.io",
    target: "_blank",
    // icon: <BugAntIcon className="h-4 w-4" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon, target = "" }) => {
        const isActive = pathname === href;
        return (
          <li key={href} className="px-0">
            <Link
              href={href}
              target={target}
              passHref
              className={`${isActive ? "menuActive " : ""
                } hover:menuActive relative px-0 font-GothamRounded font-[325]`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    // shadow-md shadow-secondary
    <div
      className="fixed top-0 navbar min-h-0 flex-shrink-0 justify-between z-20 p-0 h-[80px] bg-[rgba(23,24,27,1)]"
      style={{
        borderBottom: "1px solid #23262F",
        boxShadow: "9px 10px 11px 0px rgba(0, 0, 0, 0.25)"


      }}
    >
      <div className="pl-[26px] cursor-pointer">
        <Image src={Draw} alt="" width={22} height={22} />
      </div>
      <div className="navbar-start w-auto  pl-[67px]">
        <Link href="/" passHref className="hidden lg:flex items-center gap-2  mr-6 shrink-0">
          <div className="flex relative w-[100px] h-[17px]">
            <Image alt="WLSX logo" className="cursor-pointer" fill src="/logo.png" />
          </div>
        </Link>
      </div>
      <div className="navbar-end flex-grow pr-[95px]">
        {/* <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal p-0 gap-[60px]">
          <HeaderMenuLinks />
        </ul> */}
        {/* ${isLocalNetwork ? "self-end md:self-auto" : ""} */}
        {/* <SwitchTheme className={`pointer-events-auto ml-[51px]`} /> */}
        <RainbowKitCustomConnectButton />
        {/* <FaucetButton /> */}
      </div>
    </div>
  );
};
