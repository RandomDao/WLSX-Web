"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Header, ProjectBlock } from "~~/components";
import type { NextPage } from "next";
import exploreBtn from "~~/app/assets/images/exploreBtn.png";
import indexBG from "~~/app/assets/images/indexBG.png";
const Home: NextPage = () => {
  const router = useRouter();
  const goProject = () => {
    router.push(`/project`);
  };
  return (
    <div className="w-[100%]  flex items-center flex-col justify-center">
      {/* <Image src={indexBG} alt="" className="w-[100%] absolute top-[0] mt-[-120px] z-1" /> */}
      <div className="flex items-center flex-col  pt-[0] w-[1178px] ">
        <Header />
        <div className="mt-[167px] w-[100%]">
          <ProjectBlock stage="INPROGRESS" />
        </div>
        <div className="mt-[127px] w-[100%]">
          <ProjectBlock state="UPCOMING" />
        </div>

      </div>
    </div>
  );
};

export default Home;
