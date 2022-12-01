import React, { useEffect } from "react";
import { Image, View, NativeModules, NativeEventEmitter, Alert } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import KycImage from "../../assets/images/kyc-begin.png";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../store";
import { initializeKycApi } from "../../api/profile.api";
import { MetaMapRNSdk } from "react-native-expo-metamap-sdk";

const KYCBeginScreen: React.FC<RootStackScreenProps<"KYCBegin">> = () => {
  const navigation = useNavigation();
  const { user } = useAppSelector((state) => state.auth);

  const initializeKYC = async () => {
    const result = await initializeKycApi(navigation, user.token);
    if (result.success) {
      MetaMapRNSdk.showFlow(
        result.data.clientId,
        result.data.flowId,
        result.data.metadata
      );
    }
  };

  useEffect(() => {
    const MetaMapVerifyResult = new NativeEventEmitter(
      NativeModules.MetaMapRNSdk
    );
    MetaMapVerifyResult.addListener("verificationSuccess", (data) =>
      Alert.alert(JSON.stringify(data))
    );
    MetaMapVerifyResult.addListener("verificationCanceled", (data) =>
      Alert.alert(JSON.stringify(data))
    );
  });

  return (
    <ScreenLayout showHeader title="Verify account" scrollable>
      <View style={styles.container}>
        <CustomText style={styles.title}>Dear {user.firstName}</CustomText>
        <Image source={KycImage} style={styles.image} resizeMode="contain" />
        <CustomText style={styles.info}>
          We need a few more information to finish your account setup
        </CustomText>
        <CustomText style={styles.complete}>
          Complete your verification in three simple steps to be able to get the
          most of your account.
        </CustomText>
        <CustomButton onPress={initializeKYC}>CONTINUE</CustomButton>
      </View>
    </ScreenLayout>
  );
};

export default KYCBeginScreen;
