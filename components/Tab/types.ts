export interface TabItemProps {
  title: string;
  active?: boolean;
  onPress?: () => void;
}

export interface TabProps {
  activeIndex: number;
  onTabChange: (index: number) => void;
  tabs: TabItemProps[];
}
