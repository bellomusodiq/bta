import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Eye, EyeSlash } from "iconsax-react-native";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { RFValue } from "react-native-responsive-fontsize";
import { loginApi } from "../../api/auth.api";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import { height } from "../../consts/dimenentions";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppDispatch, useAppSelector } from "../../store";
import { setError, setLoading, setUser } from "../../store/auth.slice";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const SignInScreen: React.FC<RootStackScreenProps<"SignIn">> = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.auth);

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<any>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const nextNavigation = async () => {
    const pin = await AsyncStorage.getItem("@pin");
    if (pin) {
      navigation.navigate("Root");
    } else {
      navigation.navigate("SetPin");
    }
  };

  const disabled = !email || !password || loading;

  const onLogin = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    const result = await loginApi(email, password);
    dispatch(setLoading(false));
    if (result.success) {
      dispatch(setUser(result.account));
      await AsyncStorage.setItem("@user", JSON.stringify(result.account));
      await AsyncStorage.setItem("@firstLogin", "true");
      nextNavigation();
    } else {
      dispatch(setError(result.message));
    }
  };

  return (
    <ScreenLayout
      onBackClick={() => navigation.replace("SplashScreen")}
      scrollable
      showHeader
      title=""
      SafeAreaBackground="white"
    >
      <CustomText style={styles.title}>Login to BitAfrika</CustomText>
      <CustomText style={styles.subTitle}>
        Welcome back! lets get you back into your account.
      </CustomText>
      <View style={styles.divider} />
      <CustomInput
        style={styles.input}
        placeholder="Enter your username or email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <CustomInput
        style={styles.input}
        value={password}
        secureTextEntry={!showPassword}
        onChangeText={(value) => setPassword(value)}
        placeholder="Enter your password"
        rightComponent={
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <Eye color="black" variant="Bold" size={RFValue(20)} />
            ) : (
              <EyeSlash color="black" variant="Bold" size={RFValue(20)} />
            )}
          </TouchableOpacity>
        }
      />
      {error && <CustomText style={styles.error}>{error}</CustomText>}
      <CustomButton
        loading={loading}
        disabled={disabled}
        style={styles.button}
        onPress={onLogin}
      >
        LOGIN
      </CustomButton>
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <CustomText style={styles.forgotPasswordText}>
          Forgot your password
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <CustomText style={styles.createAccountText}>
          Create an account
        </CustomText>
      </TouchableOpacity>
    </ScreenLayout>
  );
};

export default SignInScreen;
