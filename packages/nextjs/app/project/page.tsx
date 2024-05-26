"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import Token from "~~/app/assets/images/token.png";
import { getProjectList } from "~~/services/api/api";
import { cardTimeFormate, moneyFormate } from "~~/utils";
import { useRouter } from "next/navigation";
import { ProjectBlock } from "~~/components";

const Project: NextPage = () => {
  const router = useRouter();
  const [projectEndList, setProjectEndList] = useState([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      queryProjectList("FINISHED");
    }
  }, []);
  const queryProjectList = async (stage: string) => {
    const param = {
      page: 1,
      pageSize: stage === "FINISHED" ? 999 : 999,
      stage,
    };
    const res = await getProjectList(param);
    if (stage === "FINISHED") setProjectEndList(res);
  };
  const goToDetail = (item: any) => {
    router.push(`/projectDetail?id=${item.id}`);
  };
  return (
    <div className="w-[100%] flex items-center flex-col justify-center">
      <div className="flex items-center flex-col  pt-[108px] w-[1178px] ">
        <div className="w-[100%]">
          <ProjectBlock stage="INPROGRESS" />

        </div>
        <div className="w-[100%] mt-[88px]">
          <ProjectBlock stage="UPCOMING" />

          {/* <div className="text-[32px] text-[#fff] font-extrabold leading-[61px]  font-PPNeueMachina title-text-shadow">
            Upcoming Projects{" "}
          </div>
          <div className="flex gap-[28px] mt-[16px] flex-wrap">
            {projectUpcomingList.map((item: any, key: any) => (
              <ProjectCard status="coming" key={key} item={item} />
            ))}
          </div> */}
        </div>
        <div className="w-[100%] mt-[85px]">
          <div className="text-[32px] text-[#fff] font-extrabold leading-[61px] font-PPNeueMachina title-text-shadow">Projects</div>
          <div className="mt-[39px]">
            <div
              className="w-[100%] rounded-[10px] py-[7px] font-GothamBold text-[14px] font-bold flex"
              style={{ background: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)" }}
            >
              <div className="w-[313px] pl-[29px]">Project Name</div>
              <div className="w-[199px]">Fundraise Goal</div>
              <div className="w-[191px]">Total raised</div>

              <div className="w-[147px]">Participants</div>

              <div className="w-[167px]">APR</div>
              <div className="w-[186px] text-right pr-[51px]">Start in</div>
            </div>
            {projectEndList.map((item: any, key) => (
              <div
                onClick={() => goToDetail(item)}
                key={key}
                className={`pt-[19px] pb-[24px] text-[14px] font-Gotham flex mt-[9px] rounded-[12px] cursor-pointer ${key % 2 == 1
                  ? "hover:!bg-[rgba(213,199,255,.2)] bg-[rgba(213,199,255,.1)] "
                  : "hover:!bg-[rgba(213,199,255,.3)] bg-[rgba(213,199,255,.2)] "
                  }`}
                style={{
                  backgroundColor: key % 2 == 1 ? "rgba(213, 199, 255, .1)" : "rgba(213, 199, 255, .2)",
                }}
              >
                <div className="w-[313px] pl-[29px] flex items-center gap-[11px]">
                  <div
                    className="content w-[53px] h-[53px] rounded-[53px] flex items-center justify-center"
                    style={{
                      boxSizing: "border-box",
                      padding: "2px",
                      backgroundImage: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
                    }}
                  >
                    <div className="w-[49px] h-[49px] rounded-[49px] overflow-hidden">
                      <img className="w-[49px] h-[49px]" src={item?.logoUrl ?? ""} alt="" />
                    </div>
                  </div>

                  <div className="text-[14px] font-GothamBold font-bold">{item.title}</div>
                </div>
                <div className="w-[199px] text-[14px] font-Gotham font-normal flex items-center gap-[6px]">
                  <Image src={Token} alt="" width={21} height={21} />
                  {/* { } */}
                  {moneyFormate(item.amount)}
                </div>
                <div className="w-[191px] text-[14px] font-Gotham font-normal flex items-center gap-[6px]">
                  <Image src={Token} alt="" width={21} height={21} />
                  {moneyFormate(item.amount)}
                </div>
                <div className="w-[147px] text-[14px] font-Gotham font-normal flex items-center">
                  {item.participants}
                </div>
                <div className="w-[167px] text-[14px] font-Gotham font-normal flex items-center">{item.apr}</div>
                <div className="w-[186px] text-right pr-[51px] flex items-center">{cardTimeFormate(item?.endTime)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
