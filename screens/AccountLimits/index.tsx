import { Flag2, MedalStar } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { accountLimitsApi } from "../../api/profile.api";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
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

const AccountLimitsScreen: React.FC<RootStackScreenProps<"AccountLimits">> = ({
  navigation,
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const [accountLimits, setAccountLimits] = useState<any>({});

  const getAccountLimits = async () => {
    const result = await accountLimitsApi(navigation, user.token);
    if (result.success) {
      setAccountLimits(result.info);
    }
  };

  useEffect(() => {
    getAccountLimits();
  }, []);

  const getFraction = (limit: number, left: number) => {
    return left / limit;
  };

  return (
    <ScreenLayout scrollable showHeader showShadow title="Account limits">
      <View style={styles.container}>
        <CustomText style={styles.title}>
          Find information about your account limits and restrictions here
        </CustomText>
        <View style={styles.card}>
          <View style={styles.itemContainer}>
            <CustomText style={styles.keyText}>Send crypto</CustomText>
            <CustomText style={styles.valueText}>
              {accountLimits?.cryptoSend}
            </CustomText>
          </View>
          <View style={styles.divider} />
          <View style={styles.itemContainer}>
            <CustomText style={styles.keyText}>Receive crypto</CustomText>
            <CustomText style={styles.valueText}>
              {accountLimits?.cryptoReceive}
            </CustomText>
          </View>
        </View>
        <CustomText style={styles.header}>Buy</CustomText>
        <View style={styles.card}>
          <Limit
            title="Total limit"
            totalAmount={`$${accountLimits?.buyLimit} daily`}
            totalLeft={`$${accountLimits?.buyAvailable?.amount} left`}
            completed={
              getFraction(
                accountLimits?.cryptoSend,
                accountLimits?.buyAvailable?.amount
              ) || 0
            }
          />
          <Limit
            title="USDT limit"
            totalAmount={`$${accountLimits?.usdtBuyLimit} daily`}
            totalLeft={`$${accountLimits?.buyAvailable?.amount} left`}
            completed={
              getFraction(
                accountLimits?.useBuyLimit,
                accountLimits?.buyAvailable?.amount
              ) || 0
            }
            addMargin
          />
        </View>
        <CustomText style={styles.header}>Sell</CustomText>
        <View style={styles.card}>
          <Limit
            title="Total limit"
            totalAmount={`$${accountLimits?.sellLimit} daily`}
            totalLeft={`$${accountLimits?.sellAvailable?.amount} left`}
            completed={
              getFraction(
                accountLimits?.cryptoReceive,
                accountLimits?.sellAvailable?.amount
              ) || 0
            }
          />
          <Limit
            title="USDT limit"
            totalAmount={`$${accountLimits?.usdtSellLimit} daily`}
            totalLeft={`$${accountLimits?.sellAvailable?.amount} left`}
            completed={
              getFraction(
                accountLimits?.usdtSellLimit,
                accountLimits?.sellAvailable?.amount
              ) || 0
            }
            addMargin
          />
        </View>
        <CustomText style={styles.header}>Restrictions</CustomText>
        <View style={styles.card}>
          <View style={styles.softBanHeader}>
            <CustomText style={styles.softBanTitle}>Soft Ban</CustomText>
            <View style={styles.softBanContainer}>
              <CustomText style={styles.softBanText}>
                {accountLimits.softBan ? "Yes" : "No"}
              </CustomText>
            </View>
          </View>
          <CustomText style={styles.softBanDescription}>
            {accountLimits.softBan
              ? "Your account has been restricted, please contact customer care"
              : "No restrictions are placed on your account. Buy, sell, send and receive freely"}
          </CustomText>
        </View>
        <CustomText style={styles.header}>KYC status</CustomText>
        <View style={styles.note}>
          {accountLimits.kycVerified ? (
            <MedalStar size={RFValue(24)} color="#3861FB" />
          ) : (
            <Flag2 size={RFValue(24)} color="#3861FB" />
          )}
          <CustomText style={styles.noteText}>
            {accountLimits.kycVerified
              ? "Your are currently on KYC level 3. this means you have the highest verification badge"
              : "You need to verify kyc"}
          </CustomText>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default AccountLimitsScreen;
