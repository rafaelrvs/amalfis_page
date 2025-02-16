"use client"
import { useUser } from "@/app/Context/useContext";
import modifyRouter from "@/app/utilits/function/globalFunction";
import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TfiHeadphoneAlt } from "react-icons/tfi";


export default function NavigationMenu() {
    const { chamadosAtivos,setChamadoAtivo } = useUser();

    function activeChamados(){
        setChamadoAtivo(!chamadosAtivos)
       
        
      } 
    

  return (
    <div className="bg-primary-gradient-800 h-screen w-[100px] flex flex-col items-center drop-shadow-lg justify-between">
      <div className="flex flex-col items-center h-[60%] justify-between">
        <img
          src="/image/isotipo amalfis branco.svg"
          alt="logo"
          className="h-20 mt-[20px]"
        />

        <MdHome className="text-[50px] scale-100 hover:scale-110 duration-300 ease-out" />
        <FaBoxOpen className="text-[50px] scale-100 hover:scale-110 duration-300 ease-out" />
        <TfiHeadphoneAlt className="text-[50px] scale-100 hover:scale-110 duration-300 ease-out" onClick={activeChamados}/>
        <RxDashboard className="text-[50px] scale-100 hover:scale-110 duration-300 ease-out" />
      </div>
      <CiLogout className="text-[50px] scale-100 hover:scale-110 duration-300 ease-out mb-[25px]" onClick={()=>{modifyRouter("/")}} />
    </div>
  );
}
