import { Setting5 } from "iconsax-react-native";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import UpTrendIcon from "../icons/uptrend-icon";
import styles from "./styles";
import { AssetItemProps } from "./types";
import BitcoinImage from "../../assets/images/BTC.png";
import LTCImage from "../../assets/images/LTC.png";
import TronImage from "../../assets/images/TRX.png";
import USDTImage from "../../assets/images/USDT.png";
import { useNavigation } from "@react-navigation/native";
import AssetItem from "../AssetItem";

const Assets: React.FC = () => {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState<string>("assets");

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
      {/* <View style={styles.header}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.title}>Portfolio</CustomText>
          <View style={styles.underline} />
        </View>
        <TouchableOpacity onPress={navigateToManageAsset}>
          <Setting5 color="black" size={RFValue(20)} />
        </TouchableOpacity>
      </View> */}
      <View style={styles.tab}>
        <TouchableOpacity
          onPress={() => setCurrentTab("assets")}
          style={styles.tabItem}
        >
          <CustomText
            style={[
              styles.tabItemText,
              {
                color: currentTab === "assets" ? "#3861FB" : "#979797",
              },
            ]}
          >
            Assets
          </CustomText>
          {currentTab === "assets" && <View style={styles.tabDivider} />}
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => setCurrentTab("nfts")}
          style={styles.tabItem}
        >
          <CustomText
            style={[
              styles.tabItemText,
              {
                color: currentTab === "nfts" ? "#3861FB" : "#979797",
              },
            ]}
          >
            NFTs
          </CustomText>
          {currentTab === "nfts" && <View style={styles.tabDivider} />}
        </TouchableOpacity> */}
      </View>
      <AssetItem
        image={BitcoinImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="BTC"
        title="Bitcoin"
        onPress={navigateToDetail}
        hideTrend
        tokenPrice="$52,596.87"
        percentageChange={15.6}
      />
      <AssetItem
        image={LTCImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="LTC"
        title="Litecoin"
        onPress={navigateToDetail}
        hideTrend
        tokenPrice="$150.76"
        percentageChange={15.6}
      />
      <AssetItem
        image={TronImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="TRX"
        title="Tron"
        onPress={navigateToDetail}
        hideTrend
        tokenPrice="$0.91"
        percentageChange={-2.5}
      />
      <AssetItem
        image={USDTImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="USDT"
        title="USDT"
        onPress={navigateToDetail}
        hideTrend
        tokenPrice="$0.99"
        percentageChange={0.0}
      />
    </View>
  );
};

export default Assets;
