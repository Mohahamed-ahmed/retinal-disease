import { useParams } from "react-router-dom";
import classes from "./AppointmentDetails.module.css";
import Prescription from "./Prescription";
import { useQuery } from "@tanstack/react-query";
import doctorService from "../../../services/doctor";
import EditIcon from "../ui/EditIcon";
import { useState } from "react";

function AppointmentDetails() {
  const appointmentId = useParams().appointmentId;
  const [showPrescription, setShowPrescription] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const { data, isPending } = useQuery({
    queryKey: ["appointment", appointmentId],
    queryFn: ({ signal }) =>
      doctorService.getAppointmentDetails({ signal, appointmentId }),
  });

  const handleShowPrescription = () => {
    setShowPrescription(() => true);
  };

  const handleShowNotes = () => {
    setShowNotes(() => true);
  };

  const handleHideForm = () => {
    setShowNotes(() => false);
    setShowPrescription(() => false);
  };

  let content;
  if (data?.data) {
    let appointment = data.data;
    const currentdate = new Date();
    const date = new Date(appointment.Patient.DOB);

    let age = currentdate.getFullYear() - date.getFullYear();
    const monthDifference = currentdate.getMonth() - date.getMonth();
    const dayDifference = currentdate.getDate() - date.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    appointment = {
      ...appointment,
      age: age,
      time: appointment.time.slice(0, 5),
    };
    content = (
      <>
        <div className={classes.left}>
          <div className={classes["app-details"]}>
            <h3 className={classes.title}>Appointment Details</h3>
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
              <p className={appointment.status == 'pending' ? classes.pending : classes.done}>{appointment.status}</p>
            </div>
          </div>
          <div className={classes["patient-details"]}>
            <h3 className={classes.title}>Patient Details</h3>
            <div className={classes.info}>
              <p>Name</p>
              <p>{appointment.Patient.name}</p>
            </div>
            <div className={classes.info}>
              <p>Address</p>
              <p>{appointment.Patient.address}</p>
            </div>
            <div className={classes.info}>
              <p>Age</p>
              <p>{appointment.age}</p>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.element}>
            <h3 className={classes.title}>Prescription</h3>
            <p>{appointment.prescription || "No prescription to display"}</p>
            {!appointment.prescription && (
              <EditIcon onClick={handleShowPrescription} />
            )}
          </div>
          <div className={classes.element}>
            <h3 className={classes.title}>Notes</h3>
            <p>{appointment.notes || "No notes to display"}</p>
            {!appointment.notes && <EditIcon onClick={handleShowNotes} />}
          </div>
          {showPrescription && (
            <Prescription
              appointmentId={appointment.id}
              onHideEditForm={handleHideForm}
            />
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
