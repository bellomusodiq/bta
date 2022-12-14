import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import { ArrowRight, ArrowRight2, Eye, EyeSlash } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { getCountriesApi, loginApi } from "../../api/auth.api";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  setBaseUrl,
  setError,
  setLoading,
  setUser,
  setUserCountry,
} from "../../store/auth.slice";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import Ghana from "../../assets/images/ghana.png";
import Nigeria from "../../assets/images/nigeria.png";
import Cameroon from "../../assets/images/cameron.png";
import ReactNativeModal from "react-native-modal";
import TickIcon from "../../components/icons/tick-icon";

const countryImages = {
  GH: {
    image: <Image style={styles.image} source={Ghana} resizeMode="contain" />,
    imageLarge: (
      <Image
        style={[styles.image, { width: 28, height: 20 }]}
        source={Ghana}
        resizeMode="contain"
      />
    ),
  },
  CM: {
    image: (
      <Image style={styles.image} source={Cameroon} resizeMode="contain" />
    ),
    imageLarge: (
      <Image
        style={[styles.image, { width: 28, height: 20 }]}
        source={Cameroon}
        resizeMode="contain"
      />
    ),
  },
  NG: {
    image: <Image style={styles.image} source={Nigeria} resizeMode="contain" />,
    imageLarge: (
      <Image
        style={[styles.image, { width: 32, height: 24 }]}
        source={Nigeria}
        resizeMode="contain"
      />
    ),
  },
};

const SignInScreen: React.FC<RootStackScreenProps<"SignIn">> = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { error, loading, userCountry } = useAppSelector((state) => state.auth);

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<number>(0);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [countries, setCountries] = useState<any>([]);

  const nextNavigation = async () => {
    const pin = await AsyncStorage.getItem("@pin");
    // if (pin) {
    navigation.navigate("Root");
    // } else {
    //   navigation.navigate("SetPin");
    // }
  };

  const disabled = !email || !password || loading;

  const onLogin = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    const result = await loginApi(navigation, email, password);
    dispatch(setLoading(false));
    if (result.success) {
      let scan = await LocalAuthentication.authenticateAsync(
        "Scan your finger."
      );
      if (scan.success) {
        dispatch(setUser(result.account));
        await AsyncStorage.setItem("@user", JSON.stringify(result.account));
        await AsyncStorage.setItem("@firstLogin", "true");
        nextNavigation();
      }
    } else {
      dispatch(setError(result.message));
    }
  };

  const onSetCountry = async (country: any) => {
    dispatch(setUserCountry(country.code));
    dispatch(setBaseUrl(country.baseUrl));
    await AsyncStorage.setItem("@userCountry", country.code);
    await AsyncStorage.setItem("@baseUrl", country.baseUrl[0]);
    setShowModal(false);
  };

  const fetchCountries = async () => {
    const result = await getCountriesApi(navigation);
    dispatch(setUserCountry(result.userCountry));
    await AsyncStorage.setItem("@userCountry", result.userCountry);

    const country = result.countries?.find(
      (country: any) => country.code == result.userCountry
    );
    await AsyncStorage.setItem("@baseUrl", country.baseUrl[0]);

    setCountries(result.countries);
    dispatch(setBaseUrl(country.baseUrl[0]));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const countryName = countries?.find(
    (country: any) => country.code == userCountry
  )?.name;

  return (
    <ScreenLayout
      onBackClick={() => navigation.replace("SplashScreen")}
      showHeader
      title=""
      SafeAreaBackground="white"
    >
      <ReactNativeModal
        isVisible={showModal}
        // hasBackdrop
        backdropOpacity={0.4}
        swipeDirection={["up", "left", "right", "down"]}
        onSwipeComplete={() => setShowModal(!showModal)}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.indicator} />
          <CustomText style={styles.modalTitle}>Select country</CustomText>
          {countries.map((countryItem, i) => (
            <React.Fragment key={countryItem.code}>
              <View style={styles.modalDivider} />
              <TouchableOpacity
                onPress={() => onSetCountry(countryItem)}
                style={styles.countryItem}
              >
                {countryImages[countryItem.code].imageLarge}
                <CustomText style={styles.countryItemText}>
                  {`${countryItem.name.charAt(0)}${countryItem.name
                    .slice(1)
                    .toLowerCase()}`}
                </CustomText>
                {countryItem.code === userCountry && <TickIcon />}
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>
      </ReactNativeModal>
      <CustomText style={styles.title}>Login to BitAfrika</CustomText>
      <CustomText style={styles.subTitle}>
        Welcome back! lets get you back into your account.
      </CustomText>
      <View style={styles.divider} />
      <CustomInput
        style={styles.input}
        placeholder="Enter your username"
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
      <View style={styles.footerContainer}>
        <CustomText style={styles.footerTitle}>Change country</CustomText>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.countryContainer}
        >
          {userCountry ? countryImages[userCountry].image : null}
          <CustomText style={styles.countryText}>
            {countryName
              ? `${countryName?.charAt(0)}${countryName
                  ?.slice(1)
                  .toLowerCase()}`
              : ""}
          </CustomText>
          <ArrowRight2 color="#3861FB" size={18} variant="Linear" />
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default SignInScreen;
