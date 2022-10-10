import { useNavigation } from "@react-navigation/native";
import { ArrowRight2, Flag2 } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { reviewBuyOrderApi } from "../../api/profile.api";
import CustomText from "../../components/CustomText";
import SummaryItem from "../../components/SummaryItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const SummaryScreen: React.FC<RootStackScreenProps<"Summary">> = ({
  route,
}) => {
  const navigation = useNavigation();
  const { params } = route;
  const { user } = useAppSelector((state) => state.auth);

  // console.log(params);

  const navigateToPayInstruction = () => {
    if (!params?.sell) {
      navigation.navigate("PayInstruction", params);
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
              {!params?.sell ? "BUY" : "SELL $20.54"}
            </CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <CustomText style={styles.title}>
        You are {!params?.sell ? "buying" : "selling"}
      </CustomText>
      <CustomText style={styles.token}>{params.amountCrypto}</CustomText>
      <View style={styles.summaryItem}>
        <SummaryItem
          title={params.summary[0].name}
          value={params.summary[0].value}
        />
        {!params?.sell ? (
          <>
            <SummaryItem
              title={params.summary[1].name}
              componentValue={
                <View style={styles.buttonTextContainer}>
                  <CustomText style={styles.buttonText}>
                    {params.summary[1].value}
                  </CustomText>
                  <ArrowRight2 size={16} />
                </View>
              }
              onClick={() => {}}
            />
            <SummaryItem
              title={params.summary[2].name}
              value={params.summary[2].value}
            />
            <SummaryItem
              title={params.summary[3].name}
              value={params.summary[3].value}
            />
            <SummaryItem
              title={params.summary[4].name}
              value={params.summary[4].value}
            />
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
          value={!params?.sell ? params.total : "$20.57"}
          valueBold
          noDivider
        />
      </View>
      <View style={styles.note}>
        <Flag2 size={RFValue(24)} color="#3861FB" />
        <CustomText style={styles.noteText}>
          Kindly follow all the outlined steps in the next page accordingly to
          complete your purchase
        </CustomText>
      </View>
    </ScreenLayout>
  );
};

export default SummaryScreen;
