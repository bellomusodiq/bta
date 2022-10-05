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
