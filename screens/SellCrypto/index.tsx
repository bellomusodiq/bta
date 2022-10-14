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

const SellCryptoScreen: React.FC<RootStackScreenProps<"SellCrypto">> = ({
  route,
}) => {
  const { params } = route;
  // console.log(params);
  const { user } = useAppSelector((state) => state.auth);

  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [currency, setCurrency] = useState<string>(params.symbol);
  const [amount, setAmount] = useState<string>("0");
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
      <ReceiptSearch size={RFValue(24)} color="#979797" />
    </TouchableOpacity>
  );

  const onContinue = () => {
    setPaymentMethod("");
    if (!params?.accountName) {
      navigation.navigate("SelectAccount", params);
    } else {
      validateWithdrawalRequest();
    }
  };

  const disableButton = () => {
    if (params?.accountName) {
      return false;
    }
    return !paymentMethod;
  };

  const setPercentageAmount = (percentage: number) => {
    const value = percentage * Number(params.cryptoValue);
    setAmount(String(value));
  };

  const validateWithdrawalRequest = async () => {
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
    if (result.success) {
      navigation.navigate("Summary", {
        ...result,
        requestData: { ...params, amount, currency },
        sell: true,
      });
    } else {
      Toast.show({
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
      title="Sell DOGE"
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={onContinue}
            disabled={disableButton()}
            style={[
              styles.footerButton,
              {
                backgroundColor: !disableButton() ? "#3861FB" : "#979797",
              },
            ]}
          >
            <CustomText style={styles.footerButtonText}>CONTINUE</CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.paymentContainer}>
        <CustomText style={styles.paymentTitle}>I want to sell</CustomText>
        <View style={styles.amountContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
            <CustomText style={styles.usd}>{currency}</CustomText>
          </View>
          <TouchableOpacity
            onPress={() =>
              setCurrency(currency === "USD" ? params.symbol : "USD")
            }
            style={styles.currencyContainer}
          >
            <CustomText style={styles.currency}>{currency}</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.divider} />
          <View style={styles.balance}>
            <CustomText style={styles.balanceText}>
              <CustomText style={styles.balanceTitle}>Bal:</CustomText>{" "}
              {params.cryptoValue} {params.symbol} (${params.usdValue})
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
          onPress={() => setPaymentMethod("payment-method")}
          active={paymentMethod === "payment-method"}
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
          onPress={() => navigation.navigate("SelectAccount")}
        />
      )}
    </ScreenLayout>
  );
};

export default SellCryptoScreen;
