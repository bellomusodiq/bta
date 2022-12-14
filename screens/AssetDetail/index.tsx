import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AssetDetailHeader from "../../components/AssetDetailHeader";
import CustomText from "../../components/CustomText";
import TrendFilter from "../../components/TrendFilter";
import ScreenLayout from "../../layouts/ScreenLayout";
import { OverviewStackScreenProps } from "../../types";
import styles from "./styles";
import { ArrowRight } from "iconsax-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import MarketStats from "../../components/MarketStats";
import ReactNativeModal from "react-native-modal";
import BuySellItem from "../../components/BuySellItem";
import { LineChart } from "react-native-chart-kit";
import { chartsApi, marketAssetsApi } from "../../api/assets.api";
import { useAppSelector } from "../../store";
import { useNavigation } from "@react-navigation/native";
import { coinImage } from "../../consts/images";
import { width } from "../../consts/dimenentions";

const coinDescription = {
  BTC: "Bitcoin is the first and most widely recognized cryptocurrency. It enables peer-to-peer exchange of value in the digital realm through the use of a decentralized protocol, cryptography, and a mechanism to achieve global consensus on the state of a periodically updated public transaction ledger called a 'blockchain.'",
  BCH: "Bitcoin Cash brings sound money to the world, fulfilling the original promise of Bitcoin as 'Peer-to-Peer Electronic Cash'. Merchants and users are empowered with low fees and reliable confirmations. The future shines brightly with unrestricted growth, global adoption, permissionless innovation, and decentralized development.",
  DOGE: "At its heart, Dogecoin is the accidental crypto movement that makes people smile! It is also an opensource peer-to-peer cryptocurrency that utilises blockchain technology, a highly secure decentralised system of storing information as a public ledger that is maintained by a network of computers called nodes. More than this, though, is the ethos of Dogecoin, summarised in the Dogecoin Manifesto , and its amazing, vibrant community made up of friendly folks just like you!",
  LTC: "Litecoin (LTC) is decentralised money, free from censorship and open to all. Send low cost private, secure, borderless payments to anyone, anytime, anywhere",
  TRX: "TRON is dedicated to accelerating the decentralization of the Internet via blockchain technology and decentralized applications (DApps). Founded in September 2017 by H.E. Justin Sun, the TRON network has continued to deliver impressive achievements since MainNet launch in May 2018. July 2018 also marked the acquisition and the ecosystem integration of BitTorrent, a pioneer in decentralized services boasting nearly 100M monthly active users. The TRON network has gained incredible traction in recent years, with over 114 million users on the blockchain and upwards of 3.9 billion transactions. In addition, TRON hosts the largest circulating supply of stablecoins across the globe, overtaking USDT on Ethereum in April 2021. The TRON network completed full decentralization in Dec 2021 and is now a purely community-governed DAO.",
  USDT: "Launched in 2014, Tether tokens (USD???) pioneered the stablecoin model and are the most widely traded. Tether tokens offer the stability and simplicity of fiat currencies coupled with the innovative nature of blockchain technology, representing a perfect combination of both worlds.",
};

const coinUrl = {
  BTC: "bitcoin.org/en/",
  BCH: "bitcoincash.org",
  DOGE: "dogecoin.com",
  LTC: "litecoin.com",
  TRX: "tron.network",
  USDT: "tether.to/en",
};

