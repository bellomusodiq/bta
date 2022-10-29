import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import styles from "./styles";
import { MainHeaderProps } from "./types";

const MainHeader: React.FC<MainHeaderProps> = ({
  title,
  headerRight,
  showShadow,
  flexibleHeader,
}) => {
  const navigation = useNavigation();
  let shadowStyle = {};
  if (showShadow) {
    shadowStyle = {
      shadowOffset: { width: 0, height: 3 },
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 1.41,
      elevation: 2,
    };
  }
  return (
    <View style={[styles.container, shadowStyle]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.headerLeft}
      >
        <ArrowLeft size={24} color="#292D32" />
      </TouchableOpacity>
      <CustomText style={styles.header}>{title}</CustomText>
      <View
        style={[
          styles.headerRight,
          { width: flexibleHeader ? "30%" : 38 },
        ]}
      >
        {headerRight}
      </View>
    </View>
  );
};

export default MainHeader;
