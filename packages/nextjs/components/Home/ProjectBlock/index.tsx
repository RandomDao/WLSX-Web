"use client";

import React, { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ModalHeader } from "~~/components/ModalHeader";
import { ProjectCard } from "~~/components/ProjectCard";
import { getDesktop } from "~~/services/api/api";

export const ProjectBlock = ({ stage }: any) => {
  const [projectList, setProjectList] = useState([]);
  // const { stage } = props;
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      queryProjectList();
    }
  }, []);
  const queryProjectList = async () => {
  
    const res = await getDesktop();
    setProjectList(res);
  };

  return (
    <div className="w-[100%]">
      <ModalHeader>{stage == "INPROGRESS" ? "Pre-Market" : "Points"}</ModalHeader>
      <div className="flex gap-[28px] mt-[16px]">
        {projectList.map((item, key) => (
          <ProjectCard status={stage == "INPROGRESS" ? "active" : "coming"} key={key} item={item} />
        ))}
      </div>
    </div>
  );
};
