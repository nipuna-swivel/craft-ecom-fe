import axios from "axios";
import { store } from "@/store";
import { logOut } from "@/features/auth/authSlice";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    // Modify the config object to set headers
    config.headers["Authorization"] = `Bearer ${state.auth.accessToken}`;
    // You can set other headers or modify existing ones as needed
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // if access token is expired or invalid then log out
      store.dispatch(logOut());
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export { axiosInstance as axios };
