import images2 from "./images2";
import "./summry1.css";

function Summary2({ PatientAnswers }) {
  const skippedAnswers = PatientAnswers.filter((answer) => answer === null);
  const NumberOfQuestion = images2.length;
  const correctAnswers = PatientAnswers.filter(
    (answer, index) => answer === images2[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / PatientAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / PatientAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      {/* <img src={quizCompleteImg} alt="Trophy icon" /> */}
      <h2>Test Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{NumberOfQuestion}</span>
          <span className="text">Number Of Questions</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {PatientAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === images2[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{images2[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary2;
