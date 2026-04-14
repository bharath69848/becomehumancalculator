import './styles/homepage.css'

function ResultPage({ setPage, score, setScore }) {

  function restart() {
    setScore(0);
    setPage("home");
  }

  const emoji = score === 100 ? "🏆" : score >= 60 ? "🎉" : score >= 30 ? "💪" : "📚";
  const title = score === 100 ? "Perfect Score!" : score >= 60 ? "Great Job!" : score >= 30 ? "Keep Going!" : "Let's Practice!";

  return (
    <div className="main-container result-container">
      <div className="result-header">
        <div className="result-emoji">{emoji}</div>
        <h2 className="result-title">{title}</h2>
        <p className="result-subtitle">Review your performance below</p>
      </div>

      <div className="score-card">
        <p className="score-label">Your Score</p>
        <p className={`score ${score === 100 ? 'score-perfect' : ''}`}>{score} / 100</p>
      </div>

      <button className="btn-primary" onClick={restart}>
        Start New Session →
      </button>
    </div>
  );
}

export default ResultPage;