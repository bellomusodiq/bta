import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import SuccessImage from "../../assets/images/success.png";
import FailedImage from "../../assets/images/failed.png";

const CompleteScreen: React.FC<RootStackScreenProps<"Complete">> = () => {
  const navigation = useNavigation();
  return (
    <ScreenLayout
      title=""
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Root")}
            style={styles.footerButton}
          >
            <CustomText style={styles.footerButtonText}>CONTINUE</CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.container}>
        <Image
          source={SuccessImage}
          style={styles.image}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <CustomText style={styles.title}>
          Your transaction has been successfully processed!
        </CustomText>
        <CustomText style={styles.text}>
          Check the status of your withdrawal in your transaction history
        </CustomText>
        <TouchableOpacity style={styles.button}>
          <CustomText style={styles.buttonText}>View transaction</CustomText>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default CompleteScreen;
