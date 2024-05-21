import { useState } from "react";
import './patientProfile.css'
import profile from '../../assets/WhatsApp Image 2024-03-22 at 07.32.21_23399fff.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare,  } from '@fortawesome/free-solid-svg-icons';

function PatientProfile(prop){

    let {patientData} = prop

    const [Clicked ,SetIsClicked] = useState(false);

    const clickedHandler=()=>{
        SetIsClicked(true)
    }
    const saveHandler=()=>{
        SetIsClicked(false);
    }
    return (
        <div className="profContainer">
            <div className="left-side">
                <div className="image-container">
                    <div className="image">
                        <img src={profile}></img>
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
            {Clicked 
            ?
            <div className="profile__form__group">
                <h2 className="formHead">You Can Edit Your Data Down There</h2>
            <form>
                <div className="firstPart">
                    <div className='input'>
                        <input
                        name='first-name'
                        className='profile__form__field'
                        type="text"
                        id="firstName"
                        placeholder='first name'
                        />
                        <label htmlFor="firstName" className='profile__form__label'>First Name:</label>
                    </div>
                    <div className='input'>
                        <input
                        name='last-name'
                        className='profile__form__field'
                        type="text"
                        id="lastName"
                        placeholder='last name'
                        />
                        <label htmlFor="lastName" className='profile__form__label'>Last Name:</label>
                    </div>
                    <div className='input'>
                        <input
                        name='email'
                        className='profile__form__field'
                        type="email"
                        id="email"
                        placeholder='email'
                        />
                        <label htmlFor="email" className='profile__form__label'>Email:</label>
                    </div>
                    <div className='input'>
                        <input
                        name='password'
                        className='profile__form__field'
                        type="password"
                        id="password"
                        placeholder='password'
                        />
                        <label htmlFor="password" className='profile__form__label'>Password:</label>
                    </div>
                </div>
                <div className="secondPart">
                    <div className='input'>
                        <input
                        name='first-name'
                        className='profile__form__field'
                        type="text"
                        id="firstName"
                        placeholder='first name'
                        />
                        <label htmlFor="firstName" className='profile__form__label'>First Name:</label>
                    </div>
                    <div className='input'>
                        <input
                        name='first-name'
                        className='profile__form__field'
                        type="text"
                        id="firstName"
                        placeholder='first name'
                        />
                        <label htmlFor="firstName" className='profile__form__label'>First Name:</label>
                    </div>
                    <div className='input'>
                        <input
                        name='first-name'
                        className='profile__form__field'
                        type="text"
                        id="firstName"
                        placeholder='first name'
                        />
                        <label htmlFor="firstName" className='profile__form__label'>First Name:</label>
                    </div>
                    <div className='input'>
                        <input
                        name='first-name'
                        className='profile__form__field'
                        type="text"
                        id="firstName"
                        placeholder='first name'
                        />
                        <label htmlFor="firstName" className='profile__form__label'>First Name:</label>
                    </div>
                </div>
                <button onClick={saveHandler} className="saveButton">Save Changes</button>
            </form>
            </div>
            : 
            <div className="content">
                <h2>Your Personal Data</h2>
                <div className="profData">
                    <div className="name-field">
                        <p>FullName</p>                
                        <p>{patientData.name}</p>
                    </div>
                    <div className="email-field">
                        <p>Email</p>                
                        <p>mohamed@gmail.com</p>
                    </div>
                    <div className="address-field">
                        <p>Address</p>                
                        <p>{patientData.address}</p>
                    </div>
                    <div className="age-field">
                        <p>Age</p>                
                        <p>22</p>
                    </div>
                </div>
            </div>}
        </div>
    )

}

export default PatientProfile;