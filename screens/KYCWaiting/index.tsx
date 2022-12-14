import React from "react";
import { Image, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import styles from "./styles";

const KYCWaitingScreen = ({ route, navigation }) => {
  return (
    <ScreenLayout
      SafeAreaBackground="white"
      footer={
        <View style={styles.footer}>
          <CustomButton
            onPress={() => navigation.goBack()}
            style={[styles.footerButton]}
          >
            <CustomText style={styles.footerButtonText}>Close</CustomText>
          </CustomButton>
        </View>
      }
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/kyc_waiting.png")}
          resizeMode="contain"
        />
        <CustomText style={styles.message}>{route.params?.message}</CustomText>
      </View>
    </ScreenLayout>
  );
};

export default KYCWaitingScreen;
