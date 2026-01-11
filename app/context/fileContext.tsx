"use client";

import { createContext, useContext, useState } from "react";
import type { PdfData } from "../types/pdfTypes";

type PdfContextType = {
  file: File | null;
  setFile: (file: File | null) => void;
  text: PdfData[] | undefined;
  setText: (text: PdfData[]) => void;
};

const PdfContext = createContext<PdfContextType | undefined>(undefined);

export function PdfProvider({ children }: { children: React.ReactNode }) {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<PdfData[]>();


  return (
    <PdfContext.Provider
      value={{
        file,
        setFile,
        text,
        setText,
      }}
    >
      {children}
    </PdfContext.Provider>
  );
}

export function usePdf() {
  const context = useContext(PdfContext);
  if (!context) {
    throw new Error("usePdf must be used within PdfProvider");
  }
  return context;
}
