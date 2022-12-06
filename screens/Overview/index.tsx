import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { getPriceChanges, loadDashboard } from "../../api/dashboard.api";
import Assets from "../../components/Assets";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import HomeHeader from "../../components/HomeHeader";
import PortfolioCard from "../../components/PortfolioCard";
import SendReceiveBtns from "../../components/SendReceiveBtns";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppDispatch, useAppSelector } from "../../store";
import { setDashboardData, setPriceChanges } from "../../store/auth.slice";
import { OverviewStackScreenProps } from "../../types";
import styles from "./styles";

const OverviewScreen: React.FC<OverviewStackScreenProps<"Overview">> = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [loading, setLoading] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const { dashboardData, user, priceChanges } = useAppSelector(
    (state) => state.auth
  );
  const [error, setError] = useState<boolean>(false);
  const [fetchPriceChanges, setFetchPriceChanges] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const getDashboardData = async () => {
    setLoading(true);
    setError(null);
    const result = await loadDashboard(navigation, user.token);
    setLoading(false);
    if (result.success) {
      dispatch(setDashboardData(result));
      setFirstLoad(true);
    } else {
      setError("Something went wrong, Try again!");
    }
  };

  const getPriceChangesData = async () => {
    const currencies = "btc,ltc,usdt,bch,trx,doge";
    const result = await getPriceChanges(user.token, currencies);
    if (result.success) {
      dispatch(setPriceChanges(result.extras));
    }
  };

  useEffect(() => {
    getPriceChangesData();
    getDashboardData();
  }, []);

  return (
    <ScreenLayout
      scrollable
      canRefresh
      refreshing={loading}
      onRefresh={getDashboardData}
      SafeAreaBackground="#3861FB"
      noPadding
    >
      {(loading && !firstLoad) || error ? (
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
        <>
          <View style={styles.headerContainer}>
            <HomeHeader name={user.firstName} />
            <PortfolioCard balance={dashboardData?.totalPortfolio} />
            <SendReceiveBtns />
          </View>
          <View style={styles.assetContainer}>
            <Assets />
          </View>
        </>
      )}
    </ScreenLayout>
  );
};

export default OverviewScreen;
