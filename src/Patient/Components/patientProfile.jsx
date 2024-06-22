import { useState } from "react";
import "./patientProfile.css";
import profile from "../../assets/WhatsApp Image 2024-03-22 at 07.32.21_23399fff.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Form, json, redirect, useNavigate } from "react-router-dom";
import prof from "../../assets/prof3.jpg";
import { getAuth } from "../util/auth";
import Loader from "./ui/Loader";

function PatientProfile(prop) {
  const navigate = useNavigate();

  let { patientData } = prop;
  const currentdate = new Date();
  const date = new Date(patientData.DOB);

  let age = currentdate.getFullYear() - date.getFullYear();
  const monthDifference = currentdate.getMonth() - date.getMonth();
  const dayDifference = currentdate.getDate() - date.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  const [Clicked, SetIsClicked] = useState(false);
  const [name, SetName] = useState(patientData.name);
  const [phone, SetPhone] = useState(patientData.phone);
  const [address, SetAddress] = useState(patientData.Address);
  const [aged, SetAge] = useState(patientData.DOB);
  const [isLoading, SetIsLoading] = useState(false);
  const [message, SetMessage] = useState(false);

  const changeNameHandler = (event) => {
    SetName(event.target.value);
  };
  const changePhoneHandler = (event) => {
    SetPhone(event.target.value);
  };
  const changeAddressHandler = (event) => {
    SetAddress(event.target.value);
  };
  const changeAgeHandler = (event) => {
    SetAge(event.target.value);
  };

  const profileDate = {
    name: name,
    phone: phone,
    address: address,
    age: aged,
  };

  const clickedHandler = () => {
    SetIsClicked(true);
  };
  const saveHandler = () => {
    SetIsClicked(false);
  };

  const EditProfileHandler = async (event) => {
    event.preventDefault();
    const token = getAuth();

    SetIsLoading(true);

    const response = await fetch(
      "https://retinal-diseases-diagnosis-system.vercel.app/patient/profile",
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileDate),
      }
    );
    if (!response.ok) {
      throw new json({ message: "cant get appointments" }, { status: 500 });
    }
    // SetIsClicked(false);
    navigate("/profile", { replace: true });
    // return response
    SetIsLoading(false);
    SetMessage(true);
  };

  return (
    <div className="profContainer">
      <div className="left-side">
        <div className="image-container">
          <div className="image">
            <img src={prof}></img>
          </div>
        </div>
        <div className="buttons-group">
          <div className="edit-div">
            <button onClick={clickedHandler} className="profEditButton">
              <FontAwesomeIcon icon={faPenToSquare} />
              Edit Profile
            </button>
          </div>
          <div className="logout-div">
            <button className="proflogOutButton">
              <FontAwesomeIcon icon={faPenToSquare} />
              LogOut
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
      {Clicked ? (
        <div className="profile__form__group">
          <h2 className="formHead">You Can Edit Your Data Down There</h2>
          <form onSubmit={EditProfileHandler}>
            <div className="firstPart">
              <div className="input">
                <input
                  name="fullname"
                  className="profile__form__field"
                  type="text"
                  id="fullname"
                  placeholder="FullName"
                  onChange={changeNameHandler}
                  defaultValue={patientData ? patientData.name : ""}
                />
                <label htmlFor="fullname" className="profile__form__label">
                  FullName:
                </label>
              </div>
              <div className="input">
                <input
                  name="phone"
                  className="profile__form__field"
                  type="number"
                  id="phone"
                  placeholder="phone number"
                  onChange={changePhoneHandler}
                  defaultValue={patientData ? patientData.phone : ""}
                />
                <label htmlFor="phone" className="profile__form__label">
                  phone Number:
                </label>
              </div>
            </div>
            <div className="secondPart">
              <div className="input">
                <input
                  name="address"
                  className="profile__form__field"
                  type="text"
                  id="address"
                  placeholder="address"
                  onChange={changeAddressHandler}
                  defaultValue={patientData ? patientData.address : ""}
                />
                <label htmlFor="address" className="profile__form__label">
                  Address:
                </label>
              </div>
              <div className="input">
                <input
                  name="age"
                  className="profile__form__field"
                  type="text"
                  id="age"
                  placeholder="Age"
                  onChange={changeAgeHandler}
                  defaultValue={patientData ? age : ""}
                />
                <label htmlFor="age" className="profile__form__label">
                  Age:
                </label>
              </div>
            </div>
            <div className="con">
              <button className="saveButton" type="submit">
                Save Changes
              </button>
            </div>
          </form>
          {isLoading && <Loader></Loader>}
          {message && (
            <div className="messages">
              <p>your data have been updated successfully</p>
              <p>you can now refresh the page to see the changes</p>
            </div>
          )}
        </div>
      ) : (
        <div className="content">
          <h2>Your Personal Data</h2>
          <div className="profData">
            <div className="name-field">
              <p>FullName</p>
              <p>{patientData.name}</p>
            </div>
            <div className="email-field">
              <p>Email</p>
              <p>{patientData.phone}</p>
            </div>
            <div className="address-field">
              <p>Address</p>
              <p>{patientData.address}</p>
            </div>
            <div className="age-field">
              <p>Age</p>
              <p>{age}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientProfile;

// export async function action({request}){
//     const data = await request.formData();

//     const profileData={
//         name:data.get('fullname'),
//         phone:data.get('phone'),
//         address:data.get('address'),
//         age:data.get('age')
//     }

//     const token = getAuth()

//     const response = await fetch('https://retinal-diseases-diagnosis-system.vercel.app/patient/profile',
//         {
//             method:'PUT',
//             headers:{
//                 'Authorization': 'Bearer ' + token,
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify(profileData)
//         }
//     )

//     if(!response.ok){
//         throw new json(
//             {message:'cant get appointments'},
//             {status:500}
//         )
//     }
// }
