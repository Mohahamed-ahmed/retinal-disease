import eye from '../../assets/R.png'
import { NavLink,useNavigate } from 'react-router-dom';
function MainNav(){
    const navigate = useNavigate();

    const handelSignUp=()=>{
        navigate('/signup')
    }
    const loginHandel=()=>{
        navigate('/login')
    }
    return (
        <div className='header'>
            <header className="header-container">
                <nav className="logoLinks">
                    <div className="logo">
                        <h2>Ocular</h2>
                        <img src={eye}></img>
                    </div>
                    <ul className='links'>
                        <li><NavLink to='/' className={({isActive})=> isActive ? 'active' : undefined} end>Home</NavLink></li>
                        <li><NavLink to='/appointments' className={({isActive})=> isActive ? 'active' : undefined} end>My Appointments</NavLink></li>
                        <li><NavLink to='/profile' className={({isActive})=> isActive ? 'active' : undefined} end>Profile</NavLink></li>
                        <li><NavLink to='/contactUs' className={({isActive})=> isActive ? 'active' : undefined} end>Contact Us</NavLink></li>
                    </ul>
                </nav>
                <div className='buttons'>
                    <button onClick={loginHandel} className='NavLogin'>Login</button>
                    <button onClick={handelSignUp}>Sign up</button>
                </div>
            </header>
        </div>
    )
}
export default MainNav;