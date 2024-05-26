"use client";

import React from "react";
import "react-toastify/dist/ReactToastify.css";

export const ModalHeader = (props: any) => {
  return (
    <div className="text-[32px] text-[#fff] font-extrabold leading-[61px] font-PPNeueMachina title-text-shadow">
      {props.children}
    </div>
  );
};
