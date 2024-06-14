import { Link } from "react-router-dom";
import classes from "./Appointments.module.css";
import { useQuery } from "@tanstack/react-query";
import doctorService from "../../../services/doctor";

function Appointments() {
  const { data, isPending } = useQuery({
    queryKey: ["appointments"],
    queryFn: ({ signal }) => doctorService.getAppointments({ signal }),
  });

  let content;

  if (data?.data) {
    if (data.data.appointments.count === 0) {
      content = <p className={classes.center}>No appointments for today.</p>;
    } else {
      let appointments = data.data.appointments.rows;
      console.log(appointments);
      content = appointments.map((appointment) => (
        <div className={classes.card} key={appointment.id}>
          <p className={classes.time}>{appointment.time}</p>
          <p className={classes.status}>{appointment.status}</p>
          <p className={classes.details}>
            <Link to={`${appointment.id}`}>Details</Link>
          </p>
        </div>
      ));
    }
  }

  if (isPending) {
    content = <p>Loading...</p>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h1 className={classes.title}>Appointments for today</h1>
        <p className={classes.count}>
          Total ({data?.data?.appointments.count || 0})
        </p>
      </div>
      <div className={classes.content}>{content}</div>
    </div>
  );
}

export default Appointments;
