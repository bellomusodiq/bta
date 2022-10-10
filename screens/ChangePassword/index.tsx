import { useNavigation } from "@react-navigation/native";
import { Eye, EyeSlash } from "iconsax-react-native";
import React, { useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { changePassword } from "../../api/profile.api";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import Toast from "react-native-toast-message";
import CustomButton from "../../components/CustomButton";

const ChangePasswordScreen: React.FC<
  RootStackScreenProps<"ChangeEmail">
> = () => {
  const navigation = useNavigation();
  const { user } = useAppSelector((state) => state.auth);

  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const disabled = !newPassword || !confirmPassword || !password || loading;

  const onChangePassword = async () => {
    setLoading(true);
    const result = await changePassword(user.token, password, newPassword);
    setLoading(false);

    if (result.success) {
      navigation.navigate("PasswordOTP");
      Toast.show({
        type: "success",
        text1: "OTP sent to your email",
      });
    } else {
      Toast.show({
        type: "error",
        text1: result.message,
      });
    }
  };

  return (
    <ScreenLayout title="Change password" scrollable showHeader showShadow>
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>Password</CustomText>
        <CustomInput
          style={styles.input}
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="Enter current password"
          secureTextEntry={!showPassword}
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
      </View>
      <View style={styles.divider} />
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>New password</CustomText>
        <CustomInput
          style={styles.input}
          value={newPassword}
          onChangeText={(value) => setNewPassword(value)}
          placeholder="Set a new password"
          secureTextEntry={!showNewPassword}
          rightComponent={
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              {!showNewPassword ? (
                <Eye color="black" variant="Bold" size={RFValue(20)} />
              ) : (
                <EyeSlash color="black" variant="Bold" size={RFValue(20)} />
              )}
            </TouchableOpacity>
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>Confirm password</CustomText>
        <CustomInput
          style={styles.input}
          value={confirmPassword}
          secureTextEntry={!showConfirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
          placeholder="Re-enter your password"
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
      </View>
      <CustomButton
        loading={loading}
        disabled={disabled}
        onPress={onChangePassword}
        style={[
          styles.button,
          { backgroundColor: disabled ? "#979797" : "#3861FB" },
        ]}
      >
        <CustomText style={styles.buttonText}>SAVE</CustomText>
      </CustomButton>
    </ScreenLayout>
  );
};

export default ChangePasswordScreen;
