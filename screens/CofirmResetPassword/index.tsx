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

const ConfrimResetPasswordScreen: React.FC<
  RootStackScreenProps<"ConfirmResetPassword">
> = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.auth);

  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const nextNavigation = async () => {
    // const pin = await AsyncStorage.getItem("@pin");
    // if (pin) {
    //   navigation.navigate("Root");
    // } else {
    //   navigation.navigate("SetPin");
    // }
  };

  const disabled = !password || !newPassword || loading;

  const ConfrimResetPassword = async () => {
    navigation.replace("SignIn");
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
    <ScreenLayout scrollable showHeader title="" SafeAreaBackground="white">
      <CustomText style={styles.title}>Reset Password</CustomText>
      <CustomText style={styles.subTitle}>Reset your new password</CustomText>
      <View style={styles.divider} />
      <CustomInput
        style={styles.input}
        placeholder="Enter new password"
        value={password}
        secureTextEntry={!showPassword}
        onChangeText={(value) => setPassword(value)}
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
      <CustomInput
        style={styles.input}
        placeholder="Confirm password"
        value={newPassword}
        secureTextEntry={!showConfirmPassword}
        onChangeText={(value) => setNewPassword(value)}
        rightComponent={
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {!showConfirmPassword ? (
              <Eye color="black" variant="Bold" size={RFValue(20)} />
            ) : (
              <EyeSlash color="black" variant="Bold" size={RFValue(20)} />
            )}
          </TouchableOpacity>
        }
      />
      <CustomButton
        loading={loading}
        disabled={disabled}
        style={styles.button}
        onPress={ConfrimResetPassword}
      >
        CHANGE PASSWORD
      </CustomButton>
    </ScreenLayout>
  );
};

export default ConfrimResetPasswordScreen;
