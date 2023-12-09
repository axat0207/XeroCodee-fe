'use client'

import Image from "next/image"
import steps from "@/public/step.png";
export default function StepsLine(){
    return(<>
    <div className="hidden 2xl:flex flex-col items-center justify-center">
            {[1, 2, 3].map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute w-8 -right-3 -top-5">
                  <Image src={steps} alt={`step${step}`} />
                </div>
                <div className="w-1.5 h-36 shadow-2xl shadow-inherit rounded-md bg-white border-[0.5px] border-gray-200"></div>
              </div>
            ))}
          </div>
    </>)
}