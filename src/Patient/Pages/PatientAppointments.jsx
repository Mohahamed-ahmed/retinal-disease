import { useRouteLoaderData,json } from "react-router-dom";
import PatientAppointments from "../Components/PatientAppointments";
import { getAuth } from "../util/auth";

function PatientAppointmentsPage(){

    const appointments = useRouteLoaderData('appointments')

    return(
        <PatientAppointments appointments={appointments}></PatientAppointments>
    )
}

export default PatientAppointmentsPage;

export async function loader(){

    const token = getAuth();

    const response = await fetch ('https://retinal-diseases-diagnosis-system.vercel.app/patient/appointments',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });

    if (!response.ok){
        throw new json(
            {message:'cant get appointments'},
            {status:500}
        )
    }else{
        const apoointments = await response.json()
        // console.log(apoointments)
        return apoointments;
    }

}