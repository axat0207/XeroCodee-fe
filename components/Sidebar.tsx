"use client";

import Image from "next/image";
import one from '@/public/dashbordLogos/2.png'
import two from '@/public/dashbordLogos/2.png'
import three from '@/public/dashbordLogos/3.png'
import four from '@/public/dashbordLogos/4.png'
import five from '@/public/dashbordLogos/5.png'
import six from '@/public/dashbordLogos/6.png'
import seven from '@/public/dashbordLogos/7.png'
import eight from '@/public/dashbordLogos/8.png'
import nine from '@/public/dashbordLogos/9.png'
import ten from '@/public/dashbordLogos/10.png'
import eleven from '@/public/dashbordLogos/11.png'
import { useState } from "react";

interface SidebarProps {}

const sidebarData = [
  {
    title: "XeroCodee",
    icon: one,
  },
  {
    title: "Builder Center",
    icon: two,
  },
  {
    title: "Service Board",
    icon: three,
  },
  {
    title: "Clusters",
    icon: four,
  },
  {
    title: "Databases",
    icon: five,
  },
  {
    title: "Environment",
    icon: six,
  },
  {
    title: "Workflow",
    icon: seven,
  },
  {
    title: "Monitoring",
    icon: eight,
  },
  {
    title: "Security",
    icon: nine,
  },
  {
    title: "Web Hooks",
    icon: ten,
  },
  {
    title: "Log Error",
    icon: eleven,
  },
];

export const Sidebar: React.FC<SidebarProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTitleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
<div className="hidden md:flex md:flex-col w-full md:[15vw] px-5 h-full mt-1 bg-[#C2DAFB]">
  <div className="flex flex-col mx-auto gap-3 pt-6">
    {sidebarData.map((data, index) => (
      <div
        key={index}
        className={`flex gap-6 ${
          activeIndex === index ? "bg-white rounded-full py-2 px-4" : "py-2 px-4"
        } cursor-pointer`}
        onClick={() => handleTitleClick(index)}
      >
        <Image className="w-5 h-5" src={data.icon} alt={data.title} />
        <div className="text-sm text-black font-nunito font-medium">
          {data.title}
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Sidebar;
