"use client";
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Definição da interface do contexto
interface UserContextType {
  chamadosAtivos: boolean;
  setChamadoAtivo: Dispatch<SetStateAction<boolean>>;
}

// Criando o contexto
const UserContext = createContext<UserContextType | null>(null);

// Hook personalizado para acessar o contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserContextProvider");
  }
  return context;
};

// Provedor do contexto
interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [chamadosAtivos, setChamadoAtivo] = useState(false);

  return (
    <UserContext.Provider value={{ chamadosAtivos, setChamadoAtivo }}>
      {children}
    </UserContext.Provider>
  );
}
