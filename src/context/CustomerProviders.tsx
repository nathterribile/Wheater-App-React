
import { createContext, useState } from 'react';

export const CustomerContext = createContext({});

interface weatherForecastProps{
  current: {
    condition:{
      text: string,
      icon: string,
    },
    temp_c:number;
  },

  location:{
    name:string,
  }
}

export function CustomerProvider ({ children }:any) {
  const [location, setLocation] = useState<weatherForecastProps>();

  return (
    <CustomerContext.Provider value={{ location, setLocation }}>
      {children}
    </CustomerContext.Provider>
  ) as JSX.Element;
}
