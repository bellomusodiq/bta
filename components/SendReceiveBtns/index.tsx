import { Scan, Send2 } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import styles from "./styles";

const SendReceiveBtns: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Send2 size={RFValue(20)} color="#000" />
        <CustomText style={styles.buttonText}>Send</CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Scan size={RFValue(20)} color="#000" />
        <CustomText style={styles.buttonText}>Receive</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default SendReceiveBtns;
