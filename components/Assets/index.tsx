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

const AssetItem: React.FC<AssetItemProps> = ({
  title,
  amountCrypto,
  amountUSD,
  image,
  currency,
}) => (
  <>
    <TouchableOpacity style={styles.assetItemContainer}>
      <Image
        source={image}
        style={styles.assetImage}
        resizeMode="contain"
        resizeMethod="scale"
      />
      <View style={styles.nameContainer}>
        <CustomText style={styles.assetTitle}>{title}</CustomText>
        <CustomText style={styles.assetAbbr}>{currency}</CustomText>
      </View>
      <View style={styles.trendContainer}>
        <UpTrendIcon />
      </View>
      <View style={styles.valueContainer}>
        <CustomText style={styles.amount}>${amountUSD}</CustomText>
        <CustomText
          style={styles.amountValue}
        >{`${amountCrypto}${currency}`}</CustomText>
      </View>
    </TouchableOpacity>
    <View style={styles.divider} />
  </>
);

const Assets: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.title}>Assets</CustomText>
          <View style={styles.underline} />
        </View>
        <TouchableOpacity>
          <Setting5 color="black" size={RFValue(20)} />
        </TouchableOpacity>
      </View>
      <AssetItem
        image={BitcoinImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="BTC"
        title="Bitcoin"
      />
      <AssetItem
        image={LTCImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="LTC"
        title="LiteCoin"
      />
      <AssetItem
        image={TronImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="TRX"
        title="Tron"
      />
    </View>
  );
};

export default Assets;
