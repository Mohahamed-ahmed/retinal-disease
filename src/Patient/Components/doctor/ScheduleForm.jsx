import { useState } from "react";
import Flatpickr from "react-flatpickr";

import classes from "./ScheduleForm.module.css";
import { useMutation } from "@tanstack/react-query";
import doctorService from "../../../services/doctor";
import { client } from "../../../services/api";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function ScheduleForm() {
  const [selectedDay, setSelectedDay] = useState("Sunday");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const { mutate } = useMutation({
    mutationFn: doctorService.setSchedule,
    onSuccess: () => {
      console.log("Updated");
      client.invalidateQueries("doctor-schedule");
    },
  });

  const setScheduleHandler = (e) => {
    e.preventDefault();
    if (!selectedDay || !startTime || !endTime) {
      return;
    }
    const scheduleData = {
      day: selectedDay,
      startTime,
      endTime,
    };
    mutate(scheduleData);
  };

  const selectInput = days.map((day) => (
    <div
      className={classes.value}
      key={day}
      onClick={() => setSelectedDay(day)}
    >
      <input
        className={classes.input}
        type="radio"
        id={day}
        value={day}
        name={day}
      />
      <p className={classes.text}>{day}</p>
    </div>
  ));

  const selectList = days.map((day) => (
    <li key={day}>
      <label className={classes.option} htmlFor={day} aria-hidden="aria-hidden">
        {day}
      </label>
    </li>
  ));

  return (
    <form className={classes.form} onSubmit={setScheduleHandler}>
      <div className={classes["select-box"]}>
        <div className={classes.current} tabIndex="1">
          <div className={classes.value}>
            <input
              className={classes.input}
              type="radio"
              id={selectedDay}
              value={selectedDay}
              name={selectedDay}
              defaultChecked
            />
            <p className={classes.text}>{selectedDay}</p>
          </div>
          {selectInput}
          <img
            className={classes.icon}
            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Arrow Icon"
            aria-hidden="true"
          />
        </div>
        <ul className={classes.list}>{selectList}</ul>
      </div>
      <div className={classes.time}>
        <div className={classes.start}>
          <Flatpickr
            placeholder="Start Time"
            options={{
              noCalendar: true,
              enableTime: true,
              dateFormat: "h:i K",
              defaultHour: 10,
            }}
            onChange={(e) => setStartTime(e[0].toTimeString().slice(0, 5))}
          />
        </div>
        <div className={classes.end}>
          <Flatpickr
            placeholder="End Time"
            options={{
              noCalendar: true,
              enableTime: true,
              dateFormat: "h:i K",
              defaultHour: 16,
            }}
            onChange={(e) => setEndTime(e[0].toTimeString().slice(0, 5))}
          />
        </div>
      </div>
      <div className={classes["submit-btn"]}>
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default ScheduleForm;
