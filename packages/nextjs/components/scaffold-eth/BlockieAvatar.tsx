"use client";

import { AvatarComponent } from "@rainbow-me/rainbowkit";
import { blo } from "blo";

// Custom Avatar for RainbowKit
export const BlockieAvatar: AvatarComponent = ({ address, ensImage, size, rounded = "rounded-full" }) => (
  // Don't want to use nextJS Image here (and adding remote patterns for the URL)
  // eslint-disable-next-line @next/next/no-img-element
  <div
    className="p-[4px] rounded-full"
    style={{
      background: "linear-gradient(0deg, rgb(92, 143, 255) 0%, rgb(193, 75, 255) 100%)",
  }}>
    <img
      className={rounded}
      src={ensImage || blo(address as `0x${string}`)}
      width={size}
      height={size}
      alt={`${address} avatar`}
    />
  </div>
);
