import axios from "axios";
import {  BASE_URL } from "../constants/api";


const axiosOptions = {
  baseURL: BASE_URL,
  withCredentials: true, 
};
const instance = axios.create(axiosOptions);

// instance.interceptors.request.use((config) => {

//   if (access_token) {
//     config.headers[AUTHORIZATION] = `Bearer ${access_token}`;
//   }
//   return config;
// });

export default instance;
