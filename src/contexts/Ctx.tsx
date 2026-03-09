import React, { createContext, useState, ReactNode } from "react";

// Definição dos tipos para o Contexto
export interface ContextProps {
  palpites: number[][];
  setPalpites: React.Dispatch<React.SetStateAction<number[][]>>;
}

interface ChildrenProps {
  children: ReactNode;
}

// Criação do contexto
export const LetterContext = createContext<ContextProps | null>(null);

// Provedor que envolve a aplicação
export function LetterProvider({ children }: ChildrenProps) {
  const [palpites, setPalpites] = useState<number[][]>([]);

  return (
    <LetterContext.Provider value={{ palpites, setPalpites }}>
      {children}
    </LetterContext.Provider>
  );
}
