import authService from "../services/auth";
import doctorService from "../services/doctor";
import patientService from "../services/patient";
import { uiActions } from "./ui-slice";
import { userActions } from "./user-slice";

export const getProfile = (role) => {
  return async (dispacth) => {
    let response;
    if (role === "doctor") {
      response = await doctorService.getProfile();
    } else {
      response = await patientService.getProfile();
    }
    if (response.data) {
      dispacth(userActions.setUserData(response.data));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await authService.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.href = "/login";
      return;
    } catch (error) {
      dispatch(
        uiActions.addNotification({
          status: "Error",
          title: "Error",
          message: "Something went wrong",
        })
      );
    }
  };
};
