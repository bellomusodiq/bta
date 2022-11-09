import { useNavigation } from "@react-navigation/native";
import { Notification } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import WhatsappIcon from "../icons/whatsapp-icon";
import styles from "./styles";
import { HomeHeaderProps } from "./types";

const HomeHeader: React.FC<HomeHeaderProps> = ({ name, whatsappNumber }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomText style={styles.welcomeText}>
        <CustomText style={styles.grayText}>Hello!</CustomText> {name} 👋
      </CustomText>
      <TouchableOpacity
        onPress={() => navigation.navigate("Notifications")}
        style={styles.notificationContainer}
      >
        <Notification color="white" size={22} variant="Outline" />
        {/* <View style={styles.indicator}>
          <CustomText style={styles.indicatorText}>9</CustomText>
        </View> */}
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
