import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';



function App() {
  const [input, setInput] = useState('');//useState សម្រាប់បញ្ចូលលេខ 
  const [result, setResult] = useState('');//useState សម្រាប់បញ្ជេញuseState សម្រាប់បញ្ជេញ​លទ្ធផល

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input); // Use with caution in production
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="Calculator">
      <h1> <FontAwesomeIcon icon={faReact} />   Calculator</h1>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        {['0', '.', '=', '+'].map((item) => (
          <button key={item} onClick={item === '=' ? handleCalculate : () => handleButtonClick(item)}>
            {item}
          </button>
        ))}
        <button className="clear" onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;