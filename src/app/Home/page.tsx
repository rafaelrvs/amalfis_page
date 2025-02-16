"use client";
import { useEffect } from "react";
import { useUser } from "../Context/useContext";
import NavigationMenu from "./../nav/navigationMenu/navigationMenu";
import NavigationChamados from './../nav/navigationChamados/navigationChamados';


export default function GestaoDeChamados() {
  const { chamadosAtivos, setChamadoAtivo } = useUser();

  return (
    <div className="flex">
      <NavigationMenu />
      {
      chamadosAtivos&&
      
      <NavigationChamados/>
      }
      
    
    </div>
  );
}
