/* eslint-disable react/prop-types */
import classes from "./Schedule.module.css";
import ScheduleForm from "./ScheduleForm";

function Schedule({ schedule }) {
  const content = schedule.map((s) => (
    <div className={classes.day} key={s.day}>
      <h3>{s.day.slice(0, 3)}</h3>
      <div className={classes.hours}>
        <p>{s.startTime.slice(0, 5)}</p>
        <p>{s.endTime.slice(0, 5)}</p>
      </div>
    </div>
  ));

  return (
    <div className={classes.container}>
      <div>
        <p className={classes.title}>Current Schedule</p>
        <div className={classes.current}>
          {content || "Start adding your working hours."}
        </div>
      </div>
      <div className={classes.set}>
        <p className={classes.title}>Update Schedule</p>
        <ScheduleForm />
      </div>
    </div>
  );
}

export default Schedule;
