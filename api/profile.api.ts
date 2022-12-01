import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { logoutHandler } from "../utils/logout";

export const getNotificationStatusApi = async (navigation: any, token: any) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/getPushTokenState`, {
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

export const enableNotificationApi = async (
  navigation: any,
  token: any,
  pushtoken: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/getPushTokenState`, {
      ...token,
      pushtoken,
    });
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const disableNotificationApi = async (navigation: any, token: any) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/getPushTokenState`, {
      ...token,
      pushToken: "",
      status: "disabled",
    });
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const faqApi = async (navigation: any, token: any) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/misc/faq`, {
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

export const securityLogsApi = async (navigation: any, token: any) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/logs`, {
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

export const accountLimitsApi = async (navigation: any, token: any) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/profile/limits`, {
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

export const paymentAccountApi = async (navigation: any, token: any) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/payments/list`, {
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

export const checkKycStatusApi = async (navigation: any, token: any) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/kyc/checkKYCStatus`, {
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

export const initializeKycApi = async (navigation: any, token: any) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/kyc/initializeKYC`, {
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

export const paymentAccountPlatformsApi = async (
  navigation: any,
  token: any
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/payments/methods`, {
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

export const verifyMobileMoneyNumberApi = async (
  navigation: any,
  token: any,
  momoName: string,
  momoUserPhone: string,
  accountPassword: string,
  selectedUserNetwork: string,
  method: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const data = {
      ...token,
      momoName,
      momoUserPhone,
      selectedUserNetwork,
      accountPassword,
      method,
    };
    const result = await axios.post(`${BASE_URL}/payments/add`, data);
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const verifyMobileMoneyNumberOTPApi = async (
  navigation: any,
  token: any,
  momoName: string,
  momoUserPhone: string,
  accountPassword: string,
  otpCode: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/payments/verifyPayAccount`, {
      ...token,
      momoName,
      momoUserPhone,
      selectedUserNetwork: "MTN",
      accountPassword,
      otpCode,
    });
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const changeEmail = async (
  navigation: any,
  token: any,
  accountPassword: string,
  currentEmail: string,
  newEmail: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/updateEmail`, {
      ...token,
      accountPassword,
      currentEmail,
      newEmail,
    });
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const verifyChangeEmail = async (
  navigation: any,
  token: any,
  oldEmailCode: string,
  userCode: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const data = {
      ...token,
      userCode,
      oldEmailCode,
    };

    const result = await axios.post(`${BASE_URL}/account/emailCode`, data);
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const changePassword = async (
  navigation: any,
  token: any,
  currentPassword: string,
  newPassword: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/password/request`, {
      ...token,
      currentPassword,
      newPassword,
    });
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const verifyChangePassword = async (
  navigation: any,
  token: any,
  userCode: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/password/passwordCode`, {
      ...token,
      userCode,
    });
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const verifyMobileMoneyApi = async (
  navigation: any,
  token: any,
  method: string,
  momoName: string,
  momoUserPhone: string,
  selectedUserNetwork: string,
  accountPassword: string,
  otpCode: string
) => {
  const data = {
    ...token,
    method,
    momoName,
    momoUserPhone,
    selectedUserNetwork,
    accountPassword,
    otpCode,
  };
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(
      `${BASE_URL}/payments/verifyPayAccount`,
      data
    );
    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const addBankAccountApi = async (
  navigation: any,
  token: any,
  bankCode: string,
  accountPassword: string,
  userBankAccountName: string,
  userBankAccountNumber: string
) => {
  const data = {
    ...token,
    method: "bank",
    bankCode,
    userBankSwiftBic: "",
    accountPassword,
    userBankRouting: "",
    userBankAccountName,
    userBankAccountNumber,
  };

  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");

    const result = await axios.post(`${BASE_URL}/payments/add`, data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const buyAccountApi = async (navigation: any, token: any) => {
  const data = {
    ...token,
  };
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/payments/buyAccounts`, data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const sellAccountApi = async (navigation: any, token: any) => {
  const data = {
    ...token,
  };
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    console.log("List sell accounts");
    console.log("endpoint", `${BASE_URL}/payments/sellAccounts`);
    console.log(data);

    const result = await axios.post(`${BASE_URL}/payments/sellAccounts`, data);
    console.log(result.data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const reviewBuyOrderApi = async (
  navigation: any,
  token: any,
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
    ...token,
    cryptoSymbol,
    coinName,
    paymentType,
    platform,
    contract,
    amount,
    seletedMethod,
    methodType,
  };

  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const countryCode = await AsyncStorage.getItem("@userCountry");
    let url = `${BASE_URL}/payments/manual/topup`;
    if (countryCode === "CM") {
      url = `${BASE_URL}/payments/manual/review`
    }

    const result = await axios.post(url, data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const depositApprovalApi = async (
  navigation: any,
  token: any,
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
    ...token,
    cryptoSymbol,
    coinName,
    paymentType,
    platform,
    contract,
    amount,
    seletedMethod,
    methodType,
  };

  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const url = `${BASE_URL}/payments/manual/topup`;

    const result = await axios.post(url, data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const validateWithdrawalRequestApi = async (
  navigation: any,
  token: any,
  cryptoSymbol: string,
  coinName: string,
  transmissionMode: string,
  platform: string,
  contract: string,
  amount: string,
  seletedMethod: string,
  methodType: string
) => {
  const data = {
    ...token,
    cryptoSymbol,
    coinName,
    transmissionMode,
    platform,
    contract,
    amount,
    seletedMethod,
    methodType,
  };

  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    console.log("endpoint", `${BASE_URL}/account/validateWithdrawalRequest`);
    console.log(data);

    const result = await axios.post(
      `${BASE_URL}/account/validateWithdrawalRequest`,
      data
    );

    console.log(result.data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const sellConfirmationApi = async (
  navigation: any,
  token: any,
  cryptoSymbol: string,
  coinName: string,
  transmissionMode: string,
  platform: string,
  contract: string,
  amount: string,
  seletedMethod: string,
  methodType: string
) => {
  const data = {
    ...token,
    cryptoSymbol,
    coinName,
    transmissionMode,
    platform,
    contract,
    amount,
    seletedMethod,
    methodType,
  };

  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    console.log("endpoint", `${BASE_URL}/account/withdrawCash`);
    console.log("request", data);
    const result = await axios.post(`${BASE_URL}/account/withdrawCash`, data);
    console.log("response", result.data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const validateSendCryptoApi = async (
  navigation: any,
  token: any,
  cryptoSymbol: string,
  walletAddress: string,
  transmissionMode: string,
  amount: string,
  coinName: string,
  selectedNetworkFee: string,
  contract: string,
  platform: string
) => {
  const data = {
    ...token,
    cryptoSymbol,
    walletAddress,
    transmissionMode,
    amount,
    coinName,
    selectedNetworkFee,
    contract,
    platform,
  };

  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    console.log(`endpoint: ${BASE_URL}/account/validateRequest`);
    console.log("request", data);

    const result = await axios.post(
      `${BASE_URL}/account/validateRequest`,
      data
    );
    console.log("response", result.data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const maxCryptoApi = async (
  navigation: any,
  token: any,
  cryptoSymbol: string,
  platform: string
) => {
  const data = {
    ...token,
    cryptoSymbol,
    platform,
  };

  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    console.log("request", data);
    const result = await axios.post(`${BASE_URL}/account/getSendingMax`, data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const sendCryptoApi = async (
  navigation: any,
  token: any,
  cryptoSymbol: string,
  walletAddress: string,
  transmissionMode: string,
  amount: string,
  coinName: string,
  selectedNetworkFee: string,
  contract: string,
  platform: string,
  eTag: string
) => {
  const data = {
    ...token,
    cryptoSymbol,
    walletAddress,
    transmissionMode,
    amount,
    coinName,
    selectedNetworkFee,
    contract,
    platform,
    eTag,
  };

  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    console.log(data);

    const result = await axios.post(`${BASE_URL}/account/sendout`, data);
    console.log(result.data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const manageCryptoAssetApi = async (navigation: any, token: any) => {
  const data = {
    ...token,
  };

  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/coins`, data);

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const enableCryptoAssetApi = async (
  navigation: any,
  token: any,
  cryptoSymbol: string,
  platform: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/enableCurrency`, {
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

export const deactivateAccountApi = async (
  navigation: any,
  token: any,
  accountPassword: string
) => {
  try {
    const BASE_URL = await AsyncStorage.getItem("@baseUrl");
    const result = await axios.post(`${BASE_URL}/account/deactivate`, {
      ...token,
      accountPassword,
    });

    if (result.data.invalid) {
      await logoutHandler(navigation);
    }
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
