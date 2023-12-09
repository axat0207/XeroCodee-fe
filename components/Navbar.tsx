import Image from "next/image";
import logo from "@/public/logoZeroCode.png";
import search from "@/public/search.png";
import notification from "@/public/notifications.png";
import cake from "@/public/giftcard.png";
import message from "@/public/mail.png";
import setting from "@/public/Settings.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Dropdown from "./Dropdown";
import profile from "@/public/profile.png";
// export default function Navbar() {
//   return (
//     <>
//       <div className="bg-[#C2DAFB]">
//         <div className="sm:flex justify-center sm:justify-between px-10 py-4 items-center w-full">
//           <div className="flex gap-4">
//             <Image src={logo} alt="logo" />
//             <div className="hidden  relative lg:flex">
//               <Input className="rounded-full py-5" placeholder="Search" />
//               <div className="px-1.5 top-1 py-1.5 rounded-full absolute right-1 bg-[#0C5BC6]">
//                 <Image className="w-5" src={search} alt="se" />
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <div className="relative hidden lg:flex ">
//               <div className="px-1 top-1.5 left-1 py-1 rounded-full bg-white absolute ">
//                 <Image src={cake} alt="cake" />
//               </div>
//               <div className="rounded-full bg-[#FFC656] font-semibold text-sm px-4 text-black py-3 pl-10  flex shadow-2xl">
//                 Upgrade Plans
//               </div>
//             </div>

//             <Button className="bg-white shadow-xl rounded-lg" size={"icon"}>
//               <Image className="w-5" src={notification} alt="notification" />
//             </Button>
//             <Button className="bg-white shadow-xl rounded-lg" size={"icon"}>
//               <Image className="w-5" src={message} alt="message" />
//             </Button>
//             <Button className="bg-white shadow-xl rounded-lg" size={"icon"}>
//               <Image className="w-5" src={setting} alt="setting" />
//             </Button>
//             <div className="hidden md:block">
//               <Dropdown
//                 title="XeroCodee"
//                 dropdownHead="Values"
//                 val1="value1"
//                 val2="value2"
//               />
//             </div>
//             <Button className="bg-white shadow-xl rounded-lg" size={"icon"}>
//               <Image className="w-5" src={profile} alt="se" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import { useState } from 'react';

import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#C2DAFB] ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 ">
          <Image src={logo} className="" alt="XeroCodee" />

          <div className="hidden  relative lg:flex">
            <Input className="rounded-full py-5" placeholder="Search" />
            <div className="px-1.5 top-1 py-1.5 rounded-full absolute right-1 bg-[#0C5BC6]">
              <Image className="w-5" src={search} alt="se" />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto `} id="navbar-multi-level">
          <ul className="flex  font-medium p-4 md:p-0 mt-4 bg-[#C2DAFB]   rounded-lg  md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <li>
              <div className="block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-blue-500 md:dark:bg-transparent">
                <div className="relative hidden lg:flex ">
                  <div className="px-1 top-1.5 left-1 py-1 rounded-full bg-white absolute ">
                    <Image src={cake} alt="cake" />
                  </div>
                  <div className="rounded-full  bg-[#FFC656] font-semibold text-sm px-4 text-black py-3 pl-10  flex shadow-2xl">
                    Upgrade Plans
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-blue-500 md:dark:bg-transparent">
                <Button className="bg-white shadow-xl rounded-lg" size={"icon"}>
                  <Image
                    className="w-5"
                    src={notification}
                    alt="notification"
                  />
                </Button>
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-blue-500 md:dark:bg-transparent">
                <Button className="bg-white shadow-xl rounded-lg" size={"icon"}>
                  <Image className="w-5" src={message} alt="message" />
                </Button>
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-blue-500 md:dark:bg-transparent">
                <Button className="bg-white shadow-xl rounded-lg" size={"icon"}>
                  <Image className="w-5" src={setting} alt="setting" />
                </Button>
              </div>
            </li>
            <li>
              <div className="hidden md:block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-blue-500 md:dark:bg-transparent">
                <div className="">
                  <Dropdown
                    title="XeroCodee"
                    dropdownHead="Values"
                    val1="value1"
                    val2="value2"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-blue-500 md:dark:bg-transparent">
                <Button className="bg-white shadow-xl rounded-lg" size={"icon"}>
                  <Image className="w-5" src={profile} alt="se" />
                </Button>
              </div>
            </li>

           
            {/* Other list items */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
