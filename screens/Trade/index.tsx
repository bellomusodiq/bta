import { SearchNormal1 } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import Tab from "../../components/Tab";
import { TabItemProps } from "../../components/Tab/types";
import ScreenLayout from "../../layouts/ScreenLayout";
import { TradeStackScreenProps } from "../../types";
import styles from "./styles";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from "react-native";
import TradeItem from "../../components/TradeItem";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../store";
import { setDashboardData } from "../../store/auth.slice";
import { loadDashboard } from "../../api/dashboard.api";
import CustomButton from "../../components/CustomButton";
import { coinImage } from "../../consts/images";
import Toast from "react-native-toast-message";

const TAB_DATA: TabItemProps[] = [
  {
    title: "Buy crypto",
  },
  {
    title: "Sell crypto",
  },
];

const TradeScreen: React.FC<TradeStackScreenProps<"Trade">> = ({
  route: { params },
}) => {
  const isFocused = useIsFocused();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { dashboardData, user } = useAppSelector((state) => state.auth);
  const [filterData, setFilterData] = useState<any>(
    dashboardData?.currencies || []
  );

  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const navigateToBuyOrSell = (item) => {
    if (!item.enabled) {
      Toast.show({
        autoHide: true,
        visibilityTime: 7000,
        type: "error",
        text1:
          "This token has not been enabled, navigate to manage asset to enable token",
      });
      return;
    }
    console.log(JSON.stringify(item, null, 2));

    if (currentIndex === 0) {
      navigation.navigate("BuyCrypto", item);
    } else {
      navigation.navigate("SellCrypto", item);
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
    const result = await loadDashboard(navigation, user?.token);
    setLoading(false);
    if (result.success) {
      dispatch(setDashboardData(result));
    } else {
      setError("Something went wrong, Try again!");
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <ScreenLayout noPadding>
      <View style={styles.headerContainer}>
        <CustomText style={styles.header}>Trade</CustomText>
      </View>
      <View style={styles.tabContainer}>
        <Tab
          tabs={TAB_DATA}
          onTabChange={(index) => setCurrentIndex(index)}
          activeIndex={currentIndex}
        />
      </View>
      <CustomText style={styles.text}>
        {currentIndex === 0
          ? "Purchase crypto using your saved payment method"
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
          refreshControl={
            <RefreshControl onRefresh={getDashboardData} refreshing={loading} />
          }
          data={filterData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TradeItem
              title={item.name}
              image={coinImage[item.symbol]}
              price={`$${Number(item.usdValue).toFixed(2)}`}
              rate={currentIndex === 0 ? item.rates.buy : item.rates.sell}
              tradeType={currentIndex === 0 ? "buy" : "sell"}
              onPress={() => navigateToBuyOrSell(item)}
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
