import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import SuccessImage from "../../assets/images/success.png";
import CustomButton from "../../components/CustomButton";
import LottieView from "lottie-react-native";
import { loadDashboard } from "../../api/dashboard.api";
import { useDispatch } from "react-redux";
import { setDashboardData } from "../../store/auth.slice";
import { useAppDispatch, useAppSelector } from "../../store";

const CompleteScreen: React.FC<RootStackScreenProps<"Complete">> = ({
  route,
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const getDashboardData = async () => {
    const result = await loadDashboard(navigation, user?.token);
    if (result.success) {
      dispatch(setDashboardData(result));
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={require("../../assets/images/success.json")}
        style={styles.image}
        loop={false}
      />
      <CustomText style={styles.title}>
        Your transaction has been successfully processed!
      </CustomText>
      <CustomText style={styles.text}>
        Check the status of your transaction in your transaction history
      </CustomText>
      <TouchableOpacity
        onPress={() =>
          // @ts-ignore-next-line
          navigation.navigate("History", {
            screen: "TransactionDetail",
            params: route.params,
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

export default CompleteScreen;
