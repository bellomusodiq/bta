export interface ScreenLayoutProps {
  scrollable?: boolean;
  showHeader?: boolean;
  footer?: JSX.Element;
  removeSafeArea?: boolean;
  canRefresh?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
  SafeAreaBackground?: string;
}
