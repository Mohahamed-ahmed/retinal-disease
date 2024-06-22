import images2 from "./images2";
import { useState } from "react";
import Summary2 from "./summary2";
import "./far-short-test";

function LongShortTest() {
  const [PatientAnswers, SetPatientAnswers] = useState([]);

  const activeQuestionIndex = PatientAnswers.length;
  const testCompleted = activeQuestionIndex === images2.length;

  function handelAnswers(selectedAnswer) {
    SetPatientAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  if (testCompleted) {
    return <Summary2 PatientAnswers={PatientAnswers}></Summary2>;
  }

  const ShuffleAnswers = [...images2[activeQuestionIndex].answers];
  ShuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className="question-conatiner">
      <div className="questions-part">
        <h2>{images2[activeQuestionIndex].text}</h2>
        <img src={images2[activeQuestionIndex].image}></img>
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

export default LongShortTest;
