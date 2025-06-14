import React, { createContext, useContext } from "react";

const SegmentContext = createContext();

export const SegmentContextProvider = ({ children }) => {
  const [segmentModal, setSegmentModal] = React.useState(false);
  return (
    <SegmentContext.Provider value={{ segmentModal, setSegmentModal }}>
      {children}
    </SegmentContext.Provider>
  );
};

export const useSegmentContext = () => useContext(SegmentContext);
