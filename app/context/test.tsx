// app/providers/AppContext.tsx
"use client"

import React, { createContext, useContext, useState } from "react"

type AppContextType = {
  count: number
  increment: () => void
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <AppContext.Provider
      value={{
        count,
        increment: () => setCount(c => c + 1),
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error("useAppContext must be used inside AppProvider")
  return ctx
}
