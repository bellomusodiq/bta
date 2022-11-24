import { useNavigation } from "@react-navigation/native";
import {
  Candle,
  Cards,
  ChartSquare,
  Export,
  Import,
  Scan,
  Send2,
} from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import HomeReceiveIcon from "../icons/home-receive-icon";
import HomeSendIcon from "../icons/home-send-icon";
import styles from "./styles";

const MenuBtns: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SendCrypto")}
          style={[styles.button]}
        >
          <Export variant="Bold" color="#3861FB" />
          <CustomText style={styles.title}>Send</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ReceiveCrypto")}
          style={[styles.button]}
        >
          <Import variant="Bold" color="#3861FB" />
          <CustomText style={styles.title}>Receive</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cards")}
          style={[styles.button]}
        >
          <Cards variant="Bold" color="#3861FB" />
          <CustomText style={styles.title}>Card</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuBtns;
