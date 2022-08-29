import { useNavigation } from "@react-navigation/native";
import { Add, Bank, Card, Mobile } from "iconsax-react-native";
import React, { useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const data = Array(1).fill(1);

const AddPaymentMethodScreen: React.FC<
  RootStackScreenProps<"AddPaymentMethod">
> = ({ route }) => {
  const navigation = useNavigation();

  const onContinue = () => {
    navigation.navigate("BuyCrypto", {
      payment: {
        title: "MOMO - 2357448434",
      },
    });
  };

  return (
    <ScreenLayout
      showHeader
      showShadow
      title="Add payment method"
    >
      <CustomText style={styles.paymentTitle2}>
        Available payment providers
      </CustomText>
      <PaymentItem
        title="Mobile money"
        description="MTN momo"
        icon={
          <View style={styles.iconContainer}>
            <Mobile size={RFValue(20)} color="#FFFFFF" variant="Bold" />
          </View>
        }
        onPress={() =>
          navigation.navigate("AddMobileMoney", {
            from: "payment-method`",
          })
        }
        showArror
      />
      <CustomText style={styles.paymentTitle2}>
        Other payment providers
      </CustomText>
      <PaymentItem
        title="Pay with card"
        description="Debit cards, cred.."
        icon={
          <View style={[styles.iconContainer, { backgroundColor: "#F0F0F0" }]}>
            <Card size={RFValue(20)} color="#979797" variant="Bulk" />
          </View>
        }
        unavailable
      />
      <View style={styles.margin} />
      <PaymentItem
        title="Pay with bank"
        description="AccessGH, Stand..."
        icon={
          <View style={[styles.iconContainer, { backgroundColor: "#F0F0F0" }]}>
            <Bank size={RFValue(20)} color="#979797" variant="Bulk" />
          </View>
        }
        unavailable
      />
    </ScreenLayout>
  );
};

export default AddPaymentMethodScreen;
