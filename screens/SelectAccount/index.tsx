import { useNavigation } from "@react-navigation/native";
import { Add, Bank } from "iconsax-react-native";
import React, { useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const data = Array(10).fill(1);

const SelectAccountScreen: React.FC<RootStackScreenProps<"SelectAccount">> = ({
  route,
}) => {
  const navigation = useNavigation();
  const HeaderRightComponent = (
    <TouchableOpacity>
      <Add size={RFValue(24)} color="#3861FB" />
    </TouchableOpacity>
  );

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
        onPress={onContinue}
      />
    </View>
  );

  return (
    <ScreenLayout
      showHeader
      headerRight={HeaderRightComponent}
      showShadow
      title="Select account"
    >
      <CustomText style={styles.paymentTitle2}>
        Select withdrawal account
      </CustomText>
      <FlatList renderItem={renderItem} data={data} />
    </ScreenLayout>
  );
};

export default SelectAccountScreen;
