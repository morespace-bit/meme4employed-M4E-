"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ViewContextType {
  view: string;
  setView: (view: string) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState("foryou");
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

// creating a custom hook to consume the context

export function useView() {
  const context = useContext(ViewContext);
  // this error happens if this custom hook is tried to be called out side the children of the viewprovider because

  // that there is no context it cannot be accesed
  if (!context) throw new Error("userView must be used inside ViewProvider");

  return context;
}
