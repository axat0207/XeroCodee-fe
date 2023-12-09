'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logoZeroCode.png";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Intermediate() {
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("");

  const handleClick = (type:string) => {
    if (type === "Developer") {
      router.push("/hosting");
    } else if (type === "Orgnisation" || type === "Company") {
      setPlaceholderText(type === "Orgnisation" ? "Orgnisation" : "Company");
      setShowInput(true);
    }
  };

  const handleSubmit = () => {
    // Perform action after submitting the company/organisation name
    // For now, redirecting to the hosting page
    router.push("/hosting");
  };

  return (
    <div className="flex justify-center pt-32 lg:pt-10 md:pt-20">
  <div className="w-full md:w-4/5  h-auto md:h-[70vh] bg-white shadow-2xl rounded-2xl p-6 md:p-8">
    <div className="flex flex-col items-center">
      <div className="mb-6 md:mb-10">
        <Image src={logo} alt="logo" />
      </div>
      <div className="text-2xl md:text-4xl text-center">Welcome Arya Soni!</div>
      <div className="flex mt-4 md:mt-6 items-center justify-center">
        <hr className="w-14 md:w-28 bg-gray-500 mt-2 md:mt-5 mx-2 md:mx-4" />
        <span className="text-base md:text-xl text-gray-500">Choose the following</span>
        <hr className="w-14 md:w-28 bg-gray-500 mt-2 md:mt-5 mx-2 md:mx-4" />
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-6 md:mt-16 justify-center">
        <div
          className="rounded-md font-medium px-6 md:px-12 py-2 md:py-3 border-[0.5px] border-[#C0C0C0] cursor-pointer text-center"
          onClick={() => handleClick("Developer")}
        >
          Developer
        </div>
        <div
          className="rounded-md px-6 md:px-12 py-2 md:py-3 font-medium border-[0.5px] border-[#C0C0C0] cursor-pointer text-center"
          onClick={() => handleClick("Orgnisation")}
        >
          Orgnisation
        </div>
        <div
          className="rounded-md px-6 md:px-12 py-2 md:py-3 border-[0.5px] font-medium border-[#C0C0C0] cursor-pointer text-center"
          onClick={() => handleClick("Company")}
        >
          Company
        </div>
      </div>

      {showInput && (
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-6 md:mt-16 justify-center">
          <Input
            className="w-full md:w-80"
            placeholder={`${placeholderText} name`}
          />
          <Button
            size={"default"}
            variant={"secondary"}
            className="w-full md:w-auto bg-[#1F64FF] text-white"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  </div>
</div>

  );
}
