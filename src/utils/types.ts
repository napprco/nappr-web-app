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

export interface CardDetailsProps {
  handleCloseCardDetailsModal: () => void;
}

export interface FormBackButtonProps {
  handleDecrementStep: () => void;
}
// export interface NapprFooterProps {
//   imageSource: string;
// }

export interface FirstStepInputType {
  email: string;
  username: string;
}
export interface SecondStepInputType {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
}

export interface ThirdStepInputType {
  purpose: string;
  password: string;
  confirmPassword: string;
}

export interface FirstStepProps {
  firstStepFormData: FirstStepInputType;
  setFirstStepFormData: React.Dispatch<React.SetStateAction<FirstStepInputType>>;
}
export interface SecondStepProps {
  secondStepFormData: SecondStepInputType;
  setSecondStepFormData: React.Dispatch<React.SetStateAction<SecondStepInputType>>;
}

export interface ThirdStepProps {
  thirdStepFormData: ThirdStepInputType;
  setThirdStepFormData: React.Dispatch<React.SetStateAction<ThirdStepInputType>>;
}
