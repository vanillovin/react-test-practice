import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleDecreaseCount = () => setCount((prev) => prev - 1);
  const handleIncreaseCount = () => setCount((prev) => prev + 1);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button data-testid="minus-button" onClick={handleDecreaseCount}>
            -
          </button>
          <button data-testid="plus-button" onClick={handleIncreaseCount}>
            +
          </button>
        </div>
        <button data-testid="onAndOff-button" style={{ backgroundColor: 'royalblue' }}>
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
