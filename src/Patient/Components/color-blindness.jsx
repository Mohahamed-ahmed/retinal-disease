import { useState } from "react";
import images from "./images";
import "./color-blindness.css";
import Summary1 from "./summary1";

function ColorTest() {
  const [PatientAnswers, SetPatientAnswers] = useState([]);

  const activeQuestionIndex = PatientAnswers.length;
  const testCompleted = activeQuestionIndex === images.length;

  function handelAnswers(selectedAnswer) {
    SetPatientAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  if (testCompleted) {
    return (
      // <div>
      //     <h2>the test is completed</h2>
      // </div>
      <Summary1 PatientAnswers={PatientAnswers}></Summary1>
    );
  }

  const ShuffleAnswers = [...images[activeQuestionIndex].answers];
  ShuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className="question-conatiner">
      <div className="questions-part">
        <h2>{images[activeQuestionIndex].text}</h2>
        <img src={images[activeQuestionIndex].image}></img>
      </div>

      <ul className="answers-part">
        {ShuffleAnswers.map((answer) => (
          <li key={answer}>
            <button
              onClick={() => handelAnswers(answer)}
              className="answer-button"
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorTest;
