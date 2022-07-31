import { useNavigation } from "@react-navigation/native";
import { Flag2 } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import SummaryItem from "../../components/SummaryItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const SummaryScreen: React.FC<RootStackScreenProps<"Summary">> = ({
  route,
}) => {
  const navigation = useNavigation();
  const { params } = route;

  const navigateToPayInstruction = () => {
    if (!params.sell) {
      navigation.navigate("PayInstruction");
    } else {
      navigation.navigate("Complete");
    }
  };
  return (
    <ScreenLayout
      scrollable
      showHeader
      showShadow
      title="Summary"
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={navigateToPayInstruction}
            style={styles.footerButton}
          >
            <CustomText style={styles.footerButtonText}>
              {!params.sell ? "BUY" : "SELL $20.54"}
            </CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <CustomText style={styles.title}>
        You are {!params.sell ? "buying" : "selling"}
      </CustomText>
      <CustomText style={styles.token}>1200.22 DOGE</CustomText>
      <View style={styles.summaryItem}>
        <SummaryItem title="DOGE Price" value="$0.06" />
        {!params.sell ? (
          <>
            <SummaryItem
              title="Payment"
              value="Momo (233553610084) >"
              onClick={() => {}}
            />
            <SummaryItem title="Buy rate per dollar" value="GHS 8.15" />
            <SummaryItem title="USD amount" value="USD 120.34" />
          </>
        ) : (
          <>
            <SummaryItem title="Sell rate" value="GHS 7.91 per dollar" />
            <SummaryItem title="You receive" value="GHS 52.25" />
            <SummaryItem
              title="Our charge"
              value="1.4%"
              onClickInfo={() => {}}
            />
            <SummaryItem
              title="Withdrawal bank"
              value="ACCESSGH - 0692XX."
              onClick={() => {}}
            />
            <SummaryItem title="Transaction date" value="Fri Jul 15, 2022." />
          </>
        )}
        <SummaryItem
          title="TOTAL"
          value={!params.sell ? "GHS 100" : "$20.57"}
          valueBold
          noDivider
        />
      </View>
    </ScreenLayout>
  );
};

export default SummaryScreen;
