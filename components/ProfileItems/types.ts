export interface ProfileItemProps {
  icon: JSX.Element;
  title: string;
  isToggle?: boolean;
  active?: boolean;
  onPress?: () => void;
  onToggle?: () => void;
  lastItem?: boolean;
  firstItem?: boolean;
}

export interface ProfileItemsProps {
  data: ProfileItemProps[];
  title: string;
}
