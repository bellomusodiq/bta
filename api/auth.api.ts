import axios from "axios";
import { BASE_URL } from "../CONFIG";

export const loginApi = async (username: string, password: string) => {
  try {
    const result = await axios.post(`${BASE_URL}/account/2/signIn`, {
      username,
      password,
    });

    return result.data;
  } catch (e) {
    console.log(e);
  }
};
