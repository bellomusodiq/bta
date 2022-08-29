export interface AssetItemProps {
  image: any;
  title: string;
  currency: string;
  amountUSD: number;
  amountCrypto: number;
  onPress?: () => void;
  hideTrend?: boolean;
  showArrow?: boolean;
  percentageChange?: number;
  tokenPrice?: string;
  noPercentage?: boolean;
}
