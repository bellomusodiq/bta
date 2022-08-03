export interface HistoryItemProps {
  title: string;
  type?: "in" | "out";
  token: string;
  usdAmount: string;
  date: string;
  tokenAmount: number;
  onPress?: () => void;
}
