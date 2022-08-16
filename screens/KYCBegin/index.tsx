import React from "react";
import { Image, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import KycImage from "../../assets/images/kyc-begin.png";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const KYCBeginScreen: React.FC<RootStackScreenProps<"KYCBegin">> = () => {
  const navigation = useNavigation();
  return (
    <ScreenLayout showHeader title="Verifiy account" scrollable>
      <View style={styles.container}>
        <CustomText style={styles.title}>Dear Emmanual Nkrumah</CustomText>
        <Image source={KycImage} style={styles.image} resizeMode="contain" />
        <CustomText style={styles.info}>
          We need a few more information to finish your account setup
        </CustomText>
        <CustomText style={styles.complete}>
          Complete your verification in three simple steps to be able to get the
          most of your account.
        </CustomText>
        <CustomButton onPress={() => navigation.navigate("KYCInfo")}>
          CONTINUE
        </CustomButton>
      </View>
    </ScreenLayout>
  );
};

export default KYCBeginScreen;
