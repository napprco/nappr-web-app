import { createContext, useState } from 'react';

import { AppContextProps, ProviderProps } from '../utils/types';

export const AppContext = createContext({} as AppContextProps);

export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);

  const handleShowMobileMenu = () => setIsMobileMenu(!isMobileMenu);
  return (
    <AppContext.Provider
      value={{
        isMobileMenu,
        handleShowMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
