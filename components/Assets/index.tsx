import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AssetItem from "../AssetItem";
import { useAppSelector } from "../../store";
import { coinImage } from "../../consts/images";

const Assets: React.FC = () => {
  const { dashboardData } = useAppSelector((state) => state.auth);
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState<string>("assets");

  const navigateToDetail = (
    token: string,
    name: string,
    cryptoValue: string,
    usdValue: string,
    marketIdentifier: string
  ) => {
    // @ts-ignore-next-line
    navigation.navigate("AssetDetail", {
      currency: token,
      name,
      cryptoValue,
      usdValue,
      marketIdentifier,
    });
  };

  const navigateToManageAsset = () => {
    // @ts-ignore-next-line
    navigation.navigate("ManageAsset");
  };

  // console.log(dashboardData?.currencies);
  return (
    <View style={styles.container}>
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
      </View>
      {dashboardData?.currencies
        ?.filter((currency: any) => currency.enabled)
        .map((currency: any) => (
          <AssetItem
            key={currency.symbol}
            image={coinImage[currency.symbol]}
            amountUSD={currency.usdValue}
            amountCrypto={currency.cryptoValue}
            currency={currency.symbol}
            title={currency.name}
            onPress={() =>
              navigateToDetail(
                currency.symbol,
                currency.name,
                currency.cryptoValue,
                currency.usdValue,
                currency.marketIdentifier
              )
            }
            hideTrend
            tokenPrice={currency.price}
            percentageChange={15.6}
          />
        ))}
    </View>
  );
};

export default Assets;
