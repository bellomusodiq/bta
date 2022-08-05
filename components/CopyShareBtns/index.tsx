import { useNavigation } from "@react-navigation/native";
import { DocumentCopy, Export } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import styles from "./styles";

const CopyShareBtns: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        // onPress={() => navigation.navigate("SendCrypto")}
        style={styles.button}
      >
        <DocumentCopy size={RFValue(20)} color="#000" />
        <CustomText style={styles.buttonText}>Copy</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => navigation.navigate("ReceiveCrypto")}
        style={styles.button}
      >
        <Export size={RFValue(20)} color="#000" />
        <CustomText style={styles.buttonText}>Receive</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default CopyShareBtns;
