import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { logoutHandler } from "../utils/logout";

export const historyApi = async (
  navigation: any,
  token: any,
  historyType: string,
  transactionType?: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const data: { [k: string]: string } = {
      ...token,
      historyType,
    };
    if (transactionType) {
      data.transactionType = transactionType;
    }

    const result = await axios.post(`${BASE_URL}/account/transactions`, data);
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
