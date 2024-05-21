import PatientProfile from "../Components/patientProfile"
import { json,useRouteLoaderData } from "react-router-dom"
import { getAuth } from "../util/auth";

function PatientProfilePage(){
    const data = useRouteLoaderData('patient-data')
    console.log(data.patient)
    // const patientData = data.patient;
    // console.log(patientData)

    return (
        <PatientProfile patientData={data.patient}></PatientProfile>
    )

}

export default PatientProfilePage;

export async function loader(){
    const token = getAuth();

    const response = await fetch('https://retinal-diseases-diagnosis-system.vercel.app/patient/profile',{
        headers:{
            'Authorization': 'Bearer ' + token
        }
    })

    if(!response.ok){
        throw json(
            {message:'cant load data'},
            {status:505}
        )
    }else{
        return response
    }
}