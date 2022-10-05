import axios from "axios";
import { BASE_URL } from "../CONFIG";

export const chartsApi = async (
  token: string,
  dataType: string = "daily",
  currency: string
) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/charts`, {
      token,
      dataType,
      currency,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const marketAssetsApi = async (marketIdentifier: string) => {
  try {
    const result = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${marketIdentifier}`
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
