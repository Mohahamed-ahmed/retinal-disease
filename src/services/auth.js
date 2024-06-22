import apiService from "./api";

const authService = {
  login: async (loginData) => {
    return await apiService.post("/auth/login", loginData);
  },
  signUp: async (signUpData) => {
    return await apiService.post("/auth/signup", signUpData);
  },
  logout: async () => {
    return await apiService.post("/auth/logout");
  },
};

export default authService;
