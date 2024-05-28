import { useParams } from "react-router-dom";
import classes from "./AppointmentDetails.module.css";
import Prescription from "./Prescription";
import { useQuery } from "@tanstack/react-query";
import doctorService from "../../../services/doctor";

// const appointment = {
//   id: "1",
//   date: "2024-05-25",
//   time: "14:00",
//   prescription: "",
//   images: [],
//   status: "pending",
//   name: "Mohamed Ali",
//   address: "Benha",
//   DOB: "2002-09-1",
// };

function AppointmentDetails() {
  const appointmentId = useParams().appointmentId;

  const { data, isPending } = useQuery({
    queryKey: ["appointment", appointmentId],
    queryFn: ({ signal }) =>
      doctorService.getAppointmentDetails({ signal, appointmentId }),
  });

  let content;
  if (data?.data) {
    let appointment = data.data.appointment;
    appointment = {
      ...appointment,
      date: appointment.date.split("T")[0],
      time: appointment.time.slice(0, 5),
    };
    console.log(appointment);
    content = (
      <>
        <div className={classes.left}>
          <div className={classes["app-details"]}>
            <h3 className={classes.title}>Appointment Details</h3>
            <div className={classes.info}>
              <p>ID</p>
              <p>{appointment.id}</p>
            </div>
            <div className={classes.info}>
              <p>Date</p>
              <p>{appointment.date}</p>
            </div>
            <div className={classes.info}>
              <p>Time</p>
              <p>{appointment.time}</p>
            </div>
            <div className={classes.info}>
              <p>Status</p>
              <p>{appointment.status}</p>
            </div>
          </div>
          <div className={classes["patient-details"]}>
            <h3 className={classes.title}>Patient Details</h3>
            <div className={classes.info}>
              <p>Name</p>
              <p>{appointment.name}</p>
            </div>
            <div className={classes.info}>
              <p>Address</p>
              <p>{appointment.address}</p>
            </div>
            <div className={classes.info}>
              <p>DOB</p>
              <p>{appointment.DOB}</p>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          {appointment.prescription ? (
            <>
              <h3 className={classes.title}>Prescription</h3>
              <p>{appointment.prescription}</p>
            </>
          ) : (
            <Prescription appointmentId={appointment.id} />
          )}
        </div>
      </>
    );
  }

  if (isPending) {
    content = <p>Loading...</p>;
  }

  return <div className={classes.container}>{content}</div>;
}

export default AppointmentDetails;
