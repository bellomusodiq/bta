import { useNavigation } from "@react-navigation/native";
import { Bank, ReceiptSearch } from "iconsax-react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { validateWithdrawalRequestApi } from "../../api/profile.api";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import Toast from "react-native-toast-message";
import CustomButton from "../../components/CustomButton";

const SellCryptoScreen: React.FC<RootStackScreenProps<"SellCrypto">> = ({
  route,
}) => {
  const { params } = route;
  const { user } = useAppSelector((state) => state.auth);

  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [currency, setCurrency] = useState<string>(params.symbol);
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>("");
  // navigate to Histor > sell tab, sorting by only token
  const HeaderRightComponent = (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Root", {
          screen: "History",
          token: params.symbol,
        })
      }
    >
      <ReceiptSearch size={RFValue(24)} color="white" />
    </TouchableOpacity>
  );

  const onContinue = () => {
    setPaymentMethod("");
    validateWithdrawalRequest();
  };

  const disableButton = () => {
    if (params?.accountName && +amount > 0) {
      return false;
    }
    return true;
  };

  const setPercentageAmount = (percentage: number) => {
    const value =
      percentage *
      Number(currency === "USD" ? params.usdValue : params.cryptoValue);
    setAmount(String(value));
  };

  const parseAmount = (amount: string) => {
    if (params.symbol === "BTC") {
      return Number(amount).toFixed(5);
    }
    if (params.symbol === "USDT") {
      return Number(amount).toFixed(2);
    }
    return Number(amount).toFixed(3);
  };

  const validateWithdrawalRequest = async () => {
    setLoading(true);
    const result = await validateWithdrawalRequestApi(
      user.token,
      params.symbol,
      params.name,
      currency === params.symbol ? "CRYPTO" : "USD",
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
        requestData: { ...params, amount, currency },
        sell: true,
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
  return (
    <ScreenLayout
      showHeader
      headerRight={HeaderRightComponent}
      scrollable
      showShadow
      title={`Sell ${params.symbol}`}
      footer={
        <View style={styles.footer}>
          <CustomButton
            loading={loading}
            onPress={onContinue}
            disabled={disableButton()}
            style={styles.footerButton}
          >
            <CustomText style={styles.footerButtonText}>CONTINUE</CustomText>
          </CustomButton>
        </View>
      }
    >
      <View style={styles.paymentContainer}>
        <CustomText style={styles.paymentTitle}>I want to sell</CustomText>
        <View style={styles.amountContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="gray"
              style={styles.input}
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
            <CustomText style={styles.usd}>{currency}</CustomText>
          </View>
          <TouchableOpacity
            onPress={() => {
              setCurrency(currency !== "USD" ? "USD" : params.symbol);
              setAmount("");
            }}
            style={styles.currencyContainer}
          >
            <CustomText style={styles.currency}>
              {currency === "USD" ? params.symbol : "USD"}
            </CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.divider} />
          <View style={styles.balance}>
            <CustomText style={styles.balanceText}>
              <CustomText style={styles.balanceTitle}>Bal:</CustomText>{" "}
              {parseAmount(params.cryptoValue)} {params.symbol} ($
              {Number(params.usdValue).toFixed(2)})
            </CustomText>
          </View>
          <View style={styles.divider} />
        </View>
        <View style={styles.percentageContainer}>
          <TouchableOpacity
            onPress={() => setPercentageAmount(0.1)}
            style={styles.percentage}
          >
            <CustomText style={styles.percentageText}>10%</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPercentageAmount(0.25)}
            style={styles.percentage}
          >
            <CustomText style={styles.percentageText}>25%</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPercentageAmount(0.5)}
            style={styles.percentage}
          >
            <CustomText style={styles.percentageText}>50%</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPercentageAmount(0.75)}
            style={styles.percentage}
          >
            <CustomText style={styles.percentageText}>75%</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPercentageAmount(1)}
            style={styles.percentage}
          >
            <CustomText style={styles.percentageText}>max</CustomText>
          </TouchableOpacity>
        </View>
      </View>
      <CustomText style={styles.paymentTitle2}>
        {params?.accountName ? "Withdrawal account" : "Payment"}
      </CustomText>
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
          onPress={() => navigation.navigate("SelectAccount", params)}
          // active={paymentMethod === "payment-method"}
        />
      ) : (
        <PaymentItem
          title={params.accountName}
          description={params.text}
          icon={
            <View style={styles.iconContainer}>
              <Bank size={RFValue(20)} color="#FFF" variant="Bulk" />
            </View>
          }
          onPress={() => navigation.navigate("SelectAccount", params)}
        />
      )}
    </ScreenLayout>
  );
};

export default SellCryptoScreen;
