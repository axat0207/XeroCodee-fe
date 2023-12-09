'use client'
import CircularProgress from "./CircularProgress";
import aws from "@/public/Amazon_Web_Services_Logo1.png";
import gitlab from "@/public/gitlab 2.png";
import mongo from "@/public/mongodb.png";
import StatusCard from "./StatusCard";
import { useEffect, useState } from "react";

interface CircularProgressProps {
    value: number;
    showStatus?: boolean;
  }
  
  const ProgressCard: React.FC<CircularProgressProps> = ({ value, showStatus = false }) => {
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(true);
    const [step3, setStep3] = useState(true);
  
    useEffect(() => {
        if (showStatus){
            const timer1 = setTimeout(() => {
                setStep1(false);
              }, 900);
          
              const timer2 = setTimeout(() => {
                setStep2(false);
              }, 2100);
          
              const timer3 = setTimeout(() => {
                setStep3(false);
              }, 3300);
          
        }
      
     
    }, []);
  
    useEffect(() => {
      if (showStatus) {
        const timer = setTimeout(() => {
          setStep1(false);
          setTimeout(() => {
            setStep2(false);
            setTimeout(() => {
              setStep3(false);
            }, 900);
          }, 1200);
        }, 1200);
        return () => clearTimeout(timer);
      }
    }, [showStatus]);
  
  
  
      
  return (
    <>
      <div className="flex justify-center border border-gray-200    pt-2 sm:mx-4 my-2 mb-4 mx-auto md:px-8 pb-4 shadow-md rounded-xl">
        <div className="">
          <div className="mt-8 lg:mt-0">
            <div className="text-2xl lg:text-xl font-bold text-center">
              Your Progress
            </div>
            <div className="text-xs lg:text-xs text-center text-gray-600 mb-4">
              towards XeroCodee
            </div>
            <div className="flex w-24 mx-auto justify-center mb-4">
              <CircularProgress percentage={value} />
            </div>
            <div className="flex justify-center">
              <div className="text-xs px-2 py-1 text-[#797979] border-[0.5px] border-gray-200 bg-[#FBFCFE] rounded-full">
                View Details
              </div>
            </div>
            <div className="">
              <div className={`${step1?'invisible':''}`}>
                <div className="text-xs font-semibold text-gray-400 px-4 ">
                  Step 1
                </div>
                <StatusCard
                  status="Completed"
                  title="AWS"
                  logo={aws}
                  bgColour="#fff5e5"
                  borderColour="##FFDFA2"
                />
              </div>
              <div className={`${step2?'invisible':''} mt-3`}>
                <div className="text-xs font-semibold text-gray-400 px-4  ">
                  Step 2
                </div>
                <StatusCard
                  status="Completed"
                  title="Gitlab"
                  logo={gitlab}
                  bgColour="#fcebe9"
                  borderColour="#fbcabe"
                />
              </div>
              <div className={`${step3?'invisible':''} mt-3`}>
                <div className="text-xs font-semibold text-gray-400 px-4 ">
                  Step 3
                </div>
                <StatusCard
                  status="Pending"
                  title="MongoDB"
                  logo={mongo}
                  bgColour="#EDF5ED"
                  borderColour="#34A853"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressCard;
