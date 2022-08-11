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

const PaymentAccountsScreen: React.FC<
  RootStackScreenProps<"PaymentAccounts">
> = ({ route }) => {
  const navigation = useNavigation();

  const onContinue = () => {
    navigation.navigate("SellCrypto", {
      accountName: "Kwabena",
      accountNumber: "00333423324",
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
            <Bank size={RFValue(20)} color="#3861FB" variant="Bulk" />
          </View>
        }
        // onPress={onContinue}
      />
    </View>
  );

  return (
    <ScreenLayout showHeader showShadow title="Payment accounts">
      <CustomText style={styles.paymentTitle2}>
        Add bank accounts or mobile money account for payments. You can add up
        to to 5 payment accounts
      </CustomText>
      <View style={styles.accountContainer}>
        <PaymentItem
          title="Add Mobile money"
          description="MTN momo"
          icon={
            <View style={styles.iconContainer}>
              <Mobile size={RFValue(20)} color="#3861FB" variant="Bold" />
            </View>
          }
          onPress={() => navigation.navigate("AddMobileMoney")}
        />
      </View>
      <PaymentItem
        title="Add Bank Account"
        description="Select bank"
        icon={
          <View style={styles.iconContainer}>
            <Bank size={RFValue(20)} color="#3861FB" variant="Bulk" />
          </View>
        }
        onPress={() => navigation.navigate("AddBankAccount")}
      />
      <View style={styles.dividerFull} />
      <CustomText style={styles.paymentTitle2}>
        Your saved payment methods
      </CustomText>
      <FlatList renderItem={renderItem} data={data} />
    </ScreenLayout>
  );
};

export default PaymentAccountsScreen;
