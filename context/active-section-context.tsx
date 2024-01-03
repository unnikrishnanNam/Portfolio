"use client";

import { links } from "@/lib/data";
import React, { useState, createContext, useContext } from "react";

export const activeSectionContext = createContext<{
  activeSection: (typeof links)[number]["name"];
  setActiveSection: React.Dispatch<
    React.SetStateAction<(typeof links)[number]["name"]>
  >;
} | null>(null);
const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] =
    useState<(typeof links)[number]["name"]>("Home");
  return (
    <activeSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </activeSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
  const context = useContext(activeSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
