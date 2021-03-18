import { createContext, ReactNode, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  loading: boolean;
}

export const AppContext = createContext({} as AppContextData);
export function AppProvider({ children }: AppProviderProps) {

  const [loading, setLoading] = useState(false);


  return (
    <AppContext.Provider value={{
      loading
    }}>
      {children}
    </AppContext.Provider>
  )
}

