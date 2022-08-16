import { useNavigation } from "@react-navigation/native";
import { Bank } from "iconsax-react-native";
import React from "react";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const KYCStep1Screen: React.FC<RootStackScreenProps<"KYCStep1">> = () => {
  const navigation = useNavigation();
  return (
    <ScreenLayout title="Step 1" showHeader showShadow>
      <View style={styles.progressContainer}>
        <CustomText style={styles.kycText}>KYC progress</CustomText>
        <View style={styles.progress}>
          <View style={[styles.progressCompleted, { width: "0%" }]} />
        </View>
        <CustomText style={styles.progressText}>0/3 done 👏</CustomText>
      </View>
      <View style={styles.divider} />
      <CustomText style={styles.title}>Select document type</CustomText>
      <PaymentItem
        title="Ghana card"
        icon={
          <View style={styles.iconContainer}>
            <Bank size={RFValue(20)} color="#3861FB" variant="Bulk" />
          </View>
        }
        showArror
        onPress={() => navigation.navigate("KYCStep2")}
      />
    </ScreenLayout>
  );
};

export default KYCStep1Screen;
