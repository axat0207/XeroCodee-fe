"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/public/logoZeroCode.png";
import background from "@/public/bg.png";
// import character from "@/public/Character.svg";
import Image from "next/image";
import { Card } from "@/components/Card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import google from "@/public/google.png";
import github from "@/public/github1.png";
import { signIn } from "next-auth/react";
export default function Signup() {
  const router = useRouter();
  const apiUrl = "http://localhost:8888/"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setcConfirmPPassword] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if(password!==confirmPassword)
    {
        alert('Password and confirmPassword must be Same!');
        return;
    }
    const response = await fetch(apiUrl+"api/auth/createuser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name,email: email, password: password})
        
    });
   
    const json = await response.json()
    console.log(json);
    
    if(json.error){
      alert(json.error)
    }
    if (json.authtoken){
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken); 
      router.push("/intermediate");
      alert('Account Created Successfully')

  }
 

        
    
    
}

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl  bg-white shadow-2xl rounded-tr-[30px] rounded-bl-[30px] px-10 py-10 mt-10 w-full mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 flex flex-col justify-center items-center">
            <div className="mx-auto">
              <Image src={logo} alt="logo" />
            </div>
            <div className="text-3xl mt-4 font-semibold text-center">
              Welcome !
            </div>
            <span className="flex text-md mt-4 mx-auto">
              {/* <hr className="hidden md:block w-16 mt-3 mx-2" /> */}
              Sign up to your Account
              {/* <hr className="hidden md:block w-16 mt-3 mx-2" /> */}
            </span>
            <div className="flex gap-3 mt-5 flex-col w-full">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
              />
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
              <Input
                value={confirmPassword}
                onChange={(e) => setcConfirmPPassword(e.target.value)}
                placeholder="Confirm password"
                type="password"
              />
            </div>
            <Button
              onClick={handleSubmit}
              size={"lg"}
              className="w-full bg-[#1F64FF] mt-4"
            >
              Sign up
            </Button>
            <div className="mx-auto my-2">Or</div>
            <div className="flex gap-4 mx-auto">
              <Button
                variant={"outline"}
                className="gap-2 text-slate-600 text-sm"
              >
                <div onClick={()=>{signIn('google');router.push("/intermediate")}} >Google Login</div>
                <div className="w-7">
                  <Image src={google} alt="google" />
                </div>
              </Button>
              <Button
                variant={"outline"}
                className="text-slate-600 gap-2 text-sm"
              >
                <div onClick={()=>{signIn('github');router.push("/intermediate");}}>Github Login</div>
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
                onClick={() => router.push("/login")}
                className="text-sky-500 text-sm cursor-pointer"
              >
                Login
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
