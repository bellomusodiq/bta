import { useNavigation } from "@react-navigation/native";
import { Eye, EyeSlash } from "iconsax-react-native";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const SignInScreen: React.FC<RootStackScreenProps<"SignIn">> = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<any>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const nextNavigation = () => {
    navigation.navigate("WelcomeBack");
  };

  const disabled = !email || !password;

  return (
    <ScreenLayout showHeader title="">
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
      <CustomButton
        disabled={disabled}
        style={styles.button}
        onPress={nextNavigation}
      >
        LOGIN
      </CustomButton>
      <TouchableOpacity>
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
