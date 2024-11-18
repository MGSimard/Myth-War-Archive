"use client";

import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";

type FilterContextType = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState("");

  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("The filter context must be utilized within the FilterContext Provider.");
  }
  return context;
}