const AssetDetailScreen: React.FC<OverviewStackScreenProps<"AssetDetail">> = ({
  route,
}) => {
  console.log(route.params);

  const {
    currency,
    name,
    cryptoValue,
    usdValue,
    marketIdentifier,
    marketPrice,
    priceChange,
    platform,
    contract,
  } = route.params;

  const navigation = useNavigation();
  const { user } = useAppSelector((state) => state.auth);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [chartData, setchartData] = useState<any>([1]);
  const [dailyChart, setDailyChart] = useState<any>(null);
  const [weeklyChart, setMWeeklyChart] = useState<any>(null);
  const [monthlyChart, setMontlyChart] = useState<any>(null);
  const [yearlyChart, setYearlyChart] = useState<any>(null);
  const [marketStats, setMarketStats] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [trend, setTrend] = useState<string>("daily");

  const toggleModal = () => setShowModal(!showModal);

  const getChartData = () => {
    switch (trend) {
      case "daily":
        if (dailyChart) {
          setchartData(dailyChart);
          return;
        }
      case "weekly":
        if (weeklyChart) {
          setchartData(weeklyChart);
          return;
        }
      case "monthly":
        if (monthlyChart) {
          setchartData(monthlyChart);
          return;
        }
      // case "yearly":
      //   if (yearlyChart) {
      //     setchartData(yearlyChart);
      //     return;
      //   }
    }
    setLoading(true);
    setError(false);
    chartsApi(navigation, user.token, trend, currency.toLowerCase()).then(
      (result) => {
        setLoading(false);
        if (result.success) {
          setchartData(result.dataPoints);
          switch (trend) {
            case "daily":
              setDailyChart(result.dataPoints);
              break;
            case "weekly":
              setMWeeklyChart(result.dataPoints);
              break;
            case "monthly":
              setMontlyChart(result.dataPoints);
              break;
            // case "yearly":
            //   setYearlyChart(mappedData);
            //   break;
          }
        } else {
          setError(true);
        }
      }
    );
  };

  const getMarketStats = async () => {
    const result = await marketAssetsApi(marketIdentifier);
    setMarketStats(result);
  };

  useEffect(() => {
    getChartData();
  }, [trend]);

  useEffect(() => {
    getMarketStats();
  }, []);

  const buyCoin = () => {
    navigation.navigate("BuyCrypto", {
      currency,
      name,
      cryptoValue,
      usdValue,
      marketIdentifier,
      marketPrice,
      symbol: currency,
      platform,
      contract,
    });
    setShowModal(false);
  };
  const sellCoin = () => {
    navigation.navigate("SellCrypto", {
      currency,
      name,
      cryptoValue,
      usdValue,
      marketIdentifier,
      marketPrice,
      symbol: currency,
      platform,
      contract,
    });
    setShowModal(false);
  };

  const getCurrentPrice = () => {
    const currentPriceLength = chartData.length;
    if (currentPriceLength === 0) {
      return 0;
    } else {
      return chartData[currentPriceLength - 1].value;
    }
  };

  const toDecimalPlace = (price) => {
    if (currency === "USDT") {
      return Number.parseFloat(price).toFixed(2);
    }
    if (currency === "BTC") {
      return Number.parseFloat(price).toFixed(5);
    }
    return Number.parseFloat(price).toFixed(3);
  };

  const openWebsite = () => {
    navigation.navigate("WebView", { url: `https://${coinUrl[currency]}` });
  };

  return (
    <ScreenLayout removeSafeArea scrollable>
      <AssetDetailHeader title={`${name} (${currency})`} />
      <View style={styles.currentPriceContainer}>
        <CustomText style={styles.currentPriceTitle}>Current price</CustomText>
        <View style={{ flexDirection: "row" }}>
          <CustomText style={styles.currentPrice}>
            ${Number.parseFloat(marketPrice).toFixed(2)}
          </CustomText>
          <CustomText
            style={[
              styles.currentPrice,
              {
                fontSize: 16,
                paddingLeft: 5,
                color: priceChange < 0 ? "#FF5C5C" : "#25D366",
                alignSelf: "flex-end",
                marginTop: 5,
              },
            ]}
          >
            {priceChange >= 0 ? "+" : ""}
            {priceChange}%
          </CustomText>
        </View>
      </View>
      {/* <TrendChart /> */}
      <View style={styles.graphContainer}>
        {loading ? (
          <View style={styles.graphLoadingContainer}>
            <ActivityIndicator size="small" />
          </View>
        ) : (
          <LineChart
            data={{
              // labels: [],
              datasets: [
                {
                  data: chartData,
                },
              ],
            }}
            width={width(1)} // from react-native
            height={250}
            withVerticalLabels={false}
            yAxisInterval={1} // optional, defaults to 1
            withInnerLines={false}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `#3861FB`,
              labelColor: (opacity = 1) => `black`,
              style: {
                // borderRadius: 16,
              },
              propsForDots: {
                r: "0",
              },
            }}
            bezier
            style={{
              paddingHorizontal: 5,
              justifyContent: "flex-end",
              paddingVertical: 0,
              zIndex: 3,
              marginBottom: -30,
            }}
          />
        )}
      </View>
      <TrendFilter onSetTrend={(trend) => setTrend(trend)} />
      <View style={styles.coinBalanceContainer}>
        <Image source={coinImage[currency]} style={styles.coinImage} />
        <View style={styles.titleContainer}>
          <CustomText style={styles.coinTitle}>{name}</CustomText>
          <CustomText style={styles.coinAbbr}>{currency}</CustomText>
        </View>
        <View style={styles.balanceContainer}>
          <CustomText style={styles.balanceAmount}>${usdValue}</CustomText>
          <CustomText style={styles.balanceCurrency}>
            {toDecimalPlace(cryptoValue)} {currency}
          </CustomText>
        </View>
      </View>
      <TouchableOpacity onPress={toggleModal} style={styles.buySellButton}>
        <CustomText style={styles.buySellButtonText}>
          Buy or Sell {name}
        </CustomText>
      </TouchableOpacity>
      <MarketStats marketStats={marketStats} website={coinUrl[currency]} />

      <CustomText style={styles.aboutTitle}>About</CustomText>
      <CustomText style={styles.aboutDescription}>
        {coinDescription[currency]}
      </CustomText>
      <TouchableOpacity onPress={openWebsite} style={styles.websiteButton}>
        <CustomText style={styles.websiteButtonText}>Visit website</CustomText>
        <ArrowRight size={RFValue(20)} color="#3861FB" variant="Outline" />
      </TouchableOpacity>
      <ReactNativeModal
        isVisible={showModal}
        // backdropOpacity={0.4}
        // customBackdrop={
        //   <TouchableWithoutFeedback onPress={toggleModal}>
        //     <View style={styles.backDrop} />
        //   </TouchableWithoutFeedback>
        // }
        swipeDirection={["down"]}
        onSwipeComplete={toggleModal}
        style={styles.modal}
        // useNativeDriver
      >
        <View style={styles.modalContainer}>
          <View style={styles.indicator} />
          <View style={styles.modalBalanceContainer}>
            <Image source={coinImage[currency]} style={styles.coinImage} />
            <View style={styles.titleContainer}>
              <CustomText style={styles.coinTitle}>{name}</CustomText>
              <CustomText style={styles.coinAbbr}>
                {Number(marketPrice).toFixed(2)}
              </CustomText>
            </View>
            <View style={styles.balanceContainer}>
              <CustomText style={styles.balanceAmount}>${usdValue}</CustomText>
              <CustomText style={styles.balanceCurrency}>
                {toDecimalPlace(cryptoValue)} {currency}
              </CustomText>
            </View>
          </View>
          <BuySellItem onPress={buyCoin} type="buy" title={name} />
          <BuySellItem onPress={sellCoin} type="sell" title={name} />
          <CustomText style={styles.footerText}>
            Crypto market prices are highly volatile and so market prices are
            quoted every 60 seconds
          </CustomText>
        </View>
      </ReactNativeModal>
    </ScreenLayout>
  );
};

export default AssetDetailScreen;
