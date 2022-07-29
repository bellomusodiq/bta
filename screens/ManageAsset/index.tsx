import React from "react";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { OverviewStackScreenProps } from "../../types";
import styles from "./styles";
import BTCImage from "../../assets/images/BTC.png";
import LTCImage from "../../assets/images/LTC.png";
import TRXImage from "../../assets/images/TRX.png";
import { ManageAssetItemProps } from "../../components/ManageAssetItem/types";
import { FlatList, TouchableOpacity } from "react-native";
import ManageAssetItem from "../../components/ManageAssetItem";
import { Trash } from "iconsax-react-native";
import { RFValue } from "react-native-responsive-fontsize";

const data: ManageAssetItemProps[] = [
  {
    title: "Bitcoin (BTC)",
    confirmations: 20,
    image: BTCImage,
  },
  {
    title: "Litecoin (LTC)",
    confirmations: 20,
    image: LTCImage,
  },
  {
    title: "Tron (TRX)",
    confirmations: 20,
    image: TRXImage,
  },
];

const ManageAssetScreen: React.FC<
  OverviewStackScreenProps<"ManageAsset">
> = () => {
  const headerRight = (
    <TouchableOpacity>
      <Trash size={RFValue(24)} color="#292D32" />
    </TouchableOpacity>
  );
  return (
    <ScreenLayout showHeader title="Manage assets" headerRight={headerRight}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ManageAssetItem
            title={item.title}
            confirmations={item.confirmations}
            image={item.image}
          />
        )}
      />
    </ScreenLayout>
  );
};

export default ManageAssetScreen;
