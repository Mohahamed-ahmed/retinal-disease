/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./Profile.module.css";
import ProfileIcon from "../ui/ProfileIcon";
import ScheduleIcon from "../ui/ScheduleIcon";
import LogoutIcon from "../ui/LogoutIcon";
import Schedule from "./Schedule";
import ProfileData from "./ProfileData";
import Loader from "../ui/Loader";

function Profile({ scheduleData, doctorData, isPending }) {
  const [selected, setSelected] = useState("");
  let content;

  if (selected === "schedule" && !isPending) {
    content = <Schedule schedule={scheduleData?.schedule} />;
  } else {
    console.log(doctorData);
    content = <ProfileData doctor={doctorData} />;
  }

  if (isPending) {
    content = <Loader className={classes.loader} />;
  }
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <ul className={classes["icon-container"]}>
          <li
            className={`${!selected ? classes.active : null}`}
            onClick={() => setSelected("")}
          >
            <div className={classes.icon}>
              <ProfileIcon />
            </div>
            <p>Profile</p>
          </li>
          <li
            className={`${selected === "schedule" ? classes.active : null}`}
            onClick={() => setSelected("schedule")}
          >
            <div className={classes.icon}>
              <ScheduleIcon />
            </div>
            <p>Schedule</p>
          </li>
          <li>
            <div className={classes.icon}>
              <LogoutIcon />
            </div>
            <p>Logout</p>
          </li>
        </ul>
      </div>
      <div className={classes.right}>{content || <Loader />}</div>
    </div>
  );
}

export default Profile;
