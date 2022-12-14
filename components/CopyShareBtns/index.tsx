import { DocumentCopy, Export } from "iconsax-react-native";
import React from "react";
import { Share, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Copy from "../Copy";
import CustomText from "../CustomText";
import styles from "./styles";
import Toast from "react-native-toast-message";
import { useAppSelector } from "../../store";

const CopyShareBtns: React.FC<{ text: string; token: string }> = ({
  text,
  token,
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const shareAddress = async () => {
    try {
      await Share.share({
        message: `This is my ${token} wallet address ${text}`,
      });
    } catch (e) {
      Toast.show({
        autoHide: true,
        visibilityTime: 7000,
        type: "error",
        text1: e.message,
      });
    }
  };
  return (
    <View style={styles.container}>
      <Copy text={text} style={styles.button}>
        <DocumentCopy size={RFValue(20)} color="#3861FB" />
        <CustomText style={[styles.buttonText, { color: "#3861FB" }]}>
          Copy
        </CustomText>
      </Copy>
      <TouchableOpacity style={styles.button} onPress={shareAddress}>
        <Export size={RFValue(20)} color="#000" />
        <CustomText style={styles.buttonText}>Share</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default CopyShareBtns;
