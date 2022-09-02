import { Notification } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import WhatsappIcon from "../icons/whatsapp-icon";
import styles from "./styles";
import { HomeHeaderProps } from "./types";

const HomeHeader: React.FC<HomeHeaderProps> = ({ name, whatsappNumber }) => (
  <View style={styles.container}>
    <CustomText style={styles.welcomeText}>
      <CustomText style={styles.grayText}>Hello!</CustomText> {name} 👋
    </CustomText>
    <TouchableOpacity style={styles.notificationContainer}>
      <Notification color="black" size={28} />
      <View style={styles.indicator}>
        <CustomText style={styles.indicatorText}>9</CustomText>
      </View>
    </TouchableOpacity>
  </View>
);

export default HomeHeader;
