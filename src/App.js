import { useState } from "react";
import "./App.css";
import { question } from "./Question";

function App() {
  const [showCurrnetAnswer, setShowCurrentAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const ansewerBtnHandler = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    {
      isCorrect && setScore(score + 1);
    }
    {
      nextQuestion < question.length
        ? setCurrentQuestion(nextQuestion)
        : setShowScore(true);
    }
  };

  return (
    <div className="app">
      <div className="box-question">
        {showScore ? (
          <div className="score">
            امتیاز شما {score} از {question.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="detail">
                <span> سوال </span>
                <span className="question-number"> {currentQuestion + 1}</span>
                <span> از </span>
                <span>{question.length} </span>
              </div>
              <div className="question">
                {question[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {question[currentQuestion].questionOption.map(
                (questionOption) => {
                  return (
                    <button
                      onClick={() =>
                        ansewerBtnHandler(questionOption.isCorrect)
                      }
                      className="answer-button"
                      // {questionOption.isCorrect &&  style={{borderColor: "green"}}
                    >
                      {questionOption.answerText}
                    </button>
                  );
                }
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
