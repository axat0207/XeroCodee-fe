import React from "react";
import { Switch } from "./ui/switch";

// interface IntroCardInterface {
//   title: string;
//   desc: string;
// }

export const IntroCard = () => {
  return (
    <div className="">
      <div className="  py-4  pb-2 w-full  lg:px-10  rounded-[30px] border border-solid border-white bg-[#F6FAFF]">
        <div className="flex flex-wrap justify-between">
          <div className="px-5 lg:px-0 text-5xl font-bold">Hi. Arya !</div>
          <div className="hidden lg:flex gap-2">
            <span>Test Mode</span>
            <Switch />
            <span>Production Mode</span>
          </div>
        </div>
        <div className="px-5 lg:px-0 text-md font-semibold mt-2"> Welcome to XeroCodee ecosystem 😎</div>
      </div>
    </div>
  );
};
