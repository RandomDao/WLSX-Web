"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import discount from "~~/app/assets/images/discount.svg";
import Eign from "~~/app/assets/images/eign.png";
import Token from "~~/app/assets/images/token.png";
import { ProjectBlock } from "~~/components";
import { ModalHeader } from "~~/components/ModalHeader";
import { getDesktop, getProjectList } from "~~/services/api/api";
import { cardTimeFormate, moneyFormate } from "~~/utils";

const Project: NextPage = () => {
  const router = useRouter();
  const [projectEndList, setProjectEndList] = useState([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      queryProjectList();
    }
  }, []);
  const queryProjectList = async () => {
    const res = await getDesktop();
    setProjectEndList(res);
  };
  const goToDetail = (item: any) => {
    router.push(`/projectDetail?id=${item.project_id}`);
  };
  return (
    <div className="w-[100%] flex items-center flex-col justify-center">
      <div className="flex  flex-col  pt-[108px] w-[1178px] ">
        <div className="flex gap-[10px] items-center">
          <Image src={discount} alt="" width={40} height={40}></Image>
          <div>
            <ModalHeader>Live Pre-Market</ModalHeader>
            <div className="text-[#707a8a] font-GothamBold mt-[-10px]">Trade pre-TGE token allocations.</div>
          </div>
        </div>
        <div className="mt-[38px]">
          <div
            className="flex text-[14px] text-[#777E90] pb-[20px] px-[10px]"
            style={{ borderBottom: "1px solid #23262F" }}
          >
            <div className="w-[30%]">Token</div>
            <div className="w-[10%]">Last Price </div>
            <div className="w-[10%]">Vol 24h </div>
            <div className="w-[10%]">Total Vol</div>
            <div className="w-[15%]">Settle Starts (UTC)</div>
            <div className="w-[15%]">Settle Ends (UTC)</div>
            <div className="w-[10%] text-right ">Countdown</div>
          </div>
          {projectEndList.map((item: any, key: any) => (
            <div
              onClick={() => goToDetail(item)}
              key={key}
              className="h-[80px] flex items-center cursor-pointer hover:bg-[#1C1E23] rounded-[8px]  px-[10px]"
            >
              <div className="w-[30%] flex gap-[10px] items-center">
                <img src={item.token_icon} alt="" width={40} height={40} className="rounded-full" />
                <div>
                  <div className="text-[14px] font-Gotham ">{item.token_name}</div>
                  <div className="text-[12px] font-Gotham text-[#707a8a]">{item.token_symbol}</div>
                </div>
              </div>
              <div className="w-[10%]">
                <div className="text-[14px] font-Gotham">$31.2</div>
                <div className="text-[12px] font-Gotham text-[#2ed157]">+3.1%</div>
              </div>
              <div className="w-[10%]">
                <div className="text-[14px] font-Gotham">$0</div>
                <div className="text-[12px] font-Gotham text-[#2ed157]">+0%</div>
              </div>
              <div className="w-[10%]">
                <div className="text-[14px] font-Gotham">$0</div>
                <div className="text-[12px] font-Gotham text-[#2ed157]">+0%</div>
              </div>
              <div className="w-[15%]">
                <div className=" text-[12px]">No Starts</div>
                {/* <div className="text-[14px] font-Gotham">$3.45</div>
                <div className="text-[12px] font-Gotham text-[#2ed157]">+16.1%</div> */}
              </div>
              <div className="w-[15%]">
                <div className=" text-[12px]">No Ends</div>

                {/* <div className="text-[14px] font-Gotham">$3.45</div>
                <div className="text-[12px] font-Gotham text-[#2ed157]">+16.1%</div> */}
              </div>
              <div className="w-[10%] text-right text-[12px]">Countdown</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
