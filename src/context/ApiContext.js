import React, { createContext, useState } from "react";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const value = [apiData, setApiData];

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
