import { useRouteLoaderData,json } from "react-router-dom";
import AppForm from "../Components/AppointmentForm";
import { getId ,getAuth } from "../util/auth";

function MakeAppointments(){
    const data = useRouteLoaderData('doctor-details');
    const doctordata = data 
    console.log(doctordata)
    return (
        <AppForm datadoc={doctordata}></AppForm>
    )

}

export default MakeAppointments;

export async function loader({params}){

    const docId = getId();
    const token = getAuth()

    // const id = params.doctorId;
    const response = await fetch('https://retinal-diseases-diagnosis-system.vercel.app/doctor/details/' + docId,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer' + token,
        },
    });
    console.log(response)

    if(!response.ok){
        throw json(
            {message:'cant handle this requset'},
            {status:500}
        )
    }else{
        return response;
    }

}