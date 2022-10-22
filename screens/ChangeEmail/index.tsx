import { useNavigation } from "@react-navigation/native";
import { Eye, EyeSlash } from "iconsax-react-native";
import React, { useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { changeEmail } from "../../api/profile.api";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import Toast from "react-native-toast-message";

const ChangeEmailScreen: React.FC<RootStackScreenProps<"ChangeEmail">> = () => {
  const navigation = useNavigation();
  const { user } = useAppSelector((state) => state.auth);

  const [oldEmail, setOldEmail] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const disabled = !oldEmail || !newEmail || !password || loading;

  const onChangeEmail = async () => {
    setLoading(true);
    const result = await changeEmail(user.token, password, oldEmail, newEmail);
    setLoading(false);

    if (result.success) {
      navigation.navigate("EmailOTP")
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
    <ScreenLayout title="Change email" scrollable showHeader showShadow>
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>Current email address</CustomText>
        <CustomInput
          style={styles.input}
          value={oldEmail}
          onChangeText={(value) => setOldEmail(value)}
          placeholder="Enter old email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>New email</CustomText>
        <CustomInput
          style={styles.input}
          value={newEmail}
          onChangeText={(value) => setNewEmail(value)}
          placeholder="New email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>Confirm password</CustomText>
        <CustomInput
          style={styles.input}
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={(value) => setPassword(value)}
          placeholder="Re-enter your password"
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
      <CustomButton
        disabled={disabled}
        loading={loading}
        onPress={onChangeEmail}
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

export default ChangeEmailScreen;
