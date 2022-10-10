import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Add, Bank } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { buyAccountApi } from "../../api/profile.api";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const data = Array(10).fill(1);

const SelectAccountScreen: React.FC<RootStackScreenProps<"SelectAccount">> = ({
  route,
}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { user } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [paymentAccounts, setPaymentAccounts] = useState<any>([]);

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
        title={item.name}
        description={item.text}
        icon={
          <View style={styles.iconContainer}>
            <Bank size={RFValue(20)} color="#3861FB" variant="Bulk" />
          </View>
        }
        onPress={() => onContinue(item)}
      />
    </View>
  );

  const fetchPaymentDetails = async () => {
    setLoading(true);
    setError(false);
    const result = await buyAccountApi(user.token);
    setLoading(false);
    if (result.success) {
      setPaymentAccounts(result.paymentAccounts);
    }
  };

  useEffect(() => {
    fetchPaymentDetails();
  }, [isFocused]);

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
      <FlatList renderItem={renderItem} data={paymentAccounts} />
    </ScreenLayout>
  );
};

export default SelectAccountScreen;
