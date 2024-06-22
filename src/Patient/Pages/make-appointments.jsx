import { useRouteLoaderData,json ,useParams} from "react-router-dom";
import AppForm from "../Components/AppointmentForm";
import {getAuth } from "../util/auth";

function MakeAppointments(){
    const data = useRouteLoaderData('doctor-details');
    console.log(data)
    const param = useParams()
    const id = param.doctorId
    console.log(id)
    return (
        <AppForm datadoc={data} doctorId={id}></AppForm>
    )

}

export default MakeAppointments;

export async function loader({params}){

    // const docId = getId();
    const token = getAuth()

    const id = params.doctorId;
    console.log(id)

    const response = await fetch('https://retinal-diseases-diagnosis-system.vercel.app/doctor/details/' + id ,{
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