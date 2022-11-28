import { useNavigation } from "@react-navigation/native";
import { Eye, EyeSlash, TickCircle } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { RFValue } from "react-native-responsive-fontsize";
import { getCountriesApi, signupApi } from "../../api/auth.api";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setBaseUrl, setUserCountry } from "../../store/auth.slice";
import { useDispatch } from "react-redux";

const SignInScreen: React.FC<RootStackScreenProps<"SignIn">> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [country, setCountry] = useState<any>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [countries, setCountries] = useState<any>([]);

  const nextNavigation = () => {
    navigation.navigate("VerifyEmail");
  };

  const onSetCountry = async (country: any) => {
    dispatch(setUserCountry(country.code));
    dispatch(setBaseUrl(country.baseUrl));
    await AsyncStorage.setItem("@userCountry", country.code);
    await AsyncStorage.setItem("@baseUrl", country.baseUrl[0]);
  };

  const fetchCountries = async () => {
    const result = await getCountriesApi();
    dispatch(setUserCountry(result.userCountry));
    await AsyncStorage.setItem("@userCountry", result.userCountry);

    const country = result.countries?.find(
      (country: any) => country.code == result.userCountry
    );
    setCountry({
      label: country.name,
      value: country.countryCode,
      code: country.countryCallingCode,
      currency: country.countryCurrency,
    });
    await AsyncStorage.setItem("@baseUrl", country.baseUrl[0]);

    setCountries(result.countries);
    dispatch(setBaseUrl(country.baseUrl[0]));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const disabled =
    !email ||
    !password ||
    !confirmPassword ||
    !username ||
    !country ||
    !acceptTerms;

  const onSignup = async () => {
    setLoading(true);
    setError(null);
    const result = await signupApi(
      navigation,
      email,
      country.label,
      country.value,
      country.code,
      country.currency,
      username,
      password
    );

    setLoading(false);

    if (result.success) {
      navigation.navigate("VerifyEmail", {
        token: result.token,
        email,
        country: country.label,
        countryCode: country.value,
        countryCurrency: country.code,
        countryCallingCode: country.currency,
        username,
        password,
      });
    } else {
      Toast.show({
        autoHide: true,
        visibilityTime: 7000,
        type: "error",
        text1: result.message,
      });
      setError(result.message);
    }
  };

  const countriesList = countries.map((country) => ({
    label: country.name,
    value: country.countryCode,
    code: country.countryCallingCode,
    currency: country.countryCurrency,
  }));

  const onChangeCountry = async (value) => {
    setCountry(value);
    const country = countries?.find(
      (country: any) => country.code == value.value
    );
    onSetCountry(country);
  };

  return (
    <ScreenLayout showHeader title="" scrollable SafeAreaBackground="white">
      <CustomText style={styles.title}>Create an account</CustomText>
      <CustomText style={styles.subTitle}>
        This is the first bold step to your crypto freedom
      </CustomText>
      <View style={styles.divider} />
      <CustomInput
        style={styles.input}
        placeholder="Set a username"
        value={username}
        onChangeText={(value) => setUsername(value)}
      />
      <CustomInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <CustomInput
        style={styles.input}
        value={password}
        secureTextEntry={!showPassword}
        onChangeText={(value) => setPassword(value)}
        placeholder="Choose a password"
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
      <CustomInput
        style={styles.input}
        value={confirmPassword}
        secureTextEntry={!showConfirmPassword}
        onChangeText={(value) => setConfirmPassword(value)}
        placeholder="Re-enter password"
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
      <Dropdown
        value={country}
        onChange={onChangeCountry}
        style={styles.dropdown}
        data={countriesList}
        placeholder={"Select country"}
        labelField="label"
        valueField="value"
        selectedTextStyle={{ color: "#3861FB" }}
      />
      <View style={styles.privacyPolicy}>
        <TouchableOpacity
          onPress={() => setAcceptTerms(!acceptTerms)}
          style={styles.checkButton}
        >
          <TickCircle
            variant="Bold"
            color={acceptTerms ? "#27C27A" : "#979797"}
            size={20}
          />
        </TouchableOpacity>
        <CustomText style={styles.termsText}>
          I have read and agree to BitAfrika’s{" "}
          <CustomText style={styles.hilight}>Terms</CustomText> and{" "}
          <CustomText style={styles.hilight}>Privacy policy</CustomText>
        </CustomText>
      </View>
      {error && <CustomText style={styles.errorText}>{error}</CustomText>}
      <CustomButton
        disabled={disabled}
        style={styles.button}
        onPress={onSignup}
        loading={loading}
      >
        SIGNUP
      </CustomButton>
      <TouchableOpacity>
        <CustomText
          style={[styles.termsText, { textAlign: "center", marginBottom: 50 }]}
        >
          Already have an account?{" "}
          <CustomText style={styles.hilight}>Login</CustomText>
        </CustomText>
      </TouchableOpacity>
    </ScreenLayout>
  );
};

export default SignInScreen;
