export interface TradeItemProps {
  image: any;
  title: string;
  price: string;
  rate: number;
  onPress?: () => void;
  tradeType?: "buy" | "sell";
}
