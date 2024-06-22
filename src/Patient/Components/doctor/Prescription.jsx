/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./Prescription.module.css";
import { useMutation } from "@tanstack/react-query";
import doctorService from "../../../services/doctor";
import { client } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import Modal from "../ui/Modal";
import Loader from "../ui/Loader";

function Prescription({ appointmentId, ...props }) {
  const [prescription, setPrescription] = useState();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: doctorService.writePrescription,
    onSuccess: () => {
      console.log("Submitted");
      client.invalidateQueries({
        queryKey: ["appointment", appointmentId],
        exact: true,
      });
      navigate(0);
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const prescriptionData = {
      appointmentId: appointmentId,
      prescription: prescription,
    };
    mutate(prescriptionData);
  };

  return (
    <Modal onClose={props.onHideEditForm} className={classes.modal}>
      <h2>Prescription</h2>
      <form className={classes.prescription}>
        <div className={classes.field}>
          <label htmlFor="prescription">Write a prescription</label>
          <textarea
            name="prescription"
            id="prescription"
            onInput={(e) => setPrescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" onClick={submitHandler}>
          {isPending ? <Loader/> : "Submit"}
        </button>
      </form>
    </Modal>
  );
}

export default Prescription;
