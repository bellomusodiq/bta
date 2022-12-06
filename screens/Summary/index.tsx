import { useNavigation } from "@react-navigation/native";
import { ArrowRight2, Flag2 } from "iconsax-react-native";
import React, { useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { depositApprovalApi, sellConfirmationApi } from "../../api/profile.api";
import CustomText from "../../components/CustomText";
import SummaryItem from "../../components/SummaryItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import Toast from "react-native-toast-message";
import CustomButton from "../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SummaryScreen: React.FC<RootStackScreenProps<"Summary">> = ({
  route,
}) => {
  const navigation = useNavigation();
  const { params } = route;

  const { user } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);

  const sellConfirm = async () => {
    let scan = await LocalAuthentication.authenticateAsync("Scan your finger.");
    if (scan.success) {
      setLoading(true);
      const result = await sellConfirmationApi(
        navigation,
        user.token,
        params?.requestData?.symbol,
        params?.requestData?.name,
        params?.requestData?.currency === params?.requestData?.symbol
          ? "CRYPTO"
          : "USD",
        params?.requestData?.platform,
        params?.requestData?.contract,
        params?.requestData?.amount,
        params?.requestData?.value,
        params?.requestData?.id.toString()
      );
      setLoading(false);
      if (result.success) {
        let navigateRoute = "Pending";
        if (result.t?.status === "success") {
          navigateRoute = "Complete";
        }
        if (result.t?.status === "failed") {
          navigateRoute = "Failed";
        }
        navigation.replace(navigateRoute, {
          item: result.t,
          type: "Sell",
          desc: "Sell",
          tab: "Sell",
        });
      }
    } else {
      Toast.show({
        autoHide: true,
        visibilityTime: 7000,
        type: "error",
        text1: result.message,
      });
    }
  };

  const navigateToPayInstruction = async () => {
    if (!params?.sell) {
      const countryCode = await AsyncStorage.getItem("@userCountry");
      if (countryCode !== "CM") {
        navigation.navigate("PayInstruction", params);
      } else {
        // TODO: if cameroon, call STEP: 4 endpoint before navigating
        console.log("cameroon", params);
        setLoading(true);
        const result = await depositApprovalApi(
          navigation,
          user.token,
          params.symbol,
          params.name,
          params.paymentType,
          params.platform,
          params.contract,
          params.amount,
          params.value,
          params.id.toString()
        );
        setLoading(false);
        if (result.success) {
          navigation.navigate("PayInstruction", params);
        } else {
          Toast.show({
            autoHide: true,
            visibilityTime: 7000,
            type: "error",
            text1: result.message,
          });
        }
      }
    } else {
      sellConfirm();
    }
  };

  const parseNetworkFee = (name: string, fee: string) => {
    if (name === "Network Fee") {
      return fee.split("(")[0];
    }
    return fee;
  };

  return (
    <ScreenLayout
      scrollable
      showHeader
      showShadow
      title="Summary"
      footer={
        <View style={styles.footer}>
          {params.sell && (
            <CustomText
              style={{
                textAlign: "center",
                marginTop: 2,
                marginBottom: 0,
                color: "gray",
              }}
            >
              You will verify with Biometrics
            </CustomText>
          )}
          <CustomButton
            loading={loading}
            onPress={navigateToPayInstruction}
            style={styles.footerButton}
          >
            <CustomText style={styles.footerButtonText}>
              {!params?.sell ? "BUY" : `SELL ${params.amountCrypto}`}
            </CustomText>
          </CustomButton>
        </View>
      }
    >
      <CustomText style={styles.title}>
        You are {!params?.sell ? "buying" : "selling"}
      </CustomText>
      <CustomText style={styles.token}>{params.amountCrypto}</CustomText>
      <View style={styles.summaryItem}>
        <SummaryItem
          title={params.summary[0].name}
          value={params.summary[0].value}
        />
        {!params?.sell ? (
          <>
            <SummaryItem
              title={params.summary[1].name}
              componentValue={
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("PaymentMethod", {
                      ...params,
                      fromSummary: true,
                    });
                  }}
                  style={styles.buttonTextContainer}
                >
                  <CustomText style={styles.buttonText}>
                    {params.summary[1].value}
                  </CustomText>
                  <ArrowRight2 size={16} />
                </TouchableOpacity>
              }
              onClick={() => {}}
            />
            <SummaryItem
              title={params.summary[2].name}
              value={params.summary[2].value}
            />
            <SummaryItem
              title={params.summary[3].name}
              value={params.summary[3].value}
            />
            <SummaryItem
              title={params.summary[4].name}
              value={params.summary[4].value}
            />
          </>
        ) : (
          <>
            <SummaryItem
              title={params.summary[1].name}
              value={parseNetworkFee(
                params.summary[1].name,
                params.summary[1].value
              )}
            />
            <SummaryItem
              title={params.summary[2].name}
              value={params.summary[2].value}
            />
            <SummaryItem
              title={params.summary[3].name}
              value={params.summary[3].value}
            />
            <SummaryItem
              title={params.summary[4].name}
              value={
                params.summary[4].name !== "Payment Method"
                  ? params.summary[4].value
                  : null
              }
              componentValue={
                params.summary[4].name === "Payment Method" ? (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("SelectAccount", {
                        ...params,
                        fromSummary: true,
                      });
                    }}
                    style={styles.buttonTextContainer}
                  >
                    <CustomText style={styles.buttonText}>
                      {params.summary[4].value}
                    </CustomText>
                    <ArrowRight2 size={16} />
                  </TouchableOpacity>
                ) : null
              }
              onClick={
                params.summary[4].name === "Payment Method" ? () => {} : null
              }
            />
            <SummaryItem
              title={params.summary[5].name}
              value={
                params.summary[5].name !== "Payment Method"
                  ? params.summary[5].value
                  : null
              }
              componentValue={
                params.summary[5].name === "Payment Method" ? (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("SelectAccount", {
                        ...params,
                        fromSummary: true,
                      });
                    }}
                    style={styles.buttonTextContainer}
                  >
                    <CustomText style={styles.buttonText}>
                      {params.summary[5].value}
                    </CustomText>
                    <ArrowRight2 size={16} />
                  </TouchableOpacity>
                ) : null
              }
              onClick={
                params.summary[5].name === "Payment Method" ? () => {} : null
              }
            />
          </>
        )}
        <SummaryItem title="TOTAL" value={params.total} valueBold noDivider />
      </View>

      {!params.sell && (
        <View style={styles.note}>
          <Flag2 size={RFValue(24)} color="#3861FB" />
          <CustomText style={styles.noteText}>
            Kindly follow all the steps in the next page accordingly to complete
            your purchase
          </CustomText>
        </View>
      )}
    </ScreenLayout>
  );
};

export default SummaryScreen;
