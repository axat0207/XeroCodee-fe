"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/public/logoZeroCode.png";
import background from "@/public/bg.png";
import github from "@/public/github1.png";
import google from "@/public/google.png";
import Image from "next/image";
import { Card } from "@/components/Card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  const login = (e: any) => {
    e.preventDefault();
    Cookies.set("loggedin", "true");
    router.push("/intermediate");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=" min-h-screen  flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl  bg-white shadow-2xl rounded-tr-[30px] rounded-bl-[30px] px-10 py-10  mt-10 w-full mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 flex flex-col justify-center items-center">
            <div className="mx-auto">
              <Image src={logo} alt="logo" />
            </div>
            <div className="text-3xl mt-4 font-semibold text-center">
              Welcome Arya Soni!
            </div>
            <span className="flex text-md mt-4 mx-auto">
              {/* <hr className="hidden md:block w-16 mt-3 mx-2" /> */}
              Login to your Account
              {/* <hr className="hidden md:block w-12 mt-3 mx-2" /> */}
            </span>
            <div className="flex gap-3 mt-5 flex-col w-full">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
            </div>
            <Button
              onClick={login}
              size={"lg"}
              className="w-full bg-[#1F64FF] mt-4"
            >
              Login
            </Button>
            <div className="mx-auto my-2">Or</div>
            <div className="flex gap-4 mx-auto">
              <Button
                variant={"outline"}
                className="gap-2 text-slate-600 text-sm"
              >
                <div>Google Login</div>
                <div className="w-7">
                  <Image src={google} alt="google" />
                </div>
              </Button>
              <Button
                variant={"outline"}
                className="text-slate-600 gap-2 text-sm"
              >
                <div>Github Login</div>
                <div className="w-7">
                  <Image className="" src={github} alt="github" />
                </div>
              </Button>
            </div>
            <div className="mx-auto mt-4">
              <span className="text-slate-600 text-sm">
                Already have an account?
              </span>{" "}
              <span
                onClick={() => router.push("/signup")}
                className="text-sky-500 text-sm cursor-pointer"
              >
                Signup
              </span>{" "}
            </div>
          </div>
          <div className="hidden sm:block h-72 sm:h-auto  my-10 bg-gray-200 w-[0.5px] mx-10"></div>
          <div className="hidden sm:w-1/2 sm:flex sm:justify-center sm:items-center">
            <Image src={background} alt="background image" />
            {/* <Image className="relative right-40" src={character} alt="char" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
