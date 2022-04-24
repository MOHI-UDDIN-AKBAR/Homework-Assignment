import React, { createContext, useContext, useState } from "react";
const context = createContext();
const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return <context.Provider value={{ isLoading }}>{children}</context.Provider>;
};
export default Context;
export const useContextResult = () => useContext(context);
