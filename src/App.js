import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDecreaseCount = () => setCount((prev) => prev - 1);
  const handleIncreaseCount = () => setCount((prev) => prev + 1);

  const handleChangeDisabled = () => setIsDisabled((prev) => !prev);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button data-testid="minus-button" disabled={isDisabled} onClick={handleDecreaseCount}>
            -
          </button>
          <button data-testid="plus-button" disabled={isDisabled} onClick={handleIncreaseCount}>
            +
          </button>
        </div>
        <button
          data-testid="onAndOff-button"
          style={{ backgroundColor: 'royalblue' }}
          onClick={handleChangeDisabled}
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
