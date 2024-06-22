import AppointmentDetails from "../Components/appointment-details";
import { json, useRouteLoaderData } from "react-router-dom";
import { getAuth } from "../util/auth";

function AppointmentDetailsPage() {
  const data = useRouteLoaderData("appointment-details");
  console.log(data);

  return (
    <AppointmentDetails data={data.appointmentDetails}></AppointmentDetails>
  );
}

export default AppointmentDetailsPage;

export async function loader({ request, params }) {
  const token = getAuth();

  const id = params.appointmentId;

  const response = await fetch(
    "https://retinal-diseases-diagnosis-system.vercel.app/patient/appointments/" +
      id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  if (!response.ok) {
    throw json({ message: "cant pull appontment details" }, { status: 500 });
  } else {
    return response;
  }
}
