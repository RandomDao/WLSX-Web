/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FormControlLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Switch,
  SwitchProps,
  styled,
} from "@mui/material";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import explorerIcon from "~~/app/assets/images/explorerIcon.png";
import question from "~~/app/assets/images/question.png";
import Token from "~~/app/assets/images/token.png";
import { MyProjectCard } from "~~/components/MyProjectCard";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { moneyFormate } from "~~/utils";
import { nftABIConfig, WLSXAbiConfig } from "~~/utils/config/config";
import { getBlockExplorerAddressLink, getBlockExplorerTxLink } from "~~/utils/scaffold-eth";

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Site footer
 */

const MenuProps = {
  PaperProps: {
    style: {
      width: "185px",
      fontSize: "14px",
      color: "#fff",
      backgroundColor: "rgba(24, 22, 37, 1)",
    },
  },
};

export const Lists = ({ userInfo, queryUserInfo, checkSumAddress }: any) => {

  const [names, setNames] = useState(["All projects"]);
  const [personName, setPersonName] = React.useState<string>(names[0]);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  return (
    <>
      <div className="px-[45px] py-[49px] pt-[26px]">
        <div className="flex justify-between items-center">
          <div>
            <label
              className="input flex items-center gap-2 bg-[rgba(25,23,60,.5)] w-[323px]"
              style={{ border: "1px solid rgba(255,255,255,.5)" }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" clip-path="url(#clip0_822_670)">
                  <mask id="mask0_822_670" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="13">
                    <path d="M13 0H0V13H13V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_822_670)">
                    <path
                      d="M12.6819 11.1356L9.57247 8.0294C9.5362 7.99318 9.4963 7.96637 9.45822 7.93486C9.98284 7.13006 10.2902 6.17132 10.2902 5.13833C10.2902 2.30106 7.98754 0.00146484 5.14556 0.00146484C2.30358 0.00146484 0 2.30106 0 5.13924C0 7.97742 2.30449 10.277 5.14556 10.277C6.17884 10.277 7.13995 9.96914 7.94855 9.44613C7.97739 9.48597 8.00513 9.524 8.04049 9.55841L11.1509 12.6664C11.3627 12.878 11.6383 12.9826 11.9159 12.9826C12.1936 12.9826 12.4703 12.878 12.6819 12.6655C13.1045 12.2436 13.1045 11.5594 12.6819 11.1356ZM5.14556 8.65437C3.20503 8.65437 1.62482 7.07718 1.62482 5.13924C1.62482 3.2013 3.20503 1.6232 5.14556 1.6232C7.08609 1.6232 8.6654 3.2013 8.6654 5.13924C8.6654 7.07718 7.08609 8.65437 5.14556 8.65437Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_822_670">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <input type="text" className=" bg-transparent text-[14px] font-Gotham font-medium" placeholder="Search" />
            </label>
          </div>
          <div className="flex items-center gap-[51px]">

            <div>
              <Select
                displayEmpty
                value={personName}
                onChange={handleChange}
                style={{
                  backgroundColor: "rgba(25, 23, 60, .5)",
                  border: "1px solid rgba(117, 113, 139, 1)",
                  borderRadius: "9px",
                  width: "185px",
                  height: "43px",
                }}
                sx={{
                  "& .MuiSvgIcon-root": {
                    // 这会选择 Select 组件中的所有 SVG 图标，通常箭头是唯一的图标
                    color: "#fff", // 设置向下箭头的颜色
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(117, 113, 139, 1)!important",
                  },
                }}
                input={<OutlinedInput />}
                renderValue={selected => {
                  // return sp
                  // if (selected.length === 0) {
                  //   return <em style={{ fontSize: '14px', color: '#fff' }}>All projects</em>;
                  // }

                  return <div className="text-[14px] font-Gotham text-[#fff]">{selected}</div>;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label", color: "#fff" }}
              >
                {names.map(name => (
                  <MenuItem key={name} value={name} className="text-[14px] font-Gotham text-[#fff]">
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div className="mt-[164px] text-center mb-[164px]">
          <div className="text-[14px] font-GothamBold">No Lists Data Available</div>
        </div>
      </div>
    </>
  );
};
