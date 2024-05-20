import Flatpickr from 'react-flatpickr'
import { useState,} from 'react';
import './appointment.css';
import appoinment from '../../assets/Screensho2t 2024-03-24 144615.png'



function AppForm(prop) {


    const [date, setDate] = useState(new Date());
    let {datadoc} = prop;

    console.log(datadoc)

    return (
      <div className='appoinment-container'>
        <div className='appoinment-img'>
          <div className='text'>
            <h2>you can book your appointment here</h2>
          </div>
          <img src={appoinment} alt=''></img>
        </div>
        <form className='appointmentForm'>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" className="input-field" id="name" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" className="input-field" id="email" />
          </div>
          <div className="input-container">
            <label htmlFor="birthdate">Birthdate</label>
            <Flatpickr
              data-input
              className="form-control2"
              value={date}
              placeholder={date}
              onChange={(date) => setDate(date)}
              options={{
                  enableTime: true,
                  dateFormat: "Y-m-d H:i",
                  altInput: true,
                  altFormat: "Y-m-d H:i",
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default AppForm;