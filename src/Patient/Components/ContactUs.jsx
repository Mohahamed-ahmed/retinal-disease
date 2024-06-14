import contact from '../../assets/13105774_5143151.jpg'
import './contactUs.css'
import { useState } from 'react'
import { getAuth } from '../util/auth'
import { json } from 'react-router-dom'

function ContactUs(){

    const [title,Settitle] = useState('')
    const [description,Setdescription] = useState('')

    const titleChangeHandler=(event)=>{
        Settitle(event.target.value)
    }

    const descriptionChangeHandler=(event)=>{
        Setdescription(event.target.value)
    }

    const data = {
        title:title,
        description:description
    }

    const submitContactHandler =async (event)=>{
        event.preventDefault()
        const token = getAuth();

        const response = await fetch('https://retinal-diseases-diagnosis-system.vercel.app/auth/contact',{
        method:'POST',
        headers:{
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })

        if(!response.ok){
            throw json(
                {message : 'cannot send the request'},
                {status:500}
            )
        }else{
            console.log('done')
        }
    }

    return(
        <div className='contact-container'>
            <div className='first-part'>
                <h2>Contact us</h2>
                <img src={contact} alt="" />
            </div>
            <form className='contact-form' onSubmit={submitContactHandler}>
                <div className='text'>
                    <h2>Get In Touch</h2>
                    <p> you can reach us anytime</p>
                </div>
                <div className="input-container">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="input-field" id="title" onChange={titleChangeHandler}/>
                </div>
                <div className="input-container">
                    <label htmlFor="des">Description</label>
                    <textarea id='des' className='input-field ' onChange={descriptionChangeHandler}></textarea>
                </div>
                <div className='contactUsButon'>
                    <button type='submit' className='contactButton'>Submit</button>
                </div>
            </form>
        </div>
    )

}

export default ContactUs
