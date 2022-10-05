import axios from "axios";
import { BASE_URL } from "../CONFIG";

export const getNotificationStatusApi = async (token: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/2/getPushTokenState`, {
      token,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const enableNotificationApi = async (
  token: string,
  pushToken: string
) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/2/getPushTokenState`, {
      token,
      pushToken,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const disableNotificationApi = async (token: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/2/getPushTokenState`, {
      token,
      pushToken: "",
      status: "disabled",
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const faqApi = async (token: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/misc/2/faq`, {
      token,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const accountLimitsApi = async (token: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/2/profile/limits`, {
      token,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const paymentAccountApi = async (token: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/payments/list`, {
      token,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const paymentAccountPlatformsApi = async (token: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/payments/methods`, {
      token,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const verifyMobileMoneyNumberApi = async (
  token: string,
  momoName: string,
  momoUserPhone: string,
  accountPassword: string,
  selectedUserNetwork: string
) => {
  try {
    const data = {
      token,
      momoName,
      momoUserPhone,
      selectedUserNetwork,
      accountPassword,
    };
    console.log(data);
    const result = await axios.post(`${BASE_URL}/payments/add`, data);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const verifyMobileMoneyNumberOTPApi = async (
  token: string,
  momoName: string,
  momoUserPhone: string,
  accountPassword: string,
  otpCode: string
) => {
  try {
    const result = await axios.post(`${BASE_URL}/payments/verifyPayAccount`, {
      token,
      momoName,
      momoUserPhone,
      selectedUserNetwork: "MTN",
      accountPassword,
      otpCode,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
