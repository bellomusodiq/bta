import { useNavigation, useRoute } from "@react-navigation/native";
import { Bank, ReceiptSearch } from "iconsax-react-native";
import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { reviewBuyOrderApi } from "../../api/profile.api";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import Toast from "react-native-toast-message";

const BuyCryptoScreen: React.FC<RootStackScreenProps<"BuyCrypto">> = ({
  route,
}) => {
  const navigation = useNavigation();
  const { user } = useAppSelector((state) => state.auth);
  const { params } = route;

  const [paymentScreen, setPaymentScreen] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // filter only token histories in the history page
  const HeaderRightComponent = (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Root", { screen: "History", token: "DOGE" })
      }
    >
      <ReceiptSearch size={RFValue(24)} color="#979797" />
    </TouchableOpacity>
  );

  const topUpSummary = async () => {
    setLoading(true);
    const result = await reviewBuyOrderApi(
      user.token,
      params.symbol,
      params.name,
      "manual",
      params.platform,
      params.contract,
      amount,
      params.value,
      params.id.toString()
    );
    setLoading(false);
    if (result.success) {
      navigation.navigate("Summary", {
        ...result,
        sell: false,
      });
    } else {
      Toast.show({
        autoHide: true,
        visibilityTime: 7000,
        type: "error",
        text1: result.message,
      });
    }
  };

  const disabled = !params?.name || !params?.accountName || !amount;
  return (
    <ScreenLayout
      showHeader
      headerRight={HeaderRightComponent}
      scrollable
      showShadow
      title={`Buy ${params.symbol}`}
      footer={
        <View style={styles.footer}>
          <CustomButton
            loading={loading}
            onPress={topUpSummary}
            disabled={disabled}
            style={styles.footerButton}
          >
            <CustomText style={styles.footerButtonText}>CONTINUE</CustomText>
          </CustomButton>
        </View>
      }
    >
      <View style={styles.paymentContainer}>
        <CustomText style={styles.paymentTitle}>I want to pay</CustomText>
        <View style={styles.amountContainer}>
          <TextInput
            placeholder="0"
            keyboardType="numeric"
            style={styles.input}
            value={amount}
            placeholderTextColor="gray"
            onChangeText={(value) => setAmount(value)}
          />
          <CustomText style={styles.currency}>GHS</CustomText>
        </View>
      </View>
      <CustomText style={styles.paymentTitle2}>Pay with</CustomText>
      {!params?.accountName ? (
        <PaymentItem
          title="Choose a payment method"
          description="Debit cards, Mobile money etc..."
          showArror
          icon={
            <View style={styles.iconContainer}>
              <Bank size={RFValue(20)} color="#FFF" variant="Bulk" />
            </View>
          }
          onPress={() =>
            navigation.navigate("PaymentMethod", {
              ...params,
            })
          }
          active={paymentMethod === "payment-method"}
        />
      ) : (
        <PaymentItem
          title={params?.accountName}
          description={params.text}
          icon={
            <View style={styles.iconContainer}>
              <Bank size={RFValue(20)} color="#FFF" variant="Bulk" />
            </View>
          }
          onPress={() => navigation.navigate("PaymentMethod", { ...params })}
        />
      )}
    </ScreenLayout>
  );
};

export default BuyCryptoScreen;
