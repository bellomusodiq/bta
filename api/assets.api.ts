import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { logoutHandler } from "../utils/logout";

export const chartsApi = async (
  navigation: any,
  token: any,
  dataType: string = "daily",
  currency: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/charts`, {
      ...token,
      dataType,
      currency,
    });
    console.log(`${BASE_URL}/account/charts`);

    console.log({ token, dataType, currency });
    console.log(result.data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const marketAssetsApi = async (
  marketIdentifier: string
) => {
  try {
    const result = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${marketIdentifier}`
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
