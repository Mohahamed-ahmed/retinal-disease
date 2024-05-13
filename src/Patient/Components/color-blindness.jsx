import { useState } from "react"
import images from './images'
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
            <h2>{images[activeQuestionIndex].text}</h2>
            <img src={images[activeQuestionIndex].image}></img>
            <ul>
                {images[activeQuestionIndex].answers.map((answer)=>(
                    <li key={answer}>
                        <button onClick={()=>handelAnswers(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ColorTest