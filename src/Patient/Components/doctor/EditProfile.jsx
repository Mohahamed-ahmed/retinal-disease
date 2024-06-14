/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import FormInput from "../ui/FormInput";
import Modal from "../ui/Modal";
import classes from "./EditProfile.module.css";
import doctorService from "../../../services/doctor";
import { useState } from "react";
import EditIcon from "../ui/EditIcon";

import profileImg from "../../../assets/profileImg.png";
import { client } from "../../../services/api";
import Loader from "../ui/Loader";

function EditProfile({ doctorData, ...props }) {
  const [formData, setFormData] = useState({
    profileImg: doctorData.profileImg || null,
    name: doctorData.name || "",
    phone: doctorData.phone || "",
    address: doctorData.address || "",
    description: doctorData.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadImage = (e) => {
    setFormData((prev) => ({
      ...prev,
      profileImg: e.target.files[0],
    }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: doctorService.editProfile,
    onSuccess: () => {
      console.log("Success");
      client.invalidateQueries("doctor-profile");
    },
  });

  const editProfileHandler = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      return;
    }
    console.log(formData);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("address", formData.address);
    data.append("phone", formData.phone);
    data.append("description", formData.description);
    data.append("profileImg", formData.profileImg);

    mutate(data);
  };

  return (
    <Modal onClose={props.onHideEditForm} className={classes.modal}>
      <h2>Edit Profile</h2>
      <form onSubmit={editProfileHandler} className={classes.form}>
        <div className={classes.fields}>
          <div className={classes.image}>
            <img
              src={doctorData.profileImg || profileImg}
              alt="Profile Image"
            />
            <label htmlFor="profileImg">
              <EditIcon />
              <input
                type="file"
                name="profileImg"
                id="profileImg"
                onChange={handleUploadImage}
              />
            </label>
          </div>
          <div className={classes.inputs}>
            <FormInput
              input={{
                id: "name",
                name: "name",
                type: "text",
                value: formData.name,
              }}
              label="Name"
              onChange={handleChange}
            />
            <FormInput
              input={{
                id: "phone",
                name: "phone",
                type: "text",
                value: formData.phone,
              }}
              label="Phone"
              onChange={handleChange}
            />
            <FormInput
              input={{
                id: "address",
                name: "address",
                type: "text",
                value: formData.address,
              }}
              label="Address"
              onChange={handleChange}
            />
            <FormInput
              input={{
                id: "description",
                name: "description",
                value: formData.description,
                type: "text",
              }}
              label="Description"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.actions}>
          <button type="submit" className={classes.submit}>
            {isPending ? <Loader className={classes.loader} /> : "Update"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default EditProfile;
