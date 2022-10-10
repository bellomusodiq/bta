import axios from "axios";
import { BASE_URL } from "../CONFIG";

export const loadDashboard = async (token: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/2/dashboard`, {
      token,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const buyAccountApi = async (token: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/payments/2/buyAccounts`, {
      token,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCryptoAddressApi = async (
  token: string,
  cryptoSymbol: string,
  platform: string
) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/getAddress`, {
      token,
      cryptoSymbol,
      platform,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNotificationsApi = async (token: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/2/emergencies`, {
      token,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
