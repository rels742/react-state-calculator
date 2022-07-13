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
  let [result, setResult] = useState("0");

  //first set of numbers
  const firstOne = () => setFirstNumber(firstNumber * 10 + 1);
  const firstTwo = () => setFirstNumber(firstNumber * 10 + 2);
  const firstThree = () => setFirstNumber(firstNumber * 10 + 3);
  const firstFour = () => setFirstNumber(firstNumber * 10 + 4);
  const firstFive = () => setFirstNumber(5);
  const firstSix = () => setFirstNumber(6);
  const firstSeven = () => setFirstNumber(7);
  const firstEight = () => setFirstNumber(8);
  const firstNine = () => setFirstNumber(9);
  const firstZero = () => setFirstNumber(0);
  const firstClear = () => setFirstNumber(0);

  //second set of numbers
  const one = () => setSecondNumber(1);
  const two = () => setSecondNumber(2);
  const three = () => setSecondNumber(3);
  const four = () => setSecondNumber(4);
  const five = () => setSecondNumber(5);
  const six = () => setSecondNumber(6);
  const seven = () => setSecondNumber(7);
  const eight = () => setSecondNumber(8);
  const nine = () => setSecondNumber(9);
  const zero = () => setSecondNumber(0);
  const clear = () => setSecondNumber(0);

  //set of operations
  const additionOperator = () => setOperation("+");
  const subtractOperator = () => setOperation("-");
  const multiplyOperator = () => setOperation("*");
  const divideOperator = () => setOperation("÷");

  //calculate result
  let calculateResult = () => {
    if (operation === "+") {
      const result = Number(firstNumber) + Number(secondNumber);
      setResult(result);
    } else if (operation === "-") {
    }
    // if (operation === "+") {
    //   setResult(firstNumber + secondNumber);
    // } else if (operation === "-") {
    //   setResult(firstNumber - secondNumber);
    // } else if (operation === "*") {
    //   setResult(firstNumber * secondNumber);
    // } else {
    //   if (operation === "÷") {
    //     setResult(firstNumber / secondNumber);
    //   }
    // }
  };

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
        <p>{result}</p>
        <div>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
