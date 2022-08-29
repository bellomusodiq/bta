import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import CloseIcon from "../icons/close-icon";
import styles from "./styles";

const AssetDetailHeader: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.left} />
      <View style={styles.center}>
        <CustomText style={styles.centerText}>Tron (TRX)</CustomText>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.right}
      >
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default AssetDetailHeader;
