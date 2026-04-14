import { useState } from "react";
import './styles/homepage.css'

function newNum() {
  return Math.floor(Math.random() * 100) + 1;
}

function SolvePage({ setPage, score, setScore, operation }) {
  const [count, setCount] = useState(1);
  const [num1, setNum1] = useState(newNum());
  const [num2, setNum2] = useState(newNum());
  const [input, setInput] = useState("");

  const map = {
    "addition": "+",
    "subtraction": "−",
    "multiplication": "×"
  };

  function checkAnswer() {
    if (operation === "addition" && num1 + num2 == input) setScore(score + 1);
    if (operation === "subtraction" && num1 - num2 == input) setScore(score + 1);
    if (operation === "multiplication" && num1 * num2 == input) setScore(score + 1);
  }

  function changeNum() {
    if (count + 1 === 101) {
      setPage("result");
      return;
    }
    setNum1(newNum());
    setNum2(newNum());
    setCount(count + 1);
    setInput("");
  }

  function submitAnswer() {
    checkAnswer();
    changeNum();
  }

  return (
    <div className="main-container solve-container">
      <div className="header">
        <div>
          <p className="header-label">Question</p>
          <p className="header-value">{count} of 100</p>
        </div>
        <div className="header-right">
          <p className="header-label">Score</p>
          <p className="header-value">{score}</p>
        </div>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${(count / 100) * 100}%` }}
        />
      </div>

      <div className="question-card">
        <p className="question-text">{num1} {map[operation]} {num2} = ?</p>
        <input
          className="answer-input"
          placeholder="Your answer"
          onChange={(event) => setInput(event.target.value)}
          value={input}
          type="number"
          autoFocus
        />
      </div>

      <button className="btn-primary" onClick={submitAnswer}>
        Submit Answer
      </button>
    </div>
  );
}

export default SolvePage;