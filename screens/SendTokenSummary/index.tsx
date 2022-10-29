import React, { useState } from "react";
import { Image, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import { DocumentCopy, Flag2, Timer1 } from "iconsax-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { coinImage } from "../../consts/images";
import Copy from "../../components/Copy";
import CustomButton from "../../components/CustomButton";
import { sendCryptoApi } from "../../api/profile.api";
import { useAppSelector } from "../../store";
import Toast from "react-native-toast-message";

const CryptoItem: React.FC<{
  title: string;
  value: JSX.Element;
  noDivider?: boolean;
  isTotal?: boolean;
}> = ({ title, value, noDivider }) => (
  <View style={styles.marketStatsItemContainer}>
    <View style={styles.marketStatsItem}>
      <CustomText style={styles.marketStatsItemTitle}>{title}</CustomText>
      <View style={styles.value}>{value}</View>
    </View>
    {!noDivider && <View style={styles.divider} />}
  </View>
);

const SendTokenSummaryScreen: React.FC<
  RootStackScreenProps<"SendTokenSummary">
> = ({ route }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.auth);
  const { params } = route;
  // console.log(params)

  const navigation = useNavigation();
  const onContinue = async () => {
    // @ts-ignore-next-line
    setLoading(true);
    const result = await sendCryptoApi(
      user.token,
      params.preview.cryptoSymbol,
      params.preview.to,
      params.transmissionMode,
      params.transmissionMode === "USD"
        ? params.preview.usdAmount
        : params.preview.cryptoAmount,
      params.preview.coinName,
      params.preview.selectedNetworkFee,
      params.contract,
      params.platform,
      params.preview.eTag
    );
    setLoading(false);
    if (result.success) {
      let navigateRoute = "Pending";
      if (result.t?.status === "success") {
        navigateRoute = "Complete";
      }
      if (result.t?.status === "failed") {
        navigateRoute = "Failed";
      }
      navigation.navigate(navigateRoute);
    } else {
      Toast.snow({
        type: "error",
        text1: result.message,
      });
    }
  };
  return (
    <ScreenLayout
      showHeader
      showShadow
      scrollable
      title={`Send ${params.preview.coinName}`}
      footer={
        <View style={styles.footer}>
          <CustomButton
            loading={loading}
            onPress={onContinue}
            disabled={loading}
            style={[
              styles.footerButton,
              {
                backgroundColor: "#3861FB",
              },
            ]}
          >
            <CustomText style={styles.footerButtonText}>CONTINUE</CustomText>
          </CustomButton>
        </View>
      }
    >
      <CustomText style={styles.sendingText}>You are sending</CustomText>
      <CustomText style={styles.tokenText}>
        {params.preview.cryptoAmount} {params.preview.cryptoSymbol}
      </CustomText>
      <View style={styles.marketStatsContainer}>
        <CryptoItem
          title="Pay with"
          value={
            <View style={styles.tokenContainer}>
              <Image
                source={coinImage[params.preview.cryptoSymbol]}
                style={styles.tokenImage}
              />
              <CustomText style={styles.tokenTitle}>
                {params.preview.cryptoSymbol} Wallet
              </CustomText>
            </View>
          }
        />
        <CryptoItem
          title="To"
          value={
            <View style={styles.tokenContainer}>
              <Copy text={params.preview.to}>
                <DocumentCopy size={24} color="#292D32" />
              </Copy>
              <CustomText style={styles.token}>
                {`${params.preview.to.slice(0, 15)}${
                  params.preview.to.length > 15 ? "..." : ""
                }`}
              </CustomText>
            </View>
          }
        />
        <CryptoItem
          title="Network fee"
          value={
            <CustomText style={styles.fee}>
              ${params.preview.networkFeeUSD}
            </CustomText>
          }
        />
        <CryptoItem
          title="Total"
          value={
            <CustomText style={styles.total}>
              ${params.preview.totalChargeUSD}
            </CustomText>
          }
          noDivider
        />
      </View>
      <View style={styles.timerContainer}>
        <Timer1 color="#3861FB" size={RFValue(20)} />
        <CustomText style={styles.timerText}>
          Average processing time: 3 minutes
        </CustomText>
      </View>
      <View style={styles.note}>
        <Flag2 size={RFValue(24)} color="#3861FB" />
        <CustomText style={styles.noteText}>
          Check recipent address properly, assets sent to wrong addresses cannot
          be recovered.
        </CustomText>
      </View>
    </ScreenLayout>
  );
};

export default SendTokenSummaryScreen;
