import contact from "../../assets/13105774_5143151.jpg";
import "./contactUs.css";
import { useState } from "react";
import { getAuth } from "../util/auth";
import { json } from "react-router-dom";
import Loader from "./ui/Loader";

function ContactUs() {
  const [title, Settitle] = useState("");
  const [description, Setdescription] = useState("");
  const [isLoading, SetIsLoading] = useState(false);
  const [message, SetMessage] = useState(false);

  const titleChangeHandler = (event) => {
    Settitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    Setdescription(event.target.value);
  };

  const data = {
    title: title,
    description: description,
  };

  const submitContactHandler = async (event) => {
    event.preventDefault();
    const token = getAuth();

    SetIsLoading(true);

    const response = await fetch(
      "https://retinal-diseases-diagnosis-system.vercel.app/auth/contact",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw json({ message: "cannot send the request" }, { status: 500 });
    } else {
      console.log("done");
    }
    SetIsLoading(false);
    SetMessage(true);
  };

  return (
    <div className="contact-container">
      <div className="first-part">
        <h2>Contact us</h2>
        <img src={contact} alt="" />
      </div>
      <form className="contact-form" onSubmit={submitContactHandler}>
        <div className="text">
          <h2>Get In Touch</h2>
          <p> you can reach us anytime</p>
        </div>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="input-field"
            id="title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="input-container">
          <label htmlFor="des">Description</label>
          <textarea
            id="des"
            className="input-field "
            onChange={descriptionChangeHandler}
          ></textarea>
        </div>
        <div className="contactUsButon">
          <button type="submit" className="contactButton">
            Submit
          </button>
        </div>
        {isLoading && <Loader></Loader>}
        {message && <p>your message have been sent succssefully</p>}
      </form>
    </div>
  );
}

export default ContactUs;
