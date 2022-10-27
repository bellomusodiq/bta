import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Add, Bank, Mobile } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { buyAccountApi } from "../../api/dashboard.api";
import { paymentAccountApi } from "../../api/profile.api";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const data = Array(4).fill(1);

const PaymentMethodScreen: React.FC<RootStackScreenProps<"PaymentMethod">> = ({
  route,
}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { user } = useAppSelector((state) => state.auth);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [paymentAccounts, setPaymentAccounts] = useState<any>({});

  const onContinue = (item: any) => {
    const newItem = { ...item };
    if (item.name) {
      newItem.accountName = item.name;
      delete newItem.name;
    }
    if (route.params?.fromSummary) {
      navigation.navigate("Summary", {
        ...route.params,
        ...newItem,
      });
    } else {
      navigation.navigate("BuyCrypto", {
        ...route.params,
        ...newItem,
      });
    }
  };

  const getPaymentList = async () => {
    setLoading(true);
    const result = await buyAccountApi(user.token);
    if (result.success) {
      setLoading(false);
      setPaymentAccounts(result.paymentAccounts);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    getPaymentList();
  }, []);

  // @ts-ignore-next-line
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <PaymentItem
        title={item.name}
        description={item.text}
        icon={
          <View style={styles.iconContainer}>
            <Mobile size={RFValue(20)} color="#3861FB" variant="Bold" />
          </View>
        }
        onPress={() => onContinue(item)}
      />
    </View>
  );

  return (
    <ScreenLayout
      showHeader
      showShadow
      title="Payment method"
      headerRight={
        <TouchableOpacity
          onPress={() => navigation.navigate("AddPaymentMethod")}
        >
          <Add color="blue" size={RFValue(24)} />
        </TouchableOpacity>
      }
    >
      {loading || error ? (
        <View style={styles.loadingContainer}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <>
              <CustomText style={styles.errorText}>
                Something went wrong
              </CustomText>
              <CustomButton onPress={getPaymentList}>Try again</CustomButton>
            </>
          )}
        </View>
      ) : (
        <>
          <CustomText style={styles.paymentTitle2}>
            Your saved payment methods
          </CustomText>
          <FlatList renderItem={renderItem} data={paymentAccounts} />
        </>
      )}
    </ScreenLayout>
  );
};

export default PaymentMethodScreen;
