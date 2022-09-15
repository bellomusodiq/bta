import { useNavigation } from "@react-navigation/native";
import { Bank, ReceiptSearch } from "iconsax-react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const SellCryptoScreen: React.FC<RootStackScreenProps<"SellCrypto">> = ({
  route,
}) => {
  const { params } = route;
  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [currency, setCurrency] = useState<string>("DOGE");
  // navigate to Histor > sell tab, sorting by only token
  const HeaderRightComponent = (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Root", {
          screen: "History",
          token: "DOGE",
        })
      }
    >
      <ReceiptSearch size={RFValue(24)} color="#979797" />
    </TouchableOpacity>
  );

  const onContinue = () => {
    setPaymentMethod("");
    if (!params?.accountNumber) {
      navigation.navigate("SelectAccount");
    } else {
      navigation.navigate("Summary", {
        sell: true,
      });
    }
  };

  const disableButton = () => {
    if (params?.accountName) {
      return false;
    }
    return !paymentMethod;
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
              defaultValue="0"
              keyboardType="numeric"
              style={styles.input}
            />
            <CustomText style={styles.usd}>{currency}</CustomText>
          </View>
          <TouchableOpacity
            onPress={() => setCurrency(currency === "USD" ? "DOGE" : "USD")}
            style={styles.currencyContainer}
          >
            <CustomText style={styles.currency}>{currency}</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.divider} />
          <View style={styles.balance}>
            <CustomText style={styles.balanceText}>
              <CustomText style={styles.balanceTitle}>Bal:</CustomText> 120.89
              DOGE ($100.65)
            </CustomText>
          </View>
          <View style={styles.divider} />
        </View>
        <View style={styles.percentageContainer}>
          <TouchableOpacity style={styles.percentage}>
            <CustomText style={styles.percentageText}>10%</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.percentage}>
            <CustomText style={styles.percentageText}>25%</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.percentage}>
            <CustomText style={styles.percentageText}>50%</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.percentage}>
            <CustomText style={styles.percentageText}>75%</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.percentage}>
            <CustomText style={styles.percentageText}>max</CustomText>
          </TouchableOpacity>
        </View>
      </View>
      <CustomText style={styles.paymentTitle2}>
        {params?.accountName ? "Withdrawal account" : "Payment"}
      </CustomText>
      {!params?.accountNumber ? (
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
          title="ACCESSGH - 0692XXXXX"
          description="Tap to change withdrawal bank"
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
