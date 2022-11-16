import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import PendingImage from "../../assets/images/pending.png";
import CustomButton from "../../components/CustomButton";

const PendingScreen: React.FC<RootStackScreenProps<"Pending">> = ({
  route,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={PendingImage} style={styles.image} resizeMode="contain" />
      <CustomText style={styles.title}>
        Your transaction is being processed
      </CustomText>
      <CustomText style={styles.text}>
        We’re working on your request, please check back in a minute
      </CustomText>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("History", {
            screen: "HistoryHome",
            params: { tab: route.params.tab },
          })
        }
        style={styles.button}
      >
        <CustomText style={styles.buttonText}>View transaction</CustomText>
      </TouchableOpacity>

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

export default PendingScreen;
