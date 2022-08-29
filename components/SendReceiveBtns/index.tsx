import { useNavigation } from "@react-navigation/native";
import { Candle, ChartSquare, Scan, Send2 } from "iconsax-react-native";
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
      <TouchableOpacity
        onPress={() => navigation.navigate("SendCrypto")}
        style={[styles.button, { backgroundColor: "#F1F4FF" }]}
      >
        <HomeSendIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ReceiveCrypto")}
        style={[styles.button, { backgroundColor: "#EDFDF3" }]}
      >
        <HomeReceiveIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Portfolio")}
        style={[styles.button, { backgroundColor: "#F8F2FF" }]}
      >
        <ChartSquare variant="Bold" color="#9747FF" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: "#FFF3EC" }]}>
        <Candle variant="Bold" color="#F45D01" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default MenuBtns;
