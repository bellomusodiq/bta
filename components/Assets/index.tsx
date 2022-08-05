import { Setting5 } from "iconsax-react-native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import UpTrendIcon from "../icons/uptrend-icon";
import styles from "./styles";
import { AssetItemProps } from "./types";
import BitcoinImage from "../../assets/images/BTC.png";
import LTCImage from "../../assets/images/LTC.png";
import TronImage from "../../assets/images/TRX.png";
import { useNavigation } from "@react-navigation/native";
import AssetItem from "../AssetItem";

const Assets: React.FC = () => {
  const navigation = useNavigation();

  const navigateToDetail = () => {
    // @ts-ignore-next-line
    navigation.navigate("AssetDetail");
  };

  const navigateToManageAsset = () => {
    // @ts-ignore-next-line
    navigation.navigate("ManageAsset");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.title}>Assets</CustomText>
          <View style={styles.underline} />
        </View>
        <TouchableOpacity onPress={navigateToManageAsset}>
          <Setting5 color="black" size={RFValue(20)} />
        </TouchableOpacity>
      </View>
      <AssetItem
        image={BitcoinImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="BTC"
        title="Bitcoin"
        onPress={navigateToDetail}
      />
      <AssetItem
        image={LTCImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="LTC"
        title="LiteCoin"
        onPress={navigateToDetail}
      />
      <AssetItem
        image={TronImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="TRX"
        title="Tron"
        onPress={navigateToDetail}
      />
    </View>
  );
};

export default Assets;
