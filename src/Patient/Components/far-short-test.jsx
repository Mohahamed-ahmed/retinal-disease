import images2 from "./images2";
import { useState } from "react";
import './far-short-test'

function LongShortTest(){

    const [PatientAnswers , SetPatientAnswers] = useState([]);

    const activeQuestionIndex = PatientAnswers.length;
    const testCompleted = activeQuestionIndex === images2.length

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
                <h2>{images2[activeQuestionIndex].text}</h2>
                <img src={images2[activeQuestionIndex].image}></img>
            </div>

            <ul className="answers-part">
                {images2[activeQuestionIndex].answers.map((answer)=>(
                    <li key={answer}>
                        <button onClick={()=>handelAnswers(answer)} className="answer-button">{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LongShortTest;