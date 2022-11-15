import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import SuccessImage from "../../assets/images/success.png";
import FailedImage from "../../assets/images/failed.png";

const FailedScreen: React.FC<RootStackScreenProps<"Failed">> = ({ route }) => {
  console.log("FailedScreen", route.params.tab);

  const navigation = useNavigation();
  return (
    <ScreenLayout title="">
      <View style={styles.container}>
        <Image
          source={FailedImage}
          style={styles.image}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <CustomText style={styles.title}>
          Sorry, there has been an error in processing your request
        </CustomText>
        <CustomText style={styles.text}>
          You can retry after a while or contact us on whatsapp for support
        </CustomText>
        <TouchableOpacity
          onPress={() => navigation.replace("Root")}
          style={[styles.button, { marginTop: 20 }]}
        >
          <CustomText style={styles.buttonText}>Go to homepage</CustomText>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default FailedScreen;
