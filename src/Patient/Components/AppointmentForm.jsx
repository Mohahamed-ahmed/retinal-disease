/* eslint-disable react/prop-types */
import Flatpickr from "react-flatpickr";
import { useState, useCallback } from "react";
import { useParams, json } from "react-router-dom";
import { getAuth } from "../util/auth";
import "./appointment.css";
import PhoneIcon from "./ui/PhoneIcon";
import LocationIcon from "./ui/locationIcon";
import Loader from "./ui/Loader";
import LocationIcon2 from "./ui/location2";
// import appoinment from '../../assets/Screensho2t 2024-03-24 144615.png'

function AppForm({ datadoc, doctorId }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isLoading, SetIsLoading] = useState(false);
  const [isError, SetError] = useState(false);

  const [availableHours, SetavailableAppointments] = useState([]);
  const [appointment, setAppointment] = useState("");
  const [succsessfullMessage, SetsuccsessfullMessage] = useState("");

  console.log(datadoc);

  // let {datadoc} = prop;
  // let {doctorId} = prop;

  // const docid = doctorId

  // console.log(tostring(datadoc))

  // const token = getAuth()
  // const token = localStorage.getItem('token')
  // console.log(token)

  const token = getAuth();

  const changeDateHandler = async (selectedDate) => {
    // setDate(selectedDate);
    const appointmentDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );

    const data = {
      date: appointmentDate.toISOString().split("T")[0],
      doctorId: "dce9adfd-3299-4173-95b6-9d005390a2d7",
    };

    setDate(appointmentDate.toISOString().split("T")[0]);

    // console.log(date)
    // console.log(appointmentDate)

    console.log("token", token);

    if (!token) {
      console.error("No token found. Please ensure you are logged in.");
      return;
    }

    SetIsLoading(true);

    const response = await fetch(
      "https://retinal-diseases-diagnosis-system.vercel.app/patient/get-available-appointments",
      {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errordata = await response.json();
      SetError(errordata.errors[0].msg);
      console.log(errordata.errors[0].msg);
      // throw json(
      //   {message:'cant get the data'},
      //   {status:500}
      // )
      if (response.status === 403) {
        console.error(
          "Forbidden: You do not have permission to access this resource."
        );
      } else {
        console.error("Error:", response.statusText);
      }
      throw new Error("Cannot get the data");
    } else {
      // console.log(await response.json())
      const avialbleAppointments = await response.json();

      SetIsLoading(false);
      SetavailableAppointments(avialbleAppointments.availableAppointments);
      // console.log(avialbleAppointments.availableAppointments)
      // return response
    }
  };

  const handleAppointment = useCallback(function handleAppointment(
    selectedAppointment
  ) {
    setAppointment(selectedAppointment);
    console.log(selectedAppointment);
  },
  []);

  const submitAppointmentHandler = async (event) => {
    event.preventDefault();

    const chosenAppointment = {
      doctorId: "dce9adfd-3299-4173-95b6-9d005390a2d7",
      date: date,
      time: appointment,
    };
    console.log(chosenAppointment);

    const response = await fetch(
      "https://retinal-diseases-diagnosis-system.vercel.app/patient/make-appointment",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chosenAppointment),
      }
    );

    if (!response.ok) {
      const errordata = await response.json();
      console.log(errordata);
      // throw json(
      //   {message:'cant get the data'},
      //   {status:500}
      // )
      if (response.status === 403) {
        console.error(
          "Forbidden: You do not have permission to access this resource."
        );
      } else {
        console.error("Error:", response.statusText);
      }
      throw new Error("Cannot get the data");
    } else {
      const successMessage = await response.json();
      SetsuccsessfullMessage(successMessage.message);
    }
  };

  return (
    <div className="appoinment-container">
      <div className="appoinment-img">
        <div className="box">
          <h2>Doctor Personel Data</h2>
          <div className="doctor-details">
            <div className="image">
              <img src={datadoc.profileImg}></img>
              <p>{datadoc.name}</p>
              <p>{datadoc.description}</p>
            </div>
            <div className="text">
              <p>
                <LocationIcon2 />
                {datadoc.address}
              </p>
              <p>
                <PhoneIcon />
                {datadoc.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      <form className="appointmentForm" onSubmit={submitAppointmentHandler}>
        {/* <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" className="input-field" id="name" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" className="input-field" id="email" />
          </div> */}
        <div className="input-container">
          <label htmlFor="birthdate">date</label>
          <Flatpickr
            data-input
            className="form-control2"
            value={date}
            placeholder={date}
            onChange={(selectedDate) => changeDateHandler(selectedDate[0])}
            options={{
              enableTime: false,
              dateFormat: "Y-m-d",
              altInput: true,
              altFormat: "Y-m-d",
            }}
          />
        </div>
        {!succsessfullMessage ? (
          <div className="input-container">
            <label htmlFor="birthdate">time</label>
            {isError && <p className="error">{isError}</p>}
            {isLoading ? (
              <Loader></Loader>
            ) : (
              <div className="hours-container">
                {availableHours.map((hours) => (
                  <p key={hours}>
                    <button
                      onClick={() => handleAppointment(hours)}
                      type="button"
                      className="hours-button"
                    >
                      {hours}
                    </button>
                  </p>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p>{succsessfullMessage}</p>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AppForm;
