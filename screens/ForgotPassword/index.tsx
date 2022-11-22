import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Eye, EyeSlash } from "iconsax-react-native";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { loginApi } from "../../api/auth.api";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppDispatch, useAppSelector } from "../../store";
import { setError, setLoading, setUser } from "../../store/auth.slice";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const ForgotPasswordScreen: React.FC<
  RootStackScreenProps<"ForgotPassword">
> = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.auth);

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const nextNavigation = async () => {
    // const pin = await AsyncStorage.getItem("@pin");
    // if (pin) {
    //   navigation.navigate("Root");
    // } else {
    //   navigation.navigate("SetPin");
    // }
  };

  const disabled = !email || loading;

  const forgotPassword = async () => {
    navigation.navigate("ResetPasswordOTP");
    // dispatch(setLoading(true));
    // dispatch(setError(null));
    // const result = await loginApi(email, password);
    // dispatch(setLoading(false));
    // if (result.success) {
    //   dispatch(setUser(result.account));
    //   await AsyncStorage.setItem("@user", JSON.stringify(result.account));
    //   await AsyncStorage.setItem("@firstLogin", "true");
    //   nextNavigation();
    // } else {
    //   dispatch(setError(result.message));
    // }
  };

  return (
    <ScreenLayout
      onBackClick={() => navigation.replace("SplashScreen")}
      scrollable
      showHeader
      title=""
      SafeAreaBackground="white"
    >
      <CustomText style={styles.title}>Forgot Password</CustomText>
      <CustomText style={styles.subTitle}>
        Enter your email address to get reset OTP code
      </CustomText>
      <View style={styles.divider} />
      <CustomInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      {error && <CustomText style={styles.error}>{error}</CustomText>}
      <CustomButton
        loading={loading}
        disabled={disabled}
        style={styles.button}
        onPress={forgotPassword}
      >
        GET TOKEN
      </CustomButton>
    </ScreenLayout>
  );
};

export default ForgotPasswordScreen;
