import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import PendingImage from "../../assets/images/pending.png";
import CustomButton from "../../components/CustomButton";
import AnimatedLottieView from "lottie-react-native";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { loadDashboard } from "../../api/dashboard.api";
import { setDashboardData } from "../../store/auth.slice";

const PendingScreen: React.FC<RootStackScreenProps<"Pending">> = ({
  route,
}) => {
  const navigation = useNavigation();
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
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        autoPlay
        source={require("../../assets/images/pending.json")}
        style={styles.image}
        loop={false}
      />
      <CustomText style={styles.title}>
        Your transaction is being processed
      </CustomText>
      <CustomText style={styles.text}>
        We’re working on your request, please check back in a minute
      </CustomText>
      {route.params?.tab && (
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
      )}

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
