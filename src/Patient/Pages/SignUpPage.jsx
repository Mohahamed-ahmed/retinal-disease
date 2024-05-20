import SignUpForm from "../Components/Signup"
import { json, redirect , useActionData} from "react-router-dom";
function SignUpPage(){

    const data = useActionData();

    return (
        <div>
            {data && data.errors && <ul>
                {Object.values(data.errors).map(err=>(
                  <li key={err}>{err}</li>
                ))}
              </ul>
              }
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default SignUpPage;

export async function action({request}){
    const data = await request.formData();
    const signUpdata = {
        email:data.get('email'),
        password:data.get('password'),
        passwordConfirmation:data.get('passwordConfirmation'),
        name:data.get('name'),
        DOB:data.get('DOB'),
        address:data.get('address'),
        phone:data.get('phone'),
        role:data.get('role')
    }
    const response = await fetch('https://retinal-diseases-diagnosis-system.vercel.app/auth/signup',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify(signUpdata),
        // credentials:'include'
    });

    console.log(signUpdata)
    console.log(response)

    if(response.status === 422 && response.status === 401){
        return response;
    }
    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok){
        throw json({message:'could not sign up'}, {status:500})
    }

    return redirect('/login')
}