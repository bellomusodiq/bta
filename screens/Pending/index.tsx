import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import PendingImage from "../../assets/images/pending.png";
import { ArrowCircleDown, TickCircle } from "iconsax-react-native";

const PendingScreen: React.FC<RootStackScreenProps<"Pending">> = ({
  route,
}) => {
  console.log("PendingScreen", route.params.tab);
  const [alert, setAlert] = useState<boolean>(true);
  const navigation = useNavigation();
  const onNavigate = () => {
    navigation.navigate("Root");
  };
  return (
    <ScreenLayout title="">
      <View style={styles.container}>
        <Image
          source={PendingImage}
          style={styles.image}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <CustomText style={styles.title}>
          Your transaction is being processed
        </CustomText>
        <CustomText style={styles.text}>
          We’re working on your request, please check back in a minute
        </CustomText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("History", { tab: route.params.tab })
          }}
          style={styles.button}
        >
          <CustomText style={styles.buttonText}>View transaction</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("Root")}
          style={[styles.button, { marginTop: 20 }]}
        >
          <CustomText style={styles.buttonText}>Go to homepage</CustomText>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default PendingScreen;
