import axios, { AxiosError } from "axios";

export abstract class Utils {
  public static sleep(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
  public static isAxiosError<TResponseType>(
    error: unknown
  ): error is AxiosError<TResponseType> {
    return axios.isAxiosError(error);
  }
}

export default Utils;
