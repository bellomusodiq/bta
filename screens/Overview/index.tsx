import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { loadDashboard } from "../../api/dashboard.api";
import Assets from "../../components/Assets";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import HomeHeader from "../../components/HomeHeader";
import PortfolioCard from "../../components/PortfolioCard";
import SendReceiveBtns from "../../components/SendReceiveBtns";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppDispatch, useAppSelector } from "../../store";
import { setDashboardData } from "../../store/auth.slice";
import { OverviewStackScreenProps } from "../../types";
import styles from "./styles";

const OverviewScreen: React.FC<OverviewStackScreenProps<"Overview">> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const { dashboardData, user } = useAppSelector((state) => state.auth);
  const [error, setError] = useState<string>(false);
  const dispatch = useAppDispatch();

  const getDashboardData = async () => {
    setLoading(true);
    setError(null);
    const result = await loadDashboard(user?.token);
    setLoading(false);
    if (result.success) {
      dispatch(setDashboardData(result));
      setFirstLoad(true);
    } else {
      setError("Something went wrong, Try again!");
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);
  return (
    <ScreenLayout
      scrollable
      canRefresh
      refreshing={loading}
      onRefresh={getDashboardData}
      SafeAreaBackground="#3861FB"
    >
      {loading || error ? (
        <View style={styles.loadingContainer}>
          {loading ? (
            !firstLoad && <ActivityIndicator size="large" />
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
          <Assets />
        </>
      )}
    </ScreenLayout>
  );
};

export default OverviewScreen;
