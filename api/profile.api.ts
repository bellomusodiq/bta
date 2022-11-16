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

export const securityLogsApi = async (token: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/logs`, {
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

export const verifyChangeEmail = async (
  token: string,
  oldEmailCode: string,
  userCode: string
) => {
  try {
    const data = {
      token,
      userCode,
      oldEmailCode,
    };

    const result = await axios.post(`${BASE_URL}/account/2/emailCode`, data);
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
    const result = await axios.post(
      `${BASE_URL}/payments/2/sellAccounts`,
      data
    );

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

  try {
    const result = await axios.post(
      `${BASE_URL}/payments/2/topupSummary`,
      data
    );

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const validateWithdrawalRequestApi = async (
  token: string,
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
    token,
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
    const result = await axios.post(
      `${BASE_URL}/account/2/validateWithdrawalRequest`,
      data
    );

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const sellConfirmationApi = async (
  token: string,
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
    token,
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
    const result = await axios.post(`${BASE_URL}/account/2/withdrawCash`, data);

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const validateSendCryptoApi = async (
  token: string,
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
    token,
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
    const result = await axios.post(
      `${BASE_URL}/account/2/validateRequest`,
      data
    );

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const sendCryptoApi = async (
  token: string,
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
    token,
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
    const result = await axios.post(`${BASE_URL}/account/2/sendout`, data);

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const manageCryptoAssetApi = async (token: string) => {
  const data = {
    token,
  };

  try {
    const result = await axios.post(`${BASE_URL}/account/2/coins`, data);

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const enableCryptoAssetApi = async (
  token: string,
  cryptoSymbol: string,
  platform: string
) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/enableCurrency`, {
      token,
      cryptoSymbol,
      platform,
    });

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const deactivateAccountApi = async (
  token: string,
  accountPassword: string
) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/2/deactivate`, {
      token,
      accountPassword,
    });

    return result.data;
  } catch (e) {
    console.log(e);
  }
};
