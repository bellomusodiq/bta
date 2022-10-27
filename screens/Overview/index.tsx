import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { loadDashboard } from "../../api/dashboard.api";
import Assets from "../../components/Assets";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import HomeHeader from "../../components/HomeHeader";
import PortfolioCard from "../../components/PortfolioCard";
import SendReceiveBtns from "../../components/SendReceiveBtns";
import { height } from "../../consts/dimenentions";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppDispatch, useAppSelector } from "../../store";
import { setDashboardData } from "../../store/auth.slice";
import { OverviewStackScreenProps } from "../../types";
import { logoutHandler } from "../../utils/logout";
import styles from "./styles";

const OverviewScreen: React.FC<OverviewStackScreenProps<"Overview">> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { dashboardData, user } = useAppSelector((state) => state.auth);
  const [error, setError] = useState<string>(false);
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

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
  }, []);
  return (
    <ScreenLayout scrollable>
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
        <>
          <HomeHeader name={user.firstName} />
          <PortfolioCard balance={dashboardData?.totalPortfolio} />
          <SendReceiveBtns />
          <Assets />
        </>
      )}
    </ScreenLayout>
  );
};

export default OverviewScreen;
