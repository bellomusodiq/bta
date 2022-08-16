export interface PaymentItemProps {
  title: string;
  icon: JSX.Element;
  description?: string;
  onPress?: () => void;
  showArror?: boolean;
  active?: boolean;
  invertedIcon?: boolean;
}
