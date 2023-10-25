import axios from "axios";

export interface ServerResponse<T> {
  status: number;
  code: string;
  successMessage: string;
  responseObject: T;
}

export const axiosClient = axios.create({
  baseURL: `${process.env.API_HOST}/`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://coffee-api.snaps.com",
  },
});
