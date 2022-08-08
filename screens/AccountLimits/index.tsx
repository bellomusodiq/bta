import { MedalStar } from "iconsax-react-native";
import React from "react";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const Limit: React.FC<{
  title: string;
  totalAmount: string;
  totalLeft: string;
  completed: number;
  addMargin?: boolean;
}> = ({ title, totalAmount, totalLeft, completed, addMargin }) => (
  <View
    style={[styles.limitContainer, { marginTop: addMargin ? RFValue(24) : 0 }]}
  >
    <CustomText style={styles.limitTitle}>{title}</CustomText>
    <View style={styles.progress}>
      <View style={[styles.completed, { flex: completed }]} />
    </View>
    <View style={styles.limitTexts}>
      <CustomText style={styles.totalAmount}>{totalAmount}</CustomText>
      <CustomText style={styles.totalLeft}>{totalLeft}</CustomText>
    </View>
  </View>
);

const AccountLimitsScreen: React.FC<
  RootStackScreenProps<"AccountLimits">
> = () => {
  return (
    <ScreenLayout scrollable showHeader showShadow title="Account limits">
      <View style={styles.container}>
        <CustomText style={styles.title}>
          Find information about your account limits and restrictions here
        </CustomText>
        <View style={styles.card}>
          <View style={styles.itemContainer}>
            <CustomText style={styles.keyText}>Send crypto</CustomText>
            <CustomText style={styles.valueText}>Unlimied</CustomText>
          </View>
          <View style={styles.divider} />
          <View style={styles.itemContainer}>
            <CustomText style={styles.keyText}>Receive crypto</CustomText>
            <CustomText style={styles.valueText}>Unlimied</CustomText>
          </View>
        </View>
        <CustomText style={styles.header}>Buy</CustomText>
        <View style={styles.card}>
          <Limit
            title="Total limit"
            totalAmount="$1,000 daily"
            totalLeft="$800 left"
            completed={0.25}
          />
          <Limit
            title="USDT limit"
            totalAmount="$2,000 daily"
            totalLeft="$1,800 left"
            completed={0.15}
            addMargin
          />
        </View>
        <CustomText style={styles.header}>Sell</CustomText>
        <View style={styles.card}>
          <Limit
            title="Total limit"
            totalAmount="$100,000 daily"
            totalLeft="$100,000 left"
            completed={0}
          />
          <Limit
            title="USDT limit"
            totalAmount="$10,000,000 daily"
            totalLeft="$10,000,000 left"
            completed={0}
            addMargin
          />
        </View>
        <CustomText style={styles.header}>Restrictions</CustomText>
        <View style={styles.card}>
          <View style={styles.softBanHeader}>
            <CustomText style={styles.softBanTitle}>Soft Ban</CustomText>
            <View style={styles.softBanContainer}>
              <CustomText style={styles.softBanText}>NO</CustomText>
            </View>
          </View>
          <CustomText style={styles.softBanDescription}>
            No restrictions are placed on your account. Buy, sell, send and
            receive freely
          </CustomText>
        </View>
        <CustomText style={styles.header}>KYC status</CustomText>
        <View style={styles.note}>
          <MedalStar size={RFValue(24)} color="#3861FB" />
          <CustomText style={styles.noteText}>
            Your are currently on KYC level 3. this means you have the highest
            verification badge
          </CustomText>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default AccountLimitsScreen;
