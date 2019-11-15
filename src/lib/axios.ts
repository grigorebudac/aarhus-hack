import axios from "axios";
import ENV_CONFIG from "src/config/env";

const axiosInstance = axios.create({
  baseURL: ENV_CONFIG.API_URL
});

export default axiosInstance;
