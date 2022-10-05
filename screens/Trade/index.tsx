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
import { ActivityIndicator, FlatList, View } from "react-native";
import TradeItem from "../../components/TradeItem";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../store";
import { setDashboardData } from "../../store/auth.slice";
import { loadDashboard } from "../../api/dashboard.api";
import { err } from "react-native-svg/lib/typescript/xml";
import CustomButton from "../../components/CustomButton";

const TAB_DATA: TabItemProps[] = [
  {
    title: "Buy crypto",
  },
  {
    title: "Sell crypto",
  },
];

const coinImage = {
  BTC: BTCImage,
  BCH: BTCImage,
  DOGE: DOGEImage,
  LTC: LTCImage,
  TRX: TRXImage,
  USDT: USDTImage,
};

const TradeScreen: React.FC<TradeStackScreenProps<"Trade">> = ({
  route: { params },
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { dashboardData, user } = useAppSelector((state) => state.auth);
  const [filterData, setFilterData] = useState<any>(
    dashboardData?.currencies || []
  );
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const navigateToBuyOrSell = () => {
    if (currentIndex === 0) {
      navigation.navigate("BuyCrypto");
    } else {
      navigation.navigate("SellCrypto");
    }
  };

  const onSearch = (text: string) => {
    setQuery(text);
    const result = dashboardData?.currencies.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilterData(result);
  };

  useEffect(() => {
    if (params?.tab === "sell") {
      setCurrentIndex(1);
    }
  }, [params]);

  const getDashboardData = async () => {
    setLoading(true);
    setError(null);
    const result = await loadDashboard(user?.token);
    setLoading(false);
    if (result.success) {
      dispatch(setDashboardData(result));
    } else {
      setError("Something went wrong, Try again!");
    }
  };

  useEffect(() => {
    getDashboardData();
  }, [isFocused]);

  return (
    <ScreenLayout>
      <CustomText style={styles.header}>Trade</CustomText>
      <Tab
        tabs={TAB_DATA}
        onTabChange={(index) => setCurrentIndex(index)}
        activeIndex={currentIndex}
      />
      <CustomText style={styles.text}>
        {currentIndex === 0
          ? "Purchase crypto directly from your bank account without limit and restrictions"
          : "Sell your crypto instantly for cash"}
      </CustomText>
      <CustomInput
        icon={<SearchNormal1 size={RFValue(15)} color="#979797" />}
        placeholder="Search for a token"
        value={query}
        onChangeText={onSearch}
      />
      {loading || error ? (
        <View style={styles.loadingContainer}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <>
              <CustomText style={styles.errorText}>
                Something went wrong
              </CustomText>
              <CustomButton onPress={getDashboardData}>Try again</CustomButton>
            </>
          )}
        </View>
      ) : (
        <FlatList
          data={filterData}
          renderItem={({ item }) => (
            <TradeItem
              title={item.name}
              image={coinImage[item.symbol]}
              price={`$${item.price}`}
              rate={currentIndex === 0 ? item.rates.buy : item.rates.sell}
              tradeType={currentIndex === 0 ? "buy" : "sell"}
              onPress={navigateToBuyOrSell}
            />
          )}
          style={styles.tradeItems}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      )}
    </ScreenLayout>
  );
};

export default TradeScreen;
