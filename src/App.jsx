import './App.css'
import { useState } from "react";
import HomePage from './components/HomePage'
import SolvePage from './components/SolvePage'
import ResultPage from './components/ResultPage'

function App() {
  const [page,setPage] = useState("home");
  const [score,setScore] = useState(0);
  const [operation, setOperation] = useState("addition");

  return (
    <>
      {page === "home" && <HomePage setPage={setPage} operation={operation} setOperation={setOperation}/>}
      {page === "solve" && <SolvePage setPage={setPage} score={score} setScore={setScore} operation={operation}/>}
      {page === "result" && <ResultPage setPage={setPage} score={score} setScore={setScore}/>}
    </>
  );

}
export default App