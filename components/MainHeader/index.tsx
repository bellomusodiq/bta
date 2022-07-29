import { ArrowLeft } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import styles from "./styles";
import { MainHeaderProps } from "./types";

const MainHeader: React.FC<MainHeaderProps> = ({ title, headerRight }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerLeft}>
        <ArrowLeft size={RFValue(24)} color="#292D32" />
      </TouchableOpacity>
      <CustomText style={styles.header}>{title}</CustomText>
      <View style={styles.headerRight}>{headerRight}</View>
    </View>
  );
};

export default MainHeader;
