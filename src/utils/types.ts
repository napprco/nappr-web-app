export interface AppContextProps {
  isMobileMenu: boolean;
  isUserAccount: boolean;
  handleShowMobileMenu: () => void;
  handleShowUserAccount: () => void;
}
export interface ButtonProps {
  text: string;
}

export interface ProviderProps {
  children: React.ReactNode;
}

// export interface NapprFooterProps {
//   imageSource: string;
// }
