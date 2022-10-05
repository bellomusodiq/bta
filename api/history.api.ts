import axios from "axios";
import { BASE_URL } from "../CONFIG";

export const historyApi = async (
  token: string,
  historyType: string,
  transactionType?: string
) => {
  try {
    const data: { [k: string]: string } = {
      token,
      historyType,
    };
    if (transactionType) {
      data.transactionType = transactionType;
    }
    console.log(data);
    const result = await axios.post(`${BASE_URL}/account/2/transactions`, data);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
