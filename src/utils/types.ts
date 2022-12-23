export interface AppContextProps {
  isMobileMenu: boolean;
  handleShowMobileMenu: () => void;
}

export interface ProviderProps {
  children: React.ReactNode;
}

export interface NapprFooterProps {
  imageSource: string;
}