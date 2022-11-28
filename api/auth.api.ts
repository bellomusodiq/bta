import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { logoutHandler } from "../utils/logout";

export const getCountriesApi = async (navigation: any) => {
  try {
    const result = await axios.get("https://app.bitafrika.com/countries");

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const loginApi = async (
  navigation: any,
  username: string,
  password: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/auth/signIn`, {
      username,
      password,
    });

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const signupApi = async (
  navigation: any,
  email: string,
  country: string,
  countryCode: string,
  countryCallingCode: string,
  countryCurrency: string,
  username: string,
  password: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");

    const data = {
      email,
      country,
      countryCode,
      countryCurrency,
      countryCallingCode,
      username,
      password,
    };
    const result = await axios.post(`${BASE_URL}/auth/verify_email`, data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const logoutApi = async () => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const user = await AsyncStorage.getItem("@user");
    const { token } = JSON.parse(user);
    const result = await axios.post(`${BASE_URL}/account/logout`, { ...token });
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const verifyEmailApi = async (
  navigation: any,
  token: string,
  email: string,
  country: string,
  countryCode: string,
  countryCallingCode: string,
  countryCurrency: string,
  username: string,
  password: string,
  code: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const data = {
      token,
      email,
      country,
      countryCode,
      countryCurrency,
      countryCallingCode,
      username,
      password,
      code,
    };
    const result = await axios.post(`${BASE_URL}/auth/verify_code`, data);
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
