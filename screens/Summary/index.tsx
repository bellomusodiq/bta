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

const SummaryScreen: React.FC<RootStackScreenProps<"Summary">> = () => {
  const navigation = useNavigation();

  const navigateToPayInstruction = () => {
    navigation.navigate("PayInstruction");
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
            <CustomText style={styles.footerButtonText}>BUY</CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <CustomText style={styles.title}>You are buying</CustomText>
      <CustomText style={styles.token}>1200.22 DOGE</CustomText>
      <View style={styles.summaryItem}>
        <SummaryItem title="DOGE Price" value="$0.06" />
        <SummaryItem
          title="Payment"
          value="Momo (233553610084) >"
          onClick={() => {}}
        />
        <SummaryItem title="Buy rate per dollar" value="GHS 8.15" />
        <SummaryItem title="USD amount" value="USD 120.34" />
        <SummaryItem title="TOTAL" value="GHS 100" valueBold noDivider />
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
