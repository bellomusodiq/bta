import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import BitcoinImage from "../../assets/images/BTC.png";
import { DocumentCopy, Flag2, Timer, Timer1 } from "iconsax-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

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
> = () => {
  const navigation = useNavigation();
  const onContinue = () => {
    // @ts-ignore-next-line
    navigation.replace("Root");
  };
  return (
    <ScreenLayout
      showHeader
      showShadow
      scrollable
      title="Send bitcoin"
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={onContinue}
            // disabled={!Boolean(paymentMethod)}
            style={[
              styles.footerButton,
              {
                backgroundColor: "#3861FB",
              },
            ]}
          >
            <CustomText style={styles.footerButtonText}>CONTINUE</CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <CustomText style={styles.sendingText}>You are sending</CustomText>
      <CustomText style={styles.tokenText}>0.9226 BTC</CustomText>
      <View style={styles.marketStatsContainer}>
        <CryptoItem
          title="Pay with"
          value={
            <View style={styles.tokenContainer}>
              <Image source={BitcoinImage} style={styles.tokenImage} />
              <CustomText style={styles.tokenTitle}>BTC Wallet</CustomText>
            </View>
          }
        />
        <CryptoItem
          title="To"
          value={
            <View style={styles.tokenContainer}>
              <TouchableOpacity>
                <DocumentCopy size={24} color="#292D32" />
              </TouchableOpacity>
              <CustomText style={styles.token}>bc1quke47...wmkfa8m</CustomText>
            </View>
          }
        />
        <CryptoItem
          title="Network fee"
          value={<CustomText style={styles.fee}>$1.23</CustomText>}
        />
        <CryptoItem
          title="Total"
          value={<CustomText style={styles.total}>$12,560.87</CustomText>}
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
