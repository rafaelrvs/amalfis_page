"use client";
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserContextType {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserContextProvider");
  }
  return context;
};

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  // Define "home" como botão ativo inicialmente (pode ser o que preferir)
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <UserContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </UserContext.Provider>
  );
}
