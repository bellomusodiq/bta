import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import SuccessImage from "../../assets/images/success.json";
import FailedImage from "../../assets/images/failed.png";
import CustomButton from "../../components/CustomButton";

const CompleteScreen: React.FC<RootStackScreenProps<"Complete">> = ({
  route,
}) => {
  const navigation = useNavigation();
  return (
    <ScreenLayout SafeAreaBackground="white" title="">
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            source={SuccessImage}
            style={styles.image}
            resizeMode="contain"
          />
          <CustomText style={styles.title}>
            Your transaction has been successfully processed!
          </CustomText>
          <CustomText style={styles.text}>
            Check the status of your withdrawal in your transaction history
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
        </View>
      </View>

      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "stretch",
          width: "100%",
        }}
      >
        <CustomButton
          onPress={() => navigation.replace("Root")}
          style={[styles.button]}
        >
          Go to homepage
        </CustomButton>
      </View>
    </ScreenLayout>
  );
};

export default CompleteScreen;
