"use client";

import { Card } from "@/components/Card";
import { IntroCard } from "@/components/IntroCard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MainCard from "@/components/MainCard";
import ProgressCard from "@/components/ProgressCard";
export default function dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <MainCard />
      </div>
    </div>
  );
}
