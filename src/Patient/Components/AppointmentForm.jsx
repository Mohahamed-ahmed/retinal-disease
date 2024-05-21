/* eslint-disable react/prop-types */
import Flatpickr from 'react-flatpickr'
import { useState,} from 'react';
import {useParams,json} from 'react-router-dom'
import { getAuth } from '../util/auth';
import './appointment.css';
// import appoinment from '../../assets/Screensho2t 2024-03-24 144615.png'



function AppForm({datadoc,doctorId}) {


    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    // let {datadoc} = prop;
    // let {doctorId} = prop;

    // const docid = doctorId

    // console.log(tostring(datadoc))

    

    // const token = getAuth()
    // const token = localStorage.getItem('token')
    // console.log(token)
    

    const changeDateHandler= async(selectedDate)=>{
      setDate(selectedDate);
      const appointmentDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      )


      const data={
        date:appointmentDate.toISOString().split('T')[0],
        doctorId:doctorId
      }
      // console.log(date)
      // console.log(appointmentDate)

      const token = getAuth()
      console.log('token',token);

      if (!token) {
        console.error('No token found. Please ensure you are logged in.');
        return;
    }

      const response = await fetch("https://retinal-diseases-diagnosis-system.vercel.app/patient/get-available-appointments",{
        method:'POST',
        mode:'cors',
        headers:{
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
      })
      
      if(!response.ok){
        const errordata = await response.json()
        console.log(errordata)
        // throw json(
        //   {message:'cant get the data'},
        //   {status:500}
        // )
        if (response.status === 403) {
          console.error('Forbidden: You do not have permission to access this resource.');
      } else {
          console.error('Error:', response.statusText);
      }
      throw new Error('Cannot get the data');
      }else{
        console.log(await response.json())
        return response
      }
    }

    return (
      <div className='appoinment-container'>
        <div className='appoinment-img'>
          <div className='text'>
            <h2>you can book your appointment here</h2>
            <div className='doctor-details'>
              <h2>Name: {datadoc.name}</h2>
              <p>Address: {datadoc.address}</p>
              <p>Phone: {datadoc.phone}</p>
            </div>
          </div>
        </div>

        <form className='appointmentForm'>
          {/* <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" className="input-field" id="name" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" className="input-field" id="email" />
          </div> */}
          <div className="input-container">
            <label htmlFor="birthdate">date</label>
            <Flatpickr
              data-input
              className="form-control2"
              value={date}
              placeholder={date}
              onChange={(selectedDate)=>changeDateHandler(selectedDate[0])}
              options={{
                  enableTime: false,
                  dateFormat: "Y-m-d",
                  altInput: true,
                  altFormat: "Y-m-d",
              }}
            />
          </div>
          <div className="input-container">
            <label htmlFor="birthdate">time</label>
            <Flatpickr
              data-input
              className="form-control2"
              value={time}
              placeholder={time}
              onChange={(time) => setTime(time)}
              options={{
                  // enableTime: true,
                  enableTime: true,
                  noCalendar:true,
                  dateFormat: "H:i",
                  time_24hr:true,
                  altInput: true,
                  altFormat: "h:i K",
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