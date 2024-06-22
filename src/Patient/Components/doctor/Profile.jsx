/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./Profile.module.css";
import ProfileIcon from "../ui/ProfileIcon";
import ScheduleIcon from "../ui/ScheduleIcon";
import LogoutIcon from "../ui/LogoutIcon";
import Schedule from "./Schedule";
import ProfileData from "./ProfileData";
import Loader from "../ui/Loader";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/user-actions";

function Profile({ scheduleData, doctorData, isPending }) {
  const [selected, setSelected] = useState("");
  let content = <ProfileData doctor={doctorData} />;

  if (selected === "schedule" && !isPending) {
    content = <Schedule schedule={scheduleData?.schedule} />;
  }

  if (isPending) {
    content = <Loader className={classes.loader} />;
  }

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

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
          <li onClick={logoutHandler}>
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
