import { createContext, useState } from 'react';

import { AppContextProps, ProviderProps } from '../utils/types';

export const AppContext = createContext({} as AppContextProps);

export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  const [isUserAccount, setIsUserAccount] = useState<boolean>(false);
  const handleShowMobileMenu = () => setIsMobileMenu(!isMobileMenu);
  const handleShowUserAccount = () => setIsUserAccount(!isUserAccount);
  return (
    <AppContext.Provider
      value={{
        isMobileMenu,
        isUserAccount,
        handleShowMobileMenu,
        handleShowUserAccount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
