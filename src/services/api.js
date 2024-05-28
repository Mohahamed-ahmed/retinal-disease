import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

// react query client
export const client = new QueryClient();

// Create an Axios instance with default configurations
const apiClient = axios.create({
  baseURL: "https://retinal-diseases-diagnosis-system.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    let customError = {
      info: error.response?.data || "Something went wrong",
      code: error.response?.status || 500,
    };
    return Promise.reject(customError);
  }
);

const apiService = {
  // GET request
  get: async (url, params = {}) => {
    try {
      const response = await apiClient.get(url, { params });
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  // POST request
  post: async (url, data, headers = {}) => {
    try {
      const response = await apiClient.post(url, data, { headers });
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  // PUT request
  put: async (url, data, headers = {}) => {
    try {
      const response = await apiClient.put(url, data, { headers });
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  // PATCH request
  patch: async (url, data, headers = {}) => {
    try {
      const response = await apiClient.patch(url, data, { headers });
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  // DELETE request
  delete: async (url) => {
    try {
      const response = await apiClient.delete(url);
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },
};

export default apiService;
