import React, { useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AssetItem from "../AssetItem";
import { useAppSelector } from "../../store";
import { coinImage } from "../../consts/images";
import { Candle, MoneyArchive, ReceiptText } from "iconsax-react-native";
import UtilityImage from "../../assets/images/utility.png";

const Assets: React.FC = () => {
  const { dashboardData, priceChanges } = useAppSelector((state) => state.auth);

  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState<string>("assets");

  const navigateToDetail = (
    token: string,
    name: string,
    cryptoValue: string,
    usdValue: string,
    marketIdentifier: string,
    marketPrice: string,
    priceChange: number,
    platform: string,
    contract: string
  ) => {
    // @ts-ignore-next-line
    navigation.navigate("AssetDetail", {
      currency: token,
      name,
      cryptoValue,
      usdValue,
      marketIdentifier,
      marketPrice,
      priceChange,
      platform,
      contract,
    });
  };

  const navigateToManageAsset = () => {
    // @ts-ignore-next-line
    navigation.navigate("ManageAsset");
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <TouchableOpacity
            onPress={() => setCurrentTab("assets")}
            style={styles.tabItem}
          >
            <MoneyArchive
              variant="Bold"
              color={currentTab === "assets" ? "#3861FB" : "#979797"}
              size={20}
            />
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
          <TouchableOpacity
            onPress={() => setCurrentTab("utility")}
            style={styles.tabItem}
          >
            <ReceiptText
              variant="Bold"
              color={currentTab === "utility" ? "#3861FB" : "#979797"}
              size={20}
            />
            <CustomText
              style={[
                styles.tabItemText,
                {
                  color: currentTab === "utility" ? "#3861FB" : "#979797",
                },
              ]}
            >
              Utility
            </CustomText>
            {currentTab === "utility" && <View style={styles.tabDivider} />}
          </TouchableOpacity>
          {/* {currentTab === "utility" && ( */}
          <View
            style={[
              styles.tabItem,
              {
                marginLeft: -10,
                backgroundColor: "#FFF9E9",
                alignSelf: "center",
                paddingTop: 4,
                paddingBottom: 4,
                padding: 4,
                borderRadius: 7,
              },
            ]}
          >
            <CustomText
              style={[styles.tabItemText, { color: "#EBB101", fontSize: 12 }]}
            >
              Coming Soon
            </CustomText>
          </View>
          {/* )} */}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ManageAsset")}
          style={styles.settings}
        >
          <Candle color="#3861FB" size={20} variant="Bold" />
        </TouchableOpacity>
      </View>
      {currentTab === "assets" &&
        dashboardData?.currencies?.map((currency: any) => {
          return (
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
                  currency.marketIdentifier,
                  currency.price,
                  priceChanges?.[
                    currency.symbol.toLowerCase()
                  ]?.dailyChange.priceChangePercentage?.toFixed(2),
                  currency.platform,
                  currency.contract
                )
              }
              hideTrend
              tokenPrice={currency.price}
              percentageChange={priceChanges?.[
                currency.symbol.toLowerCase()
              ]?.dailyChange.priceChangePercentage?.toFixed(2)}
            />
          );
        })}
      {currentTab === "utility" && (
        <View style={styles.utilityContainer}>
          <Image
            source={UtilityImage}
            style={styles.image}
            resizeMode="contain"
          />
          <CustomText style={styles.utilityHeader}>
            Paying your bills with crypto just got easier
          </CustomText>
          <CustomText style={styles.utilityText}>
            Buy airtime, pay for cable tv subscriptions, and more with your
            stable coins
          </CustomText>
          <View style={styles.comingSoon}>
            <CustomText style={styles.comingSoonText}>
              Coming soon...
            </CustomText>
          </View>
        </View>
      )}
    </View>
  );
};

export default Assets;
