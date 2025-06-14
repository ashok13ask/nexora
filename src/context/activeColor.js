import React, { createContext, useContext } from "react";

const ActiveColorContext = createContext();

export const ActiveColorProvider = ({ children }) => {
  const [activeColor, setActiveColor] = React.useState("blue");

  let ActiveThemeColor =
    activeColor === "green"
      ? "success"
      : activeColor === "red"
      ? "danger"
      : activeColor === "orange"
      ? "warning"
      : activeColor === "blue"
      ? "info"
      : activeColor === "primary"
      ? "primary"
      : "info";
  return (
    <ActiveColorContext.Provider
      value={{ activeColor, setActiveColor, ActiveThemeColor }}
    >
      {children}
    </ActiveColorContext.Provider>
  );
};

export const useActiveColor = () => useContext(ActiveColorContext);
