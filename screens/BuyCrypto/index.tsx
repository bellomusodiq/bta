import { useNavigation, useRoute } from "@react-navigation/native";
import { Bank, ReceiptSearch } from "iconsax-react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const BuyCryptoScreen: React.FC<RootStackScreenProps<"BuyCrypto">> = ({
  route,
}) => {
  const navigation = useNavigation();
  const { params } = route;
  const [paymentScreen, setPaymentScreen] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const HeaderRightComponent = (
    <TouchableOpacity>
      <ReceiptSearch size={RFValue(24)} color="#979797" />
    </TouchableOpacity>
  );

  const onContinue = () => {
    navigation.navigate("Summary");
  };
  return (
    <ScreenLayout
      showHeader
      headerRight={HeaderRightComponent}
      scrollable
      showShadow
      title="Buy DOGE"
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={onContinue}
            disabled={!params?.payment?.title}
            style={[
              styles.footerButton,
              {
                backgroundColor: params?.payment?.title ? "#3861FB" : "#979797",
              },
            ]}
          >
            <CustomText style={styles.footerButtonText}>CONTINUE</CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.paymentContainer}>
        <CustomText style={styles.paymentTitle}>I want to pay</CustomText>
        <View style={styles.amountContainer}>
          <TextInput
            defaultValue="0"
            keyboardType="numeric"
            style={styles.input}
          />
          <CustomText style={styles.currency}>GHS</CustomText>
        </View>
      </View>
      <CustomText style={styles.paymentTitle2}>Payment</CustomText>
      {!params?.payment?.title ? (
        <PaymentItem
          title="Choose a payment method"
          description="Debit cards, Mobile money etc..."
          showArror
          icon={
            <View style={styles.iconContainer}>
              <Bank size={RFValue(20)} color="#FFF" variant="Bulk" />
            </View>
          }
          onPress={() => navigation.navigate("PaymentMethod")}
          active={paymentMethod === "payment-method"}
        />
      ) : (
        <PaymentItem
          title={params?.payment?.title}
          description="Tap to change payment"
          icon={
            <View style={styles.iconContainer}>
              <Bank size={RFValue(20)} color="#FFF" variant="Bulk" />
            </View>
          }
          onPress={() => navigation.navigate("PaymentMethod")}
        />
      )}
    </ScreenLayout>
  );
};

export default BuyCryptoScreen;
