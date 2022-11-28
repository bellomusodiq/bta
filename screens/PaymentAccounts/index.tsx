import { useNavigation } from "@react-navigation/native";
import { Bank, Mobile } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  paymentAccountApi,
  paymentAccountPlatformsApi,
} from "../../api/profile.api";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const data = Array(4).fill(1);

const PaymentAccountsScreen: React.FC<
  RootStackScreenProps<"PaymentAccounts">
> = ({ route }) => {
  const { user } = useAppSelector((state) => state.auth);
  const navigation = useNavigation();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [paymentAccounts, setPaymentAccounts] = useState<any>([]);
  const [paymentPlatforms, setPaymentPlatforms] = useState<any>([]);

  const onContinue = () => {
    navigation.navigate("SellCrypto", {
      accountName: "Kwabena",
      accountNumber: "00333423324",
    });
  };

  // @ts-ignore-next-line
  const renderItem = (item, i) => (
    <View key={i} style={styles.itemContainer}>
      <PaymentItem
        title={item.nameOnAccount}
        description={`${item.networkCode} - ${item.number}`}
        icon={
          <View style={styles.iconContainer}>
            {item.type === "Mobile Money" ? (
              <Mobile size={RFValue(20)} color="#3861FB" variant="Bold" />
            ) : (
              <Bank size={RFValue(20)} color="#3861FB" variant="Bulk" />
            )}
          </View>
        }
        // onPress={onContinue}
      />
    </View>
  );

  const getPaymentList = async () => {
    const result = await paymentAccountApi(navigation, user.token);
    if (result.success) {
      setLoading(false);
      setPaymentAccounts(result.info);
    } else {
      setError(true);
    }
  };

  const getPaymentPlatforms = async () => {
    const result = await paymentAccountPlatformsApi(navigation, user.token);
    if (result.success) {
      setLoading(false);
      setPaymentPlatforms(result.info);
    } else {
      setError(true);
    }
  };

  const fetchPaymentDetails = async () => {
    setLoading(true);
    setError(false);
    await getPaymentPlatforms();
    await getPaymentList();
  };

  useEffect(() => {
    fetchPaymentDetails();
  }, []);

  return (
    <ScreenLayout scrollable showHeader showShadow title="Payment accounts">
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
            Add bank accounts or mobile money account for payments. You can add
            up to to 5 payment accounts
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
              onPress={() =>
                navigation.navigate("AddMobileMoney", { ...route.params })
              }
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
            onPress={() =>
              navigation.navigate("AddBankAccount", { ...route.params })
            }
          />
          <View style={styles.dividerFull} />
          <CustomText style={styles.paymentTitle2}>
            Your saved payment methods
          </CustomText>
          {paymentAccounts.map((item, i) => renderItem(item, i))}
        </>
      )}
    </ScreenLayout>
  );
};

export default PaymentAccountsScreen;
