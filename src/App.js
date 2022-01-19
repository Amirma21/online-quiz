import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import "./App.css";
import { question } from "./Question";

import {
  BsFillArrowRightSquareFill,
  BsFillEmojiDizzyFill,
  BsArrowClockwise,
  BsCardText,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  //states
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [nextQuestionHover, setnextQuestionHover] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const darkModeBtnHandler = () => {
    let body = document.body;
    {
      isDark ? setIsDark(false) : setIsDark(true);
    }
 
    {
      isDark
        ? body.classList.add("dark-mode")
        : body.classList.remove("dark-mode");
    }
  };

  // answerBtnHandler
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

    console.log(question[0].questionOption[1].answerText);
  };

  //nextQuestionBtnHandler

  const nextQuestionHandler = () => {
    const nextQuestion = currentQuestion + 1;

    {
      nextQuestion < question.length
        ? setCurrentQuestion(nextQuestion)
        : setShowScore(true);
    }
  };

  return (
    <>
      <Navbar darkModeBtnHandler={darkModeBtnHandler} isDark={isDark} />
      <div className="app darkMode">
        <div className="box-question">
          {showScore ? (
            <>
              <div className="score">
                امتیاز شما {score} از {question.length}
                {score >= 4 && <BsFillEmojiDizzyFill className="emoji" />}
                {score <= 1 && <BsFillEmojiFrownFill className="emoji" />}
                <div>
                  <BsArrowClockwise className="btn" />
                  <BsCardText className="btn" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="question-section">
                <div className="detail">
                  <span> سوال </span>
                  <span className="question-number">{currentQuestion + 1}</span>
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
                      >
                        {questionOption.answerText}
                      </button>
                    );
                  }
                )}
              </div>

              <BsFillArrowRightSquareFill ///next question button
                className="nextQuestionBtn"
                onClick={nextQuestionHandler}
                onMouseEnter={() => setnextQuestionHover(true)}
                onMouseLeave={() => setnextQuestionHover(false)}
              />

              {nextQuestionHover ? (
                <div className="textOfNextQuestion"> سوال بعد </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
