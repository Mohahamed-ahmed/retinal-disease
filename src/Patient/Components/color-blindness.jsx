import { useState } from "react"
import images from './images'
import './color-blindness.css'

function ColorTest(){

    const [PatientAnswers , SetPatientAnswers] = useState([]);

    const activeQuestionIndex = PatientAnswers.length;
    const testCompleted = activeQuestionIndex === images.length

    function handelAnswers(selectedAnswer){
        SetPatientAnswers((prevAnswers)=>{
            return [...prevAnswers, selectedAnswer]
        })
    }

    if(testCompleted){
        return (
            <div>
                <h2>the test is completed</h2>
            </div>
        )
    }

    return (
        <div className="question-conatiner">
            <div className="questions-part">
                <h2>{images[activeQuestionIndex].text}</h2>
                <img src={images[activeQuestionIndex].image}></img>
            </div>

            <ul className="answers-part">
                {images[activeQuestionIndex].answers.map((answer)=>(
                    <li key={answer}>
                        <button onClick={()=>handelAnswers(answer)} className="answer-button">{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ColorTest