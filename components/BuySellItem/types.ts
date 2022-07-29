export interface BuySellItemProps {
  type: "buy" | "sell";
  title: string;
  onPress?: () => void;
}
