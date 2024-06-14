import "./App.css";
import Home from "./Patient/Pages/Home";
import Root from "./Patient/Pages/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage, { action as signUpAction } from "./Patient/Pages/SignUpPage";
import LoginPage, { action as loginAction } from "./Patient/Pages/loginPage";
// import AppointmentForm from './Patient/Components/AppointmentForm'
// import Form from './Patient/Components/AppointmentForm'
import ContactUs from "./Patient/Components/ContactUs";
import PatientAppointments from "./Patient/Components/PatientAppointments";
// import PatientProfile from './Patient/Components/patientProfile'
import DoctorHome from "./Patient/Components/DoctorHomeContent";
import ColorBlindnessTest from "./Patient/Pages/color-blindenss-page";
import MakeAppointments, {
  loader as getDoctorData,
} from "./Patient/Pages/make-appointments";
import PatientProfilePage, {
  loader as getPatientData,
} from "./Patient/Pages/Patient-profile";
import DoctorAppointments from "./Patient/Pages/DoctorAppointments";
import AppointmentDetails from "./Patient/Components/doctor/AppointmentDetails";

import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./services/api";
import DoctorProfile from "./Patient/Pages/DoctorProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path: "/signup",
          element: <SignUpPage></SignUpPage>,
          action: signUpAction,
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
          action: loginAction,
        },
        {
          path: "/MakeAppointments",
          children: [
            {
              index: true,
            },
            {
              path: ":doctorId",
              element: <MakeAppointments></MakeAppointments>,
              loader: getDoctorData,
              id: "doctor-details",
            },
          ],
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>,
        },
        {
          path: "/appointments",
          element: <PatientAppointments></PatientAppointments>,
        },
        {
          path: "/profile",
          element: <PatientProfilePage></PatientProfilePage>,
          loader: getPatientData,
          id: "patient-data",
        },
        {
          path: "/doctor",
          children: [
            {
              index: true,
              element: <DoctorHome></DoctorHome>,
            },
            {
              path: "profile",
              element: <DoctorProfile />,
            },
            {
              path: "test",
              element: <ColorBlindnessTest></ColorBlindnessTest>,
            },
            {
              path: "appointments",
              element: <DoctorAppointments />,
            },
            {
              path: "appointments/:appointmentId",
              element: <AppointmentDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
