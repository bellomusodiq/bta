import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../CONFIG";

export const loginApi = async (username: string, password: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/2/signIn`, {
      username,
      password,
    });

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const signupApi = async (
  email: string,
  country: string,
  countryCode: string,
  countryCallingCode: string,
  countryCurrency: string,
  username: string,
  password: string
) => {
  try {
    const data = {
      email,
      country,
      countryCode,
      countryCurrency,
      countryCallingCode,
      username,
      password,
    };
    const result = await axios.post(`${BASE_URL}/misc/2/verify_email`, data);

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const logoutApi = async () => {
  try {
    const user = await AsyncStorage.getItem("@user");
    const { token } = JSON.parse(user);
    const result = await axios.post(`${BASE_URL}/account/logout`, { token });
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const verifyEmailApi = async (
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
    const result = await axios.post(`${BASE_URL}/misc/2/verify_code`, data);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
