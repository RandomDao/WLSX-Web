/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import closeLoding from "~~/app/assets/images/closeLoding.png";
import loading from "~~/app/assets/images/loading.gif";
import step1 from "~~/app/assets/images/step1.png";
import step1A from "~~/app/assets/images/step1A.png";
import step2 from "~~/app/assets/images/step2.png";
import step2A from "~~/app/assets/images/step2A.png";
import step3 from "~~/app/assets/images/step3.png";
import step3A from "~~/app/assets/images/step3A.png";
import step4 from "~~/app/assets/images/step4.png";
import step4A from "~~/app/assets/images/step4A.png";
import success from "~~/app/assets/images/success.png";
import USDT from "~~/app/assets/images/token.png";

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

/*
 * Site footer
 */
export const LoadingBox = ({ open, setOpen, step = [], projectDetail, stepActive, goMy, isGo = true }: any) => {
  const [loadingStep, setLoadingStep] = React.useState([]);
  React.useEffect(() => {
    if (step.length > 1) {
      setLoadingStep(
        step.sort(function (a: number, b: number) {
          return a - b;
        }),
      );
    }
  }, [step]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleBackdropClick = (event: any) => {
    // 阻止对话框关闭
    event.stopPropagation();  // 这一行是可选的，取决于你的具体需求
  };
  return (
    <Dialog
      open={open}
      // onClose={handleClose}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          handleClose();
        } else {
          handleBackdropClick(event);
        }
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      // className="bg-"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div
        className="w-[414px] rounded-[40px] p-[2px] overflow-hidden"
        style={{
          boxSizing: "border-box",
          backgroundImage: "linear-gradient(90deg, #9A5CFF 0%, #215FFF 100%)",
        }}
      >
        <div className="bg-[rgba(24,22,37,1)] w-[410px]  rounded-[40px] py-[40px] pl-[43px] pr-[33px]">
          <div className="flex justify-between items-center">
            <div className="text-[14px] font-GothamBold text-[#fff]">Check transaction</div>
            <div onClick={handleClose} className="cursor-pointer">
              <Image src={closeLoding} width={12} height={12} alt="" />
            </div>
          </div>

          {stepActive != 99 ? (
            step.length > 1 ? (
              <div className="mt-[50px]">
                {step.map((item: number, key: any) => (
                  <>
                    {item === 1 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[9px]">
                          <div>
                            <Image width={23} height={23} src={step1} alt={""} />
                          </div>
                          {/* {`${stepActive >= item ? "text-[#000]" : "text-[rgb(125,125,125)"}`} */}
                          {/* <div className="text-[14px] font-GothamBold text-[#fff]">Approve USDT</div> */}
                        </div>
                        {/* {item === stepActive && (
                          <div className="loading">
                            <Image width={24} height={24} src={loading} alt="" />
                          </div>
                        )}
                        {stepActive > item && (
                          <div>
                            <Image width={24} height={24} src={success} alt="" />
                          </div>
                        )} */}
                      </div>
                    )}
                    {item === 2 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[9px]">
                          <div>
                            <Image width={23} height={23} src={stepActive >= item ? step2A : step2} alt={""} />
                          </div>
                          {/* <div className="text-[14px] font-GothamBold text-[#fff]">Invest</div> */}
                        </div>
                        {/* {item === stepActive && (
                          <div className="loading">
                            <Image width={24} height={24} src={loading} alt="" />
                          </div>
                        )}
                        {stepActive > item && (
                          <div>
                            <Image width={24} height={24} src={success} alt="" />
                          </div>
                        )} */}
                      </div>
                    )}
                    {item === 3 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[9px]">
                          <div>
                            <Image width={23} height={23} src={stepActive >= item ? step3A : step3} alt={""} />
                          </div>
                          {/* <div className="text-[14px] font-GothamBold text-[#fff]">Approve NFT</div> */}
                        </div>
                        {/* {item === stepActive && (
                          <div className="loading">
                            <Image width={24} height={24} src={loading} alt="" />
                          </div>
                        )}

                        {stepActive > item && (
                          <div>
                            <Image width={24} height={24} src={success} alt="" />
                          </div>
                        )} */}
                      </div>
                    )}
                    {item === 4 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[9px]">
                          <div>
                            <Image width={23} height={23} src={stepActive >= item ? step4A : step4} alt={""} />

                          </div>
                          {/* <div className="text-[14px] font-GothamBold text-[#fff]">Stake</div> */}
                        </div>
                        {/* {item === stepActive && (
                          <div className="loading">
                            <Image width={24} height={24} src={loading} alt="" />
                          </div>
                        )}
                        {stepActive > item && (
                          <div>
                            <Image width={24} height={24} src={success} alt="" />
                          </div>
                        )} */}
                      </div>
                    )}
                    {key !== step.length - 1 && (
                      // ${stepActive > item ? "bg-[#000]" : "bg-[rgb(206,206,206)]"} 
                      <div
                        className={`w-[1px] h-[38px]  ml-[11px]`}
                        style={{ borderRight: "1px dashed rgba(255,255,255,.6)" }}
                      />
                    )}
                  </>
                ))}
                <div className="mt-[48px] text-[14px] font-GothamBold text-center w-[100%] text-[#fff]">
                  Please complete the operation in your wallet.
                </div>
              </div>

            ) : (
              <>
                <div className="w-[100%] flex items-center justify-center ">
                  <div className="flex flex-col items-center">
                    {/* loading */}
                    <div className=" w-[256px] h-[256px] mt-[26px]">
                      <Image width={256} height={256} src={loading} alt="" />
                    </div>
                    <div className="text-[rgba(255,255,255,.6)] font-GothamBold text-[12px] mt-[-35px]">
                      {/* Confirm
                      {step[0] == 1
                        ? " Approve USDT"
                        : step[0] == 2
                          ? " Invest"
                          : step[0] == 3
                            ? " Approve NFT"
                            : step[0] == 4
                              ? " Stake"
                              : " UnStake"} */}
                    </div>
                    <div className="text-[14px] mt-[81px] text-[#fff]  font-GothamBold">Transaction is confirming</div>
                  </div>
                </div>
              </>
            )
          ) : (
            <div className="w-[100%] flex items-center justify-center py-[100px]">
              <div className="flex flex-col items-center justify-center">
                <Image width={120} height={120} src={success} alt="" />
                <div className="text-[16px] mt-[48px] font-PPNeueMachina text-center w-[100%] text-[#fff]">Success!</div>
                {isGo && (
                  <div
                    className="p-[20px] flex justify-center items-center mt-[30px]  cursor-pointer rounded-[12px] text-[14px] font-GothamBold text-center w-[100%] text-[#fff]"
                    style={{ border: "1px solid #fff" }}
                    onClick={goMy}
                  >
                    My portfolio
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};
