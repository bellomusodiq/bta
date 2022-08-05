import { useNavigation } from "@react-navigation/native";
import { Scan, Send2 } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import styles from "./styles";

const SendReceiveBtns: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("SendCrypto")}
        style={styles.button}
      >
        <Send2 size={RFValue(20)} color="#000" />
        <CustomText style={styles.buttonText}>Send</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ReceiveCrypto")}
        style={styles.button}
      >
        <Scan size={RFValue(20)} color="#000" />
        <CustomText style={styles.buttonText}>Receive</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default SendReceiveBtns;
