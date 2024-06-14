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

const refreshToken = async () => {
  try {
    const response = await axios.get(
      "https://retinal-diseases-diagnosis-system.vercel.app/auth/refresh-token",
      {
        withCredentials: true,
      }
    );
    const newAccessToken = response.data.accessToken;
    if (newAccessToken) {
      localStorage.setItem("token", newAccessToken);
    }
    return newAccessToken;
  } catch (error) {
    // Handle the error, redirecting to the login page
    console.error("Failed to refresh token:", error);
    localStorage.removeItem("token");
    window.location.href = "/login";
    return null;
  }
};

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
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.data.message === "jwt expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      }
    }
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
