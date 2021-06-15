import React, { createContext, useState } from "react";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);

  return <LocationContext.Provider>{children}</LocationContext.Provider>;
};
