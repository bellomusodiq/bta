import { useNavigation } from "@react-navigation/native";
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
  const { user } = useAppSelector((state) => state.auth);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [paymentAccounts, setPaymentAccounts] = useState<any>({});

  const onContinue = (item: any) => {
    const newItem = { ...item, ...route.params };
    if (item.name) {
      newItem.accountName = item.name;
      delete newItem.name;
      newItem.text = item.text;
      newItem.id = item.id;
    }
    if (route.params?.fromSummary) {
      const index = newItem.summary.findIndex(
        (i) => i.name === "Payment Method"
      );
      newItem.summary[index].value = `Momo (${item.text})`;
      navigation.navigate("Summary", newItem);
    } else {
      navigation.navigate("BuyCrypto", {
        ...route.params,
        ...newItem,
      });
    }
  };

  const getPaymentList = async () => {
    setLoading(true);
    const result = await buyAccountApi(navigation, user.token);
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
            {item.value === "momo" ? (
              <Mobile size={RFValue(20)} color="#3861FB" variant="Bold" />
            ) : (
              <Bank size={RFValue(20)} color="#3861FB" variant="Bold" />
            )}
          </View>
        }
        onPress={() => onContinue(item)}
      />
    </View>
  );

  let flatList = null;
  if (paymentAccounts.length === 0) {
    flatList = (
      <View style={styles.container}>
        <CustomText style={styles.emptyText}>
          You have no saved payment method
        </CustomText>
        <CustomText style={styles.emptyText}>
          click on the + icon to add a payment method
        </CustomText>
      </View>
    );
  } else {
    flatList = (
      <>
        <CustomText style={styles.paymentTitle2}>
          Your saved payment methods
        </CustomText>
        <FlatList renderItem={renderItem} data={paymentAccounts} />
      </>
    );
  }

  return (
    <ScreenLayout
      showHeader
      showShadow
      title="Payment method"
      SafeAreaBackground="#3861FB"
      headerRight={
        <TouchableOpacity
          onPress={() => navigation.navigate("AddPaymentMethod")}
        >
          <Add color="white" size={RFValue(24)} />
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
        flatList
      )}
    </ScreenLayout>
  );
};

export default PaymentMethodScreen;
