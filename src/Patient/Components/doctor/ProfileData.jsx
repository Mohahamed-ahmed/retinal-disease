/* eslint-disable react/prop-types */
import classes from "./ProfileData.module.css";
import profileImg from "../../../assets/profileImg.png";
import EditIcon from "../ui/EditIcon";
import { useState } from "react";
import EditProfile from "./EditProfile";

function ProfileData({ doctor }) {
  const [showEditForm, setShowEditForm] = useState(false);

  const currentdate = new Date();
  const date = new Date(doctor?.DOB);

  let age = currentdate.getFullYear() - date.getFullYear();
  const monthDifference = currentdate.getMonth() - date.getMonth();
  const dayDifference = currentdate.getDate() - date.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  const showEditFormHandler = () => {
    setShowEditForm(() => true);
  };

  const hideEditFormHandler = () => {
    setShowEditForm(() => false);
  };

  return (
    <div className={classes.container}>
      {showEditForm && (
        <EditProfile onHideEditForm={hideEditFormHandler} doctorData={doctor} />
      )}
      <EditIcon className={classes.edit} onClick={showEditFormHandler} />
      <div className={classes.left}>
        <div className={classes.img}>
          <img src={doctor?.profileImg || profileImg} alt="Profile Image" />
        </div>
        <div className={classes.field}>
          <p>{doctor?.name}</p>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.field}>
          <p className={classes.label}>Age</p>
          <p>{age.toString()}</p>
        </div>
        <div className={classes.field}>
          <p className={classes.label}>Phone</p>
          <p>{doctor?.phone}</p>
        </div>
        <div className={classes.field}>
          <p className={classes.label}>Address</p>
          <p>{doctor?.address}</p>
        </div>
        <div className={classes.field}>
          <p className={classes.label}>Description</p>
          <p>{doctor?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileData;
