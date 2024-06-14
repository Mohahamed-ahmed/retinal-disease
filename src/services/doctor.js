import apiService from "./api";

const doctorService = {
  getDoctorDetails: async (doctorId) => {
    return await apiService.get(`/doctor/${doctorId}`);
  },

  getProfile: async () => {
    return await apiService.get("/doctor/profile");
  },

  editProfile: async (doctorData) => {
    return await apiService.put("/doctor/profile", doctorData);
  },

  getAppointments: async () => {
    let date = new Date().toISOString().split('T')[0];
    return await apiService.get("/doctor/appointments?date="+date);
  },

  getAppointmentDetails: async ({appointmentId}) => {
    return await apiService.get(`/doctor/appointments/${appointmentId}`);
  },

  getSchedule: async () => {
    return await apiService.get("/doctor/schedule");
  },

  setSchedule: async (scheduleData) => {
    return await apiService.post("/doctor/schedule", scheduleData);
  },

  uploadAttachments: async (attachmentsData) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    return await apiService.post(
      "/doctor/upload-attachment",
      attachmentsData,
      headers
    );
  },

  writePrescription: async (prescriptionData) => {
    return await apiService.post("/doctor/prescription", prescriptionData);
  },
};

export default doctorService;
