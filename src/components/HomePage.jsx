import './styles/homepage.css'

function HomePage({setPage, operation, setOperation}) {
  return (
    <div className="main-container">
      <div className="home-icon">🧮</div>
      <h1 className="heading">Math Practice</h1>
      <div className="subtitle">
        <p className="p1">Master the fundamentals through</p>
        <p className="p2">practice and repetition.</p>
      </div>

      <div className="field-group">
        <label htmlFor="operation" className="op">Select Operation</label>
        <select
          id="operation"
          name="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="options"
        >
          <option value="addition">Addition (+)</option>
          <option value="subtraction">Subtraction (−)</option>
          <option value="multiplication">Multiplication (×)</option>
        </select>
      </div>

      <button className="btn-primary" onClick={() => setPage("solve")}>
        Start Session →
      </button>
    </div>
  );
}

export default HomePage;