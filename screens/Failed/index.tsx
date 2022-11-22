import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import FailedImage from "../../assets/images/failed.png";
import CustomButton from "../../components/CustomButton";
import AnimatedLottieView from "lottie-react-native";

const FailedScreen: React.FC<RootStackScreenProps<"Failed">> = ({
  route,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        autoPlay
        source={require("../../assets/images/error.json")}
        style={styles.image}
        loop={false}
      />
      <CustomText style={styles.title}>
        Sorry, there has been an error in processing your request
      </CustomText>
      <CustomText style={styles.text}>
        You can retry after a while or contact us on whatsapp for support
      </CustomText>

      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "stretch",
          width: "100%",
          position: "absolute",
          bottom: 30,
        }}
      >
        <CustomButton
          onPress={() => navigation.replace("Root")}
          style={[styles.button]}
        >
          Go to homepage
        </CustomButton>
      </View>
    </View>
  );
};

export default FailedScreen;
