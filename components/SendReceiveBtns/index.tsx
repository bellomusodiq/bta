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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SendCrypto")}
          style={[styles.button, { backgroundColor: "#F1F4FF" }]}
        >
          <HomeSendIcon />
        </TouchableOpacity>
        <CustomText style={styles.title}>Send</CustomText>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ReceiveCrypto")}
          style={[styles.button, { backgroundColor: "#EDFDF3" }]}
        >
          <HomeReceiveIcon />
        </TouchableOpacity>
        <CustomText style={styles.title}>Receive</CustomText>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Portfolio")}
          style={[styles.button, { backgroundColor: "#F8F2FF" }]}
        >
          <ChartSquare variant="Bold" color="#9747FF" size={20} />
        </TouchableOpacity>
        <CustomText style={styles.title}>Portfolio</CustomText>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => navigation.navigate("ManageAsset")}
          style={[styles.button, { backgroundColor: "#FFF3EC" }]}
        >
          <Candle variant="Bold" color="#F45D01" size={20} />
        </TouchableOpacity>
        <CustomText style={styles.title}>Manage</CustomText>
      </View>
    </View>
  );
};

export default MenuBtns;
