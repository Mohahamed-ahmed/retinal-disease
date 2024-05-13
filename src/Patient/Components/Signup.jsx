
import './signup.css'
import { Form } from 'react-router-dom';

const SignUpForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordConfirm, setpasswordConfirmName] = useState('');
  // const [fullName, setfullName] = useState('');
  // const [date, setDate] = useState('');
  // const [address, setAddress] = useState('');
  // const [phone, setPhone] = useState('');
  // const [role, setRole] = useState('');


  return (
    <div className="form__group">
        <div className='text'>
            <h2>Sign Up</h2>
            <p>Enter Your Information To Create Account</p>
        </div>
      <Form method='post'>
            <div className='input'>
                <input
                name='email'
                className='form__field'
                type="email"
                id="email"
                placeholder='email'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className='form__label'>Email:</label>
            </div>
            <div className='input'>
                <input
                name='password'
                className='form__field'
                type="password"
                id="password"
                placeholder='password'
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password" className='form__label'>Password:</label>
            </div>
        <div className='partOne'>
            <div className='input'>
                <input
                name='passwordConfirmation'
                className='form__field'
                type="password"
                id="password-confirm"
                placeholder='password confirm'
                // value={passwordConfirm}
                // onChange={(e) => setpasswordConfirmName(e.target.value)}
                />
                <label htmlFor="password-confirm" className='form__label'>password confirm:</label>
            </div>
            <div className='input'>
                <input
                name='name'
                className='form__field'
                type="text"
                id="fullName"
                placeholder='Fullname'
                // value={fullName}
                // onChange={(e) => setfullName(e.target.value)}
                />
                <label htmlFor="fullName" className='form__label'>Full Name:</label>
            </div>
        </div>
            <div className='input'>
                <input
                name='DOB'
                className='form__field'
                type="text"
                id="date"
                placeholder='Date of birth'
                // value={date}
                // onChange={(e) => setDate(e.target.value)}
                />
                <label htmlFor="date" className='form__label'>Date of birth:</label>
            </div>
            <div className='input'>
                <input
                name='address'
                className='form__field'
                type="text"
                id="address"
                placeholder='address'
                // value={address}
                // onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor="address" className='form__label'>Address:</label>
            </div>
        <div className='partTwo'>
            <div className='input'>
                <input
                name='phone'
                className='form__field'
                type="number"
                id="phone"
                placeholder='phone'
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="phone" className='form__label'>Phone Number:</label>
            </div>
            <div className='input'>
                <input
                name='role'
                className='form__field'
                id="role"
                placeholder='role'
                // value='patient'
                // onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="role" className='form__label'>Role:</label>
            </div>
        </div>
        <div className='SignupButton'>
            <button className='SignUP'>Sign up</button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;

