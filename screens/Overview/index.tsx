import React from "react";
import { View } from "react-native";
import Assets from "../../components/Assets";
import CustomText from "../../components/CustomText";
import HomeHeader from "../../components/HomeHeader";
import PortfolioCard from "../../components/PortfolioCard";
import SendReceiveBtns from "../../components/SendReceiveBtns";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootTabScreenProps } from "../../types";
import styles from "./styles";

const OverviewScreen: React.FC<RootTabScreenProps<"Overview">> = () => {
  return (
    <ScreenLayout scrollable>
      <HomeHeader name="Emmanuel" />
      <PortfolioCard balance={100.5} />
      <SendReceiveBtns />
      <Assets />
    </ScreenLayout>
  );
};

export default OverviewScreen;
