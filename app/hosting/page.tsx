'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logoZeroCode.png";
import { useRouter } from "next/navigation";

export default function Intermediate() {
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("");

  const handleClick = () => {
   
      router.push("/dashboard");
    
  };

 

  return (
    <div className="flex justify-center pt-32">
    <div className="w-full md:w-4/5  h-auto md:h-[70vh] bg-white shadow-2xl rounded-2xl p-8">
      <div className="flex flex-col items-center">
        <div className="mb-10">
          <Image src={logo} alt="logo" />
        </div>
        <div className="text-4xl text-center">Welcome Arya Soni!</div>
        <div className="flex mt-6 items-center justify-center">
          <hr className="lg:w-44 w-0 bg-gray-500 mt-5 mx-4" />
          <span className="text-lg sm:text-xl lg:text-lg text-gray-500">Choose the following</span>
          <hr className="lg:w-44 w-0  bg-gray-500 mt-5 mx-4" />
        </div>
  
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-16 justify-center">
          <div
            className="rounded-md font-medium px-6 sm:px-12 py-3 border-[0.5px] border-[#C0C0C0] cursor-pointer text-center"
            onClick={() => handleClick()}
          >
            Self Hosting
          </div>
          <div
            className="rounded-md px-6 sm:px-12 py-3 font-medium border-[0.5px] border-[#C0C0C0] cursor-pointer text-center"
            onClick={() => handleClick()}
          >
            XeroCodee Hosting
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
