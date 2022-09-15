import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import PendingImage from "../../assets/images/pending.png";
import { ArrowCircleDown, TickCircle } from "iconsax-react-native";

const PendingScreen: React.FC<RootStackScreenProps<"Pending">> = () => {
  const [alert, setAlert] = useState<boolean>(true);
  const navigation = useNavigation();
  const onNavigate = () => {
    navigation.navigate("Root");
  };
  return (
    <ScreenLayout
      footer={
        <View style={styles.footer}>
          <TouchableOpacity onPress={onNavigate} style={[styles.footerButton]}>
            <CustomText style={styles.footerButtonText}>CLOSE</CustomText>
          </TouchableOpacity>
        </View>
      }
      title=""
    >
      <View style={styles.container}>
        <Image
          source={PendingImage}
          style={styles.image}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <CustomText style={styles.title}>
          Your transaction is being processed
        </CustomText>
        <CustomText style={styles.text}>
          We’re working on your request, please check back in a minute
        </CustomText>
        <TouchableOpacity
          onPress={() => setAlert(!alert)}
          style={styles.button}
        >
          <TickCircle
            size="20"
            color="#979797"
            variant={alert ? "Bold" : "Linear"}
          />
          <CustomText style={styles.buttonText}>
            Send me alerts about transaction status
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default PendingScreen;
