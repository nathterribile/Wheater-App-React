import { createContext, useState } from "react";

export const CustomerContext = createContext({});

export const CustomerProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  return (
    <CustomerContext.Provider value={{ location, setLocation }}>
      {children}
    </CustomerContext.Provider>
  ) as JSX.Element;
};
