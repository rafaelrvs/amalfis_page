"use client"
import { useEffect } from "react";
import { useUser } from "../Context/useContext";
import NavigationMenu from "./../nav/navigationMenu/navigationMenu";


export default function GestaoDeChamados() {
  const { chamadosAtivos,setChamadoAtivo } = useUser();
 
  return (
    <div>
      <NavigationMenu />
      {chamadosAtivos&&<div className="h-[50vh] w-[90vw] bg-black z-index-4 top-[10vh] right-[2vw] fixed">teste</div>}
    </div>
  );
}
