"use client";

import React, { useState } from "react";
import steps from "@/public/step.png";
import Image from "next/image";
import { ServiceCard } from "./ServiceCard";
import aws from "@/public/Amazon_Web_Services_Logo1.png";
import gcp from "@/public/cloud.png";
import github from "@/public/github.png";
import gitlab from "@/public/gitlab 2.png";
import bitbucket from "@/public/bitbucket.png";
import postgres from "@/public/Postgresql.png";
import mongo from "@/public/mongodb.png";
import redis from "@/public/redis.png";
import ProgressCard from "./ProgressCard";
import { IntroCard } from "./IntroCard";
import StepsLine from "./StepsLine";

const MainCard = () => {
  const [progress, setProgress] = useState(0);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [status, setStaus] = useState(false);
  const slideInStyles = {
    opacity: step2 ? 1 : 0,
    transition: "opacity 0.5s, transform 0.5s",
    transform: step2 ? "translateY(0)" : "translateY(-50%)",
  };
  return (
    <div className="bg-white   shadow-xl rounded-[30px] rounded-t-[30px]">
      <IntroCard />
      <div className=" flex pl-10 flex-col lg:flex-row justify-evenly gap-8 lg:gap-16">
        <div className="flex gap-10">
          <StepsLine />

          <div className="flex flex-col ">
            <div className="mb-6 md:mb-4 lg:mb-0">
              <div className="font-semibold px-5 lg:mt-4 lg:px-0 text-lg lg:text-xl">
                Step 1
              </div>
              <div className="text-xs px-5 lg:px-0 text-gray-500 lg:text-sm  ">
                Connect to Cloud
              </div>
              <div className="flex cursor-pointer flex-wrap justify-center lg:justify-start gap-4 mt-4  lg:mt-2 lg:gap-6 ">
                <div
                  onClick={() => {
                    setProgress(40);
                    setStep2(!step2);
                    setStep3(false);
                    setStaus(false);
                  }}
                >
                  <ServiceCard title={"AWS"} imgsrc={aws} />
                </div>
                <div
                  onClick={() => {
                    setProgress(40);
                    setStep2(!step2);
                    setStep3(false);
                    setStaus(false);
                  }}
                >
                  <ServiceCard title={"GCP"} imgsrc={gcp} />
                </div>
                <div className="md:invisible">
                  <div className="hidden lg:block">
                    <ServiceCard title={"GCP"} imgsrc={gcp} />
                  </div>
                </div>
              </div>
            </div>

            {step2 && (
              <div className="mb-6 md:mb-4 lg:mb-0" style={slideInStyles}>
                <div className="font-semibold px-5 lg:mt-5 lg:px-0 text-lg lg:text-xl">
                  Step 2
                </div>
                <div className="text-xs  px-5 lg:px-0 text-gray-500 lg:text-sm">
                  Connect to Source Code
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start  lg:mt-2  lg:gap-6 gap-4 mt-4 ">
                  <div
                    onClick={() => {
                      setProgress(80);
                      setStep3(!step3);
                      setStaus(false);
                    }}
                  >
                    <ServiceCard title={"Github"} imgsrc={github} />
                  </div>
                  <div
                    onClick={() => {
                      setProgress(80);
                      setStep3(!step3);
                      setStaus(false);
                    }}
                  >
                    <ServiceCard title={"Gitlab"} imgsrc={gitlab} />
                  </div>
                  <div
                    onClick={() => {
                      setProgress(80);
                      setStep3(!step3);
                      setStaus(false);
                    }}
                  >
                    <ServiceCard title={"Bitbucket"} imgsrc={bitbucket} />
                  </div>
                </div>
              </div>
            )}

            {step3 && (
              <div>
                <div className="font-semibold px-5 lg:px-0 lg:mt-5 text-lg lg:text-xl">
                  Step 3
                </div>
                <div className="text-xs  px-5 lg:px-0 text-gray-500 lg:text-sm ">
                  Connect to DataSource
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4 lg:mt-2   lg:gap-6">
                  <div
                    onClick={() => {
                      setProgress(100);
                      setStaus(true);
                    }}
                  >
                    <ServiceCard title={"MongoDB"} imgsrc={mongo} />
                  </div>
                  <div
                    onClick={() => {
                      setProgress(100);
                      setStaus(true);
                    }}
                  >
                    <ServiceCard title={"Redis"} imgsrc={redis} />
                  </div>
                  <div
                    onClick={() => {
                      setProgress(100);
                      setStaus(true);
                    }}
                  >
                    <ServiceCard title={"Postgresql"} imgsrc={postgres} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <ProgressCard value={progress} showStatus={status} />
      </div>
    </div>
  );
};

export default MainCard;
