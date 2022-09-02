import { SearchNormal1 } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import Tab from "../../components/Tab";
import { TabItemProps } from "../../components/Tab/types";
import { TradeItemProps } from "../../components/TradeItem/types";
import ScreenLayout from "../../layouts/ScreenLayout";
import { TradeStackScreenProps } from "../../types";
import styles from "./styles";
import BTCImage from "../../assets/images/BTC.png";
import LTCImage from "../../assets/images/LTC.png";
import TRXImage from "../../assets/images/TRX.png";
import DOGEImage from "../../assets/images/DOGE.png";
import USDTImage from "../../assets/images/USDT.png";
import { FlatList, View } from "react-native";
import TradeItem from "../../components/TradeItem";
import { useNavigation } from "@react-navigation/native";

const TAB_DATA: TabItemProps[] = [
  {
    title: "Buy crypto",
  },
  {
    title: "Sell crypto",
  },
];

const TRADE_ITEMS: TradeItemProps[] = [
  {
    title: "Bitcoin",
    price: "$20,750.89",
    rate: 8.2,
    image: BTCImage,
  },
  {
    title: "Doge",
    price: "$0.06",
    rate: 8.2,
    image: DOGEImage,
  },
  {
    title: "Litecoin",
    price: "$50.45",
    rate: 8.2,
    image: LTCImage,
  },
  {
    title: "Tron",
    price: "$0.06",
    rate: 8.2,
    image: TRXImage,
  },
  {
    title: "Tether",
    price: "$1",
    rate: 8.2,
    image: USDTImage,
  },
];

const TradeScreen: React.FC<TradeStackScreenProps<"Trade">> = ({
  route: { params },
}) => {
  const [curerntIndex, setCurrentIndex] = useState<number>(0);
  const navigation = useNavigation();

  const navigateToBuyOrSell = () => {
    if (curerntIndex === 0) {
      navigation.navigate("BuyCrypto");
    } else {
      navigation.navigate("SellCrypto");
    }
  };

  useEffect(() => {
    if (params?.tab === "sell") {
      setCurrentIndex(1);
    }
  }, [params]);
  return (
    <ScreenLayout>
      <CustomText style={styles.header}>Trade</CustomText>
      <Tab
        tabs={TAB_DATA}
        onTabChange={(index) => setCurrentIndex(index)}
        activeIndex={curerntIndex}
      />
      <CustomText style={styles.text}>
        {curerntIndex === 0
          ? "Purchase crypto directly from your bank account without limit and restrictions"
          : "Sell your crypto instantly for cash"}
      </CustomText>
      <CustomInput
        icon={<SearchNormal1 size={RFValue(15)} color="#979797" />}
        placeholder="Search for a token"
      />
      <FlatList
        data={TRADE_ITEMS}
        renderItem={({ item }) => (
          <TradeItem
            title={item.title}
            image={item.image}
            price={item.price}
            rate={item.rate}
            tradeType={curerntIndex === 0 ? "buy" : "sell"}
            onPress={navigateToBuyOrSell}
          />
        )}
        style={styles.tradeItems}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </ScreenLayout>
  );
};

export default TradeScreen;
