import colorBlindness from '../../assets/colorBlindness.jpg'
import farSight from '../../assets/farSightExam.jpg'
import './doctorHome.css'
import {useNavigate} from 'react-router-dom'

function DoctorHome(){
    const navigate = useNavigate()

    const clickTest=()=>{
        console.log('ggggg')
        navigate('test')

    }

    const clickTest2=()=>{
        console.log('ggggg')
        navigate('test2')

    }
    console.log('hhhhh')

    return(
        <main className="doctorHome">
            <div className="first-col">
                <div className='box'>
                    <img src={colorBlindness} alt="" />
                    <button className='testButtno' onClick={clickTest}>Go To Test</button>
                </div>
                <div className='content'>
                    <h2>Color Blindness</h2>
                    <p>you can easily check on your eye through a color blindness examination that we provide it in the clinic to our patients and its very helpful and safe</p>
                </div>
            </div>
            <div className="second-col">
                <div className='content'>
                    <h2>Far - Short (Sightedness)</h2>
                    <p>its the third examination and feature that the clinic provide to the patients, its very needed to the majority of the patients and its very safe and helpful</p>
                </div>
                <div className='box'>
                    <img src={farSight} alt="" />
                    <button className='testButtno' onClick={clickTest2}>Go To Test</button>
                </div>
            </div>
        </main>
    )
}

export default DoctorHome;