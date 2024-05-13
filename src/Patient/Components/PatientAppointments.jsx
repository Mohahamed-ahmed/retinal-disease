import './patientAppointments.css'

function PatientAppointments(){
    return (
        <div className="appContainer">
                <h2 className='firstHead'>Upcoming Appointment</h2>
            <div className="appNew">
                <div className="appCard">
                    <h3>Eye Examination</h3>
                    <p>Date : Tuesday, May 16 2023</p>
                    <p>time : 11:30 AM</p>
                    <p>Dr : Mohammed Ahmed</p>
                    <hr></hr>
                    <button className='view'>View Details</button>
                </div>
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