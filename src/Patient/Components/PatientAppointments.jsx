import './patientAppointments.css'
import { Link ,useNavigate} from 'react-router-dom'

function PatientAppointments({appointments}){
    console.log(appointments.appointments)
    const apps = appointments.appointments

    const navigate = useNavigate()

    function appointmentDetailsHandler(id){
        navigate('/appointments/' + id)
    }

    return (
        <div className="appContainer">
                <h2 className='firstHead'>Upcoming Appointment</h2>    
            <div className="appNew">
                {apps.map((appointment)=>(
                <div className="appCard" key={appointment}>
                    <h3>Eye Examination</h3>
                    <p>Date : {appointment.date}</p>
                    <p>time : {appointment.time}</p>
                    <p>status : {appointment.status}</p>
                    <p>Dr : Mohammed Ahmed</p>
                    <hr></hr>
                    <p>id : {appointment.id}</p>
                    <button className='view' onClick={()=>appointmentDetailsHandler(appointment.id)}>View Details</button>
                </div>
                ))}
            </div>
            <br></br>
            <hr></hr>
                <h2>Previous Appointment</h2>
            <div className="appOld">
                <div className="appCard">
                    <h3>Eye Examination</h3>
                    <p>Date : Tuesday, May 1 2023</p>
                    <p>time : 11:30 AM</p>
                    <p>Dr : Mohammed Ahmed</p>
                    <button className='view'>View Details</button>
                </div>
                <div className="appCard">
                    <h3>Eye Examination</h3>
                    <p>Date : Tuesday, May 1 2023</p>
                    <p>time : 11:30 AM</p>
                    <p>Dr : Mohammed Ahmed</p>
                    <button className='view'>View Details</button>
                </div>
                <div className="appCard">
                    <h3>Eye Examination</h3>
                    <p>Date : Tuesday, May 1 2023</p>
                    <p>time : 11:30 AM</p>
                    <p>Dr : Mohammed Ahmed</p>
                    <button className='view'>View Details</button>
                </div>
                <div className="appCard">
                    <h3>Eye Examination</h3>
                    <p>Date : Tuesday, May 1 2023</p>
                    <p>time : 11:30 AM</p>
                    <p>Dr : Mohammed Ahmed</p>
                    <button className='view'>View Details</button>
                </div>
            </div>
            
        </div>
    )
}

export default PatientAppointments