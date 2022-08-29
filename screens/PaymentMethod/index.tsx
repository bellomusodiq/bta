import { useNavigation } from "@react-navigation/native";
import { Add, Bank, Mobile } from "iconsax-react-native";
import React, { useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const data = Array(4).fill(1);

const PaymentMethodScreen: React.FC<RootStackScreenProps<"PaymentMethod">> = ({
  route,
}) => {
  const navigation = useNavigation();

  const onContinue = () => {
    navigation.navigate("BuyCrypto", {
      payment: {
        title: "MOMO - 2357448434"
      }
    });
  };

  // @ts-ignore-next-line
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <PaymentItem
        title="Emmanuel Kwabena Nkrumah"
        description="ACCESS BANK - 069XXXXXX"
        icon={
          <View style={styles.iconContainer}>
            <Mobile size={RFValue(20)} color="#3861FB" variant="Bold" />
          </View>
        }
        onPress={onContinue}
      />
    </View>
  );

  return (
    <ScreenLayout
      showHeader
      showShadow
      title="Payment method"
      headerRight={
        <TouchableOpacity onPress={() => navigation.navigate("AddPaymentMethod")}>
          <Add color="blue" size={RFValue(24)} />
        </TouchableOpacity>
      }
    >
      <CustomText style={styles.paymentTitle2}>
        Your saved payment methods
      </CustomText>
      <FlatList renderItem={renderItem} data={data} />
    </ScreenLayout>
  );
};

export default PaymentMethodScreen;
