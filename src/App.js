import { useState } from "react";
import "./App.css";

// first number state
// second number state
//operator state
///event.target.innertext
function App() {
  let [firstNumber, setFirstNumber] = useState("0");
  let [secondNumber, setSecondNumber] = useState("0");
  let [operation, setOperation] = useState("+");

  //first set of numbers
  const firstOne = () => setFirstNumber((firstNumber = 1));
  const firstTwo = () => setFirstNumber((firstNumber = 2));
  const firstThree = () => setFirstNumber((firstNumber = 3));
  const firstFour = () => setFirstNumber((firstNumber = 4));
  const firstFive = () => setFirstNumber((firstNumber = 5));
  const firstSix = () => setFirstNumber((firstNumber = 6));
  const firstSeven = () => setFirstNumber((firstNumber = 7));
  const firstEight = () => setFirstNumber((firstNumber = 8));
  const firstNine = () => setFirstNumber((firstNumber = 9));
  const firstZero = () => setFirstNumber((firstNumber = 0));
  const firstClear = () => setFirstNumber((firstNumber = 0));

  //second set of numbers
  const one = () => setSecondNumber((secondNumber = 1));
  const two = () => setSecondNumber((secondNumber = 2));
  const three = () => setSecondNumber((secondNumber = 3));
  const four = () => setSecondNumber((secondNumber = 4));
  const five = () => setSecondNumber((secondNumber = 5));
  const six = () => setSecondNumber((secondNumber = 6));
  const seven = () => setSecondNumber((secondNumber = 7));
  const eight = () => setSecondNumber((secondNumber = 8));
  const nine = () => setSecondNumber((secondNumber = 9));
  const zero = () => setSecondNumber((secondNumber = 0));
  const clear = () => setSecondNumber((secondNumber = 0));

  //set of operations
  const additionOperator = () => setOperation((operation = "+"));
  const subtractOperator = () => setOperation((operation = "-"));
  const multiplyOperator = () => setOperation((operation = "*"));
  const divideOperator = () => setOperation((operation = "÷"));

  //calculate result
  const addResult = () => firstNumber + secondNumber;

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={firstOne}>1</button>
          <button onClick={firstTwo}>2</button>
          <button onClick={firstThree}>3</button>
          <button onClick={firstFour}>4</button>
          <button onClick={firstFive}>5</button>
          <button onClick={firstSix}>6</button>
          <button onClick={firstSeven}>7</button>
          <button onClick={firstEight}>8</button>
          <button onClick={firstNine}>9</button>
          <button onClick={firstZero}>0</button>
          <button onClick={firstClear}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={additionOperator}>+</button>
          <button onClick={subtractOperator}>-</button>
          <button onClick={multiplyOperator}>*</button>
          <button onClick={divideOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={one}>1</button>
          <button onClick={two}>2</button>
          <button onClick={three}>3</button>
          <button onClick={four}>4</button>
          <button onClick={five}>5</button>
          <button onClick={six}>6</button>
          <button onClick={seven}>7</button>
          <button onClick={eight}>8</button>
          <button onClick={nine}>9</button>
          <button onClick={zero}>0</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{addResult}</p>
        <div>
          <button onClick={addResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
