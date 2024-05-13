import Login from "../Components/Login";
import { json,redirect } from "react-router-dom";
function LoginPage(){
    return(
        <Login></Login>
    )
}

export default LoginPage;

export async function action({request}){
    const data = await request.formData();
    const loginData = {
        email: data.get('email'),
        password: data.get('password')
    }

    const response = await fetch('https://retinal-diseases-diagnosis-system.vercel.app/auth/login',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json', 
        },
        body:JSON.stringify(loginData)
    });

    if(response.status === 422 && response.status === 401){
        return response;
    }
    //
    // const responseData = await response.json();
    // console.log(responseData);
    //
    if(!response.ok){
        throw json({message:'could not login'}, {status:500})
    }

    const resdata = await response.json();
    const token = resdata.token;

    localStorage.setItem('token', token)

    return redirect('/');
}