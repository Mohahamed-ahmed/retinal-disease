import  { useState } from 'react';
import { Form } from 'react-router-dom';
import './login.css'

function Login(){

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    

    return (
        <div className="login__form__group">
            <div className='text'>
                <h2>Sign in</h2>
                <p>Enter Your Information To Login</p>
            </div>
        <Form method='post'>
            <div className='input'>
                <input
                name='email'
                className='login__form__field'
                type="email"
                id="email"
                placeholder='email'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className='login__form__label'>Email:</label>
            </div>
            <div className='input'>
                <input
                name='password'
                className='login__form__field'
                type="password"
                id="password"
                placeholder='password'
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password" className='login__form__label'>Password:</label>
            </div>
            <div className='loginButton'>
                <button className='SignInButton'>Sign in</button>
            </div>
        </Form>
    </div>
    )
}

export default Login