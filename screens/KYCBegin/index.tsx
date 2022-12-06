import React, { useState } from "react";
import { Image, View, Linking } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import KycImage from "../../assets/images/kyc-begin.png";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../store";
import {
  initializeKycApi,
  initializeVerificationApi,
} from "../../api/profile.api";

const KYCBeginScreen: React.FC<RootStackScreenProps<"KYCBegin">> = () => {
  const navigation = useNavigation();
  const { user } = useAppSelector((state) => state.auth);
  const [kycData, setKycData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const initializeKYC = async () => {
    try {
      setLoading(true);
      const initializeKYC = await initializeKycApi(navigation, user.token);
      if (initializeKYC.success) {
        setKycData(initializeKYC.data);
      } else {
        setLoading(false);
        return;
      }
      const firstResponse = await initializeVerificationApi(
        initializeKYC.data.firstRequest
      );
      if (firstResponse) {
        let url = initializeKYC.data.metaMapVerificationUrl;
        url = url.replace("<ID>", firstResponse.id);
        url = url.replace("<IDENTITY>", firstResponse.identity);
        await Linking.openURL(url);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

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
          most of your account. {"\n"}You will be redirected to your mobile
          browser to continue. Return when done the app to check the status.
        </CustomText>
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={initializeKYC}
        >
          CONTINUE
        </CustomButton>
      </View>
    </ScreenLayout>
  );
};

export default KYCBeginScreen;
