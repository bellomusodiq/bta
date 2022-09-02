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
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerLeft}
        >
          <ArrowLeft size={RFValue(24)} color="#292D32" />
        </TouchableOpacity>
        <CustomText style={styles.header}>{title}</CustomText>
        <View
          style={[
            styles.headerRight,
            { width: flexibleHeader ? "30%" : RFValue(28) },
          ]}
        >
          {headerRight}
        </View>
      </View>
      {showShadow && <View style={styles.shadow} />}
    </View>
  );
};

export default MainHeader;
