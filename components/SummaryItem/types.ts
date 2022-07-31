export interface SummaryItemProps {
  title: string;
  value: string;
  onClick?: () => void;
  valueBold?: boolean;
  noDivider?: boolean;
  onClickInfo?: () => void;
}
