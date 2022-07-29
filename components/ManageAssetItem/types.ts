export interface ManageAssetItemProps {
  title: string;
  active?: boolean;
  confirmations: number;
  onChangeStatus?: () => void;
  image: any;
}
