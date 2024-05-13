// import realEye from '../../assets/ScreenshotOfEye 2024-03-16 151348.png'
import colorBlindness from '../../assets/colorBlindness.jpg'
import retinaExam from '../../assets/copy.jpg'
import farSight from '../../assets/farSightExam.jpg'
import breifPhoto from '../../assets/1000_F_289699072_bancBMaq9zPw9i4ORg3pp2Zt70oxM5Xn.jpg'
import { useNavigate } from 'react-router-dom'

function HomeContent(){
    const navigate = useNavigate();

    const formHandel=()=>{
        navigate('/makeAppointments')
    }
    return (
        <>
        <main className='contentContainer'>
            <div className='col-1'>
                <h2 className='mainText'>commited for exceeding your expections for vision care</h2>
                <p>the eye clinic is proud to offer comprehenseve general eye services to address the needs of your vision </p>
                <button onClick={formHandel}>Make An Appointment</button>
            </div>
            <div className='col-2'>
                <img src={breifPhoto}></img>
                <div className='text'>
                    <p>here where you can find your saftey for your eye</p>
                </div>
            </div>
        </main>
        <div className='services'>
            <h1 className='address'>Services</h1>
            <div className='servicesContainer'>
                <div className='box'>
                    <img src={colorBlindness} alt="" />
                    <div className='content'>
                        <h2>Color Blindness</h2>
                        <p>you can easily check on your eye through a color blindness examination that we provide it in the clinic to our patients and its very helpful and safe</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={retinaExam} alt="" />
                    <div className='content'>
                        <h2>Retina Exam</h2>
                        <p>Its the main core of the clinic and the main examination that we seek to provide, you will recognize the whole thing in details in another brief</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={farSight} alt="" />
                    <div className='content'>
                        <h2>Far - Short (Sightedness)</h2>
                        <p>its the third examination and feature that the clinic provide to the patients, its very needed to the majority of the patients and its very safe and helpful</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='brief'>
            <div className='text'>
                <h3>Retinal Examination</h3>
                <p>Its the main core of the clinic and the main examination that we seek to provide, you will recognize the whole thing in details in another brief</p>
            </div>
            <img src={breifPhoto} alt="" />
        </div>
        </>
    )
}

export default HomeContent