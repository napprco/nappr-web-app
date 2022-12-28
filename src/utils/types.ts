export interface AppContextProps {
  isMobileMenu: boolean;
  isUserAccount: boolean;
  handleShowMobileMenu: () => void;
  handleShowUserAccount: () => void;
}
export interface ButtonProps {
  text: string;
}
export interface BackButtonProps {
  page: string;
}

export interface ProviderProps {
  children: React.ReactNode;
}
export interface SubscriptionSuccessfulProps {
  handleCloseModal: () => void;
}

export interface PaymentOptionsProps {
  handleClosePaymentModal: () => void;
}
// export interface NapprFooterProps {
//   imageSource: string;
// }
