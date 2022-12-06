import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { logoutHandler } from "../utils/logout";

export const loadDashboard = async (
  navigation: any,
  token: {
    accessToken: string;
    refreshToken: string;
  }
) => {

  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/dashboard`, {
      ...token,
    });

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const getPriceChanges = async (
  token: {
    accessToken: string;
    refreshToken: string;
  },
  currencies: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/getPriceChanges`, {
      ...token,
      currencies,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const buyAccountApi = async (navigation: any, token: any) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/payments/buyAccounts`, {
      ...token,
    });
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCryptoAddressApi = async (
  navigation: any,
  token: {
    accessToken: string;
    refreshToken: string;
  },
  cryptoSymbol: string,
  platform: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/getAddress`, {
      ...token,
      cryptoSymbol,
      platform,
    });
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNotificationsApi = async (navigation: any, token: any) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/emergencies`, {
      ...token,
    });
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
