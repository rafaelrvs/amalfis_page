"use client";
import { useUser } from "@/app/Context/useContext";
import modifyRouter from "@/app/utilits/function/globalFunction";
import React from "react";
import { CiLogout } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function NavigationMenu() {
  const { activeMenu, setActiveMenu } = useUser();

  console.log(activeMenu);
  
  return (
    <div className="bg-primary-gradient-800 h-screen w-[5vw] flex flex-col items-center drop-shadow-lg justify-between">
      <div className="flex flex-col items-center h-[60%] justify-between">
        <img
          src="/image/isotipo amalfis branco.svg"
          alt="logo"
          className="h-15 mt-[20px]"
          onClick={() => modifyRouter("/")}
        />

        <MdHome
          onClick={() => setActiveMenu("home")}
          className={`text-[40px] scale-100 hover:scale-110 duration-300 ease-out ${
            activeMenu === "home" ? "text-amber-500" : ""
          }`}
        />
        <FaBoxOpen
          onClick={() => setActiveMenu("box")}
          className={`text-[40px] scale-100 hover:scale-110 duration-300 ease-out ${
            activeMenu === "box" ? "text-amber-500" : ""
          }`}
        />
        <TfiHeadphoneAlt
          onClick={() => setActiveMenu("headphone")}
          className={`text-[40px] scale-100 hover:scale-110 duration-300 ease-out ${
            activeMenu === "headphone" ? "text-amber-500" : ""
          }`}
        />
        <RxDashboard
          onClick={() => setActiveMenu("dashboard")}
          className={`text-[40px] scale-100 hover:scale-110 duration-300 ease-out ${
            activeMenu === "dashboard" ? "text-amber-500" : ""
          }`}
        />
      </div>
      <CiLogout
        className="text-[40px] scale-100 hover:scale-110 duration-300 ease-out mb-[25px]"
        onClick={() => modifyRouter("/")}
      />
    </div>
  );
}
