import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import AssetDetailHeader from "../../components/AssetDetailHeader";
import CustomText from "../../components/CustomText";
import TrendChart from "../../components/TrendChart";
import TrendFilter from "../../components/TrendFilter";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import TronImage from "../../assets/images/TRX.png";
import { ArrowRight } from "iconsax-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import MarketStats from "../../components/MarketStats";

const AssetDetailScreen: React.FC<RootStackScreenProps<"AssetDetail">> = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  return (
    <ScreenLayout scrollable>
      <AssetDetailHeader />
      <View style={styles.currentPriceContainer}>
        <CustomText style={styles.currentPriceTitle}>Current price</CustomText>
        <CustomText style={styles.currentPrice}>$20.55</CustomText>
      </View>
      <TrendChart />
      <TrendFilter />
      <View style={styles.coinBalanceContainer}>
        <Image source={TronImage} style={styles.coinImage} />
        <View style={styles.titleContainer}>
          <CustomText style={styles.coinTitle}>Tron</CustomText>
          <CustomText style={styles.coinAbbr}>TRX</CustomText>
        </View>
        <View style={styles.balanceContainer}>
          <CustomText style={styles.balanceAmount}>$100.50</CustomText>
          <CustomText style={styles.balanceCurrency}>
            You have 1505TRX
          </CustomText>
        </View>
      </View>
      <TouchableOpacity style={styles.buySellButton}>
        <CustomText style={styles.buySellButtonText}>
          Buy or Sell Tron
        </CustomText>
      </TouchableOpacity>
      <CustomText style={styles.aboutTitle}>About</CustomText>
      <CustomText style={styles.aboutDescription}>
        Tron is decentralized open source blockchain based operating system with
        smart contract functionality, proof of stake princples as it c..
      </CustomText>
      <TouchableOpacity style={styles.websiteButton}>
        <CustomText style={styles.websiteButtonText}>Visit website</CustomText>
        <ArrowRight size={RFValue(20)} color="#3861FB" variant="Outline" />
      </TouchableOpacity>
      <MarketStats />
    </ScreenLayout>
  );
};

export default AssetDetailScreen;
