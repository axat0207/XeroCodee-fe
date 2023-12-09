import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import kebab from "@/public/kebab.png";
interface StatusInterface {
  title: string;
  logo: StaticImageData;
  status: string;
  bgColour: string;
  borderColour: string;
}

export const StatusCard: React.FC<StatusInterface> = ({
  title,
  logo,
  status,
  bgColour,
  borderColour,
}) => {
  const cardStyleborder = {
    backgroundColor: bgColour,
  };
  const cardStylebg = {
    backgroundColor: bgColour,
  };

  return (
    <>
      <div
        style={cardStylebg}
        className="rounded-lg px-5 mt-2  py-1 justify-between shadow-md flex gap-14"
      >
        <div className="flex flex-col">
          <div className="font-semibold text-sm pr-10 pt-2">{title}</div>
          <div className="mt-1  flex ">
            <div className="text-gray-400 text-xs">Status: {status}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            className={` border-2 bg-white`}
            style={cardStyleborder}
          >
            <div className="w-8">
              <div className="w-full h-auto">
                <Image src={logo} alt="image" />
              </div>
            </div>
          </Button>
          <Image className="h-8 text-gray-300 w-8" src={kebab} alt="kebab" />
        </div>
      </div>
    </>
  );
};

export default StatusCard;
