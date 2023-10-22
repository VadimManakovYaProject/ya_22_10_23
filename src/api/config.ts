import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_GATEWAY}/api`;

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export default instance;