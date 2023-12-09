import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import sync from "@/public/Sync.png";
interface ServiceCrdProps {
  title: string;
  imgsrc: StaticImageData;
}

export const ServiceCard: React.FC<ServiceCrdProps> = ({ title, imgsrc }) => {
  return (
    <>
      <div className="rounded-lg px-5 border-[0.5px] border-gray-100 justify-between shadow-md flex">
        <div className="flex-row">
          <div className="font-bold pr-10 pt-2">{title}</div>
          <div className="mt-4 flex gap-1">
            <span className="bg-red-500 rounded-full w-2 h-2"></span>
            <span className="bg-green-500 rounded-full w-2 h-2"></span>
            <Image className="-mt-1 mr-1" src={sync} alt="ref" />
          </div>
        </div>
        <Button
          variant={"ghost"}
          size={"icon"}
          className=" px-2 mt-1 h-14 w-16 border-2 bg-[#FFF5E5] border-[#FFDFA2]"
        >
          <Image src={imgsrc} alt="image" />
        </Button>
      </div>
    </>
  );
};
