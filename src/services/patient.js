import apiService from "./api";

const patientService = {
  getProfile: async () => {
    return await apiService.get("/patient/profile");
  },
};

export default patientService;
