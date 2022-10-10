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
  selectedUserNetwork: string,
  method: string
) => {
  try {
    const data = {
      token,
      momoName,
      momoUserPhone,
      selectedUserNetwork,
      accountPassword,
      method,
    };
    console.log(result.data);
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

export const changeEmail = async (
  token: string,
  accountPassword: string,
  currentEmail: string,
  newEmail: string
) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/2/updateEmail`, {
      token,
      accountPassword,
      currentEmail,
      newEmail,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const verifyChangeEmail = async (token: string, usercode: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/password/passwordCode`, {
      token,
      usercode,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const changePassword = async (
  token: string,
  currentPassword: string,
  newPassword: string
) => {
  try {
    const result = await axios.post(`${BASE_URL}/password/request`, {
      token,
      currentPassword,
      newPassword,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const verifyChangePassword = async (token: string, userCode: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/password/passwordCode`, {
      token,
      userCode,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const verifyMobileMoneyApi = async (
  token: string,
  method: string,
  momoName: string,
  momoUserPhone: string,
  selectedUserNetwork: string,
  accountPassword: string,
  otpCode: string
) => {
  const data = {
    token,
    method,
    momoName,
    momoUserPhone,
    selectedUserNetwork,
    accountPassword,
    otpCode,
  };
  try {
    const result = await axios.post(
      `${BASE_URL}/payments/verifyPayAccount`,
      data
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const addBankAccountApi = async (
  token: string,
  bankCode: string,
  accountPassword: string,
  userBankAccountName: string,
  userBankAccountNumber: string
) => {
  const data = {
    token,
    method: "bank",
    bankCode,
    userBankSwiftBic: "3043",
    accountPassword,
    userBankRouting: "3343",
    userBankAccountName,
    userBankAccountNumber,
  };
  console.log(data);

  try {
    const result = await axios.post(`${BASE_URL}/payments/add`, data);

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const buyAccountApi = async (token: string) => {
  const data = {
    token,
  };
  try {
    const result = await axios.post(`${BASE_URL}/payments/2/buyAccounts`, data);

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const sellAccountApi = async (token: string) => {
  const data = {
    token,
  };
  try {
    const result = await axios.post(`${BASE_URL}/payments/2/sellAccounts`, data);

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const reviewBuyOrderApi = async (
  token: string,
  cryptoSymbol: string,
  coinName: string,
  paymentType: string,
  platform: string,
  contract: string,
  amount: string,
  seletedMethod: string,
  methodType: string
) => {
  const data = {
    token,
    cryptoSymbol,
    coinName,
    paymentType,
    platform,
    contract,
    amount,
    seletedMethod,
    methodType,
  };
  console.log(data);

  try {
    const result = await axios.post(`${BASE_URL}/payments/2/topupSummary`, data);

    return result.data;
  } catch (e) {
    console.log(e);
  }
};
