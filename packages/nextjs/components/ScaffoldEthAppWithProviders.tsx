"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import pointMarket from "~~/app/assets/images/point-market.png";
import preMarket from "~~/app/assets/images/pre-market.png";
import profilo from "~~/app/assets/images/profilo.png";
import home from "~~/app/assets/images/home.png";
import homeActive from "~~/app/assets/images/homeActive.png";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const path: any = usePathname();
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  const [isIndex, setIsIndex] = useState(true);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);
  useEffect(() => {
    if (path === "/") {
      setIsIndex(true);
    } else {
      setIsIndex(false);
    }
  }, [path]);
  return (
    <>
      <div
        className="flex flex-col min-h-screen bg-[rgba(23,24,27,1)]"
        style={
          {
            // background: "linear-gradient(176.81deg, #414593 0%, #00022E 100.23%)",
            // backgroundImage: isIndex ? "url(/bg-index.png)" : "url(/bg.png)",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "100% 100%",
          }
        }
      >
        <div
          className="w-[78px] h-[580px] rounded-br-[30px] rounded-tr-[30px] fixed top-[5px] pt-[40px] flex flex-col items-center z-10 bg-[rgba(23,24,27,1)]"
          style={{ borderRight: "1px solid #23262F", boxShadow: "9px 10px 11px 0px rgba(0, 0, 0, 0.25)" }}
        >
          
          <div className="flex flex-col gap-[37px] mt-[95px]">
            <Link href="/">
              <div className="cursor-pointer">
                <Image src={pathname == "/" ? homeActive : home} alt="" width={22} height={22} />
              </div>
            </Link>
            <Link href="/preMarket">
              <div className="cursor-pointer">
                <Image src={preMarket} alt="" width={22} height={22} />
              </div>
            </Link>
            <Link href="/pointMarket">
              <div className="cursor-pointer">
                <Image src={pointMarket} alt="" width={22} height={22} className="cursor-pointer" />
              </div>
            </Link>
            <Link href="/portfolio">
              <div className="cursor-pointer">
                <Image src={profilo} alt="" width={22} height={22} className="cursor-pointer" />
              </div>
            </Link>
          </div>
        </div>
        <Header />

        <main className="relative flex flex-col flex-1">{children}</main>

        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <ProgressBar />
      <RainbowKitProvider
        chains={appChains.chains}
        avatar={BlockieAvatar}
        theme={mounted ? (isDarkMode ? darkTheme() : lightTheme()) : lightTheme()}
      >
        <ScaffoldEthApp>{children}</ScaffoldEthApp>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
