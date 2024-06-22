import "./appointment-details.css";
import ProfileIcon from "./ui/ProfileIcon";
import ScheduleIcon from "./ui/ScheduleIcon";
import LocationIcon from "./ui/locationIcon";
import NotesIcon from "./ui/notesIcon";
import TimeIcon from "./ui/timeIcon";
function AppointmentDetails({ data }) {
  let content;
  let notes;

  if (data.prescription === null) {
    content = <p>there is no prescription yet </p>;
  } else {
    content = <p>{data.prescription}</p>;
  }
  if (data.notes === null) {
    notes = <p>there is no notes yet </p>;
  } else {
    notes = <p>{data.notes}</p>;
  }

  console.log(data);
  return (
    <div className="appointment-container">
      <div className="app-details">
        <h3>Appointment Details</h3>
        <p className="c">
          <ScheduleIcon className="color"></ScheduleIcon>
          <p>{data.date}</p>
        </p>
        <p className="c">
          <TimeIcon></TimeIcon>
          <p>{data.time}</p>
        </p>
        <p className="c">
          <NotesIcon className="color"></NotesIcon>
          <p className="notes">{notes}</p>
        </p>
      </div>
      <div className="text">
        <NotesIcon className="color"></NotesIcon>
        <div className="v">
          <h3>Reasons For Appointment</h3>
          <p>Routine Eye Examination.</p>
        </div>
      </div>
      <hr></hr>
      <div className="text2">
        <ProfileIcon className="color"></ProfileIcon>
        <div className="v">
          <h3>Doctor information</h3>
          <p>{data.Doctor.name}</p>
          <p>{data.Doctor.phone}</p>
        </div>
      </div>
      <hr></hr>
      <div className="text3">
        <LocationIcon className="color"></LocationIcon>
        <div className="v">
          <h3>Clinic Location</h3>
          <p>123 Main St, Anytown USA 12345 {data.Doctor.address}</p>
        </div>
      </div>
      <hr></hr>
      <div className="text3">
        <NotesIcon className="color"></NotesIcon>
        <div className="v">
          <h3>Prescription</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDetails;
