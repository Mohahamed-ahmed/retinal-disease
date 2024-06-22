import { Link } from "react-router-dom";
import classes from "./Appointments.module.css";
import { useQuery } from "@tanstack/react-query";
import Flatpickr from "react-flatpickr";
import doctorService from "../../../services/doctor";
import { useState } from "react";
import { client } from "../../../services/api";
import Loader from "../ui/Loader";
import ProfileIcon from "../ui/ProfileIcon";
import ScheduleIcon from "../ui/ScheduleIcon";
import TimeIcon from "../ui/TimeIcon";

function Appointments() {
  const [date, setDate] = useState();

  const { data, isPending } = useQuery({
    queryKey: ["appointments", date],
    queryFn: ({ signal }) => doctorService.getAppointments({ signal, date }),
  });

  let content;

  if (data?.data) {
    if (data.data.appointments.count === 0) {
      content = <p className={classes.center}>No Appointments This Day.</p>;
    } else {
      let appointments = data.data.appointments.rows;
      console.log(appointments);
      content = appointments.map((appointment) => (
        <div className={classes.card} key={appointment.id}>
          <div className={classes.left}>
            <div className={classes.element}>
              <ProfileIcon />
              <p className={classes.name}>{appointment.Patient.name}</p>
            </div>
            <div className={classes.element}>
              <ScheduleIcon />
              <p className={classes.date}>{appointment.date}</p>
            </div>
            <div className={classes.element}>
              <TimeIcon />
              <p className={classes.date}>{appointment.time.slice(0, 5)}</p>
            </div>
            <div className={classes.tag}>
              <p
                className={
                  appointment.status == "pending" ? classes.pending : null
                }
              >
                {appointment.status}
              </p>
            </div>
          </div>
          <div className={classes.right}>
            <p className={classes.details}>
              <Link to={`${appointment.id}`}>Details</Link>
            </p>
          </div>
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
        <div className={classes.headContent}>
          <h1 className={classes.title}>Appointments</h1>
          <p className={classes.count}>
            ({data?.data?.appointments.count || 0})
          </p>
        </div>
        <div className={classes.date}>
          <Flatpickr
            placeholder="Select a date"
            options={{
              dateFormat: "Y-m-d",
            }}
            onChange={(e) => {
              client.invalidateQueries("appointments");
              setDate(() => e[0]);
            }}
          />
        </div>
      </div>
      {isPending ? (
        <div className={classes.loader}>
          <Loader />
        </div>
      ) : (
        <div className={classes.content}>{content}</div>
      )}
    </div>
  );
}

export default Appointments;
