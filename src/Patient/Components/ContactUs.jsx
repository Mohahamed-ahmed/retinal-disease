import contact from '../../assets/13105774_5143151.jpg'
import './contactUs.css'

function ContactUs(){
    return(
        <div className='contact-container'>
            <div className='first-part'>
                <h2>Contact us</h2>
                <img src={contact} alt="" />
            </div>
            <form className='contact-form'>
                <div className='text'>
                    <h2>Get In Touch</h2>
                    <p> you can reach us anytime</p>
                </div>
                <div className="input-container">
                    <label htmlFor="fullName">FullName</label>
                    <input type="text" className="input-field" id="fullName" />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="input-field" id="email" />
                </div>
                <div className="input-container">
                    <label htmlFor="phone">Phone Number</label>
                    <input type='text' className="input-field" id="phone" />
                </div>
                <div className="input-container">
                    <label htmlFor="des">How Can We Help</label>
                    <textarea id='des' className='input-field '></textarea>
                </div>
                <div className='contactUsButon'>
                    <button type='submit' className='contactButton'>Submit</button>
                </div>
            </form>
        </div>
    )

}

export default ContactUs