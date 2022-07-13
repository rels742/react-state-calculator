import { useState } from "react";
import "./App.css";

function App() {
  let [firstNumber, setFirstNumber] = useState("");
  let [secondNumber, setSecondNumber] = useState("");
  let [operation, setOperation] = useState("+");
  let [result, setResult] = useState("0");

  //first set of numbers
  const firstOne = () => setFirstNumber(firstNumber + "1");
  const firstTwo = () => setFirstNumber(firstNumber + "2");
  const firstThree = () => setFirstNumber(firstNumber + "3");
  const firstFour = () => setFirstNumber(firstNumber + "4");
  const firstFive = () => setFirstNumber(firstNumber + "5");
  const firstSix = () => setFirstNumber(firstNumber + "6");
  const firstSeven = () => setFirstNumber(firstNumber + "7");
  const firstEight = () => setFirstNumber(firstNumber + "8");
  const firstNine = () => setFirstNumber(firstNumber + "9");
  let firstZero = () => setFirstNumber(firstNumber + "0");
  const firstClear = () => setFirstNumber("");

  //second set of numbers
  const one = () => setSecondNumber(secondNumber + "1");
  const two = () => setSecondNumber(secondNumber + "2");
  const three = () => setSecondNumber(secondNumber + "3");
  const four = () => setSecondNumber(secondNumber + "4");
  const five = () => setSecondNumber(secondNumber + "5");
  const six = () => setSecondNumber(secondNumber + "6");
  const seven = () => setSecondNumber(secondNumber + "7");
  const eight = () => setSecondNumber(secondNumber + "8");
  const nine = () => setSecondNumber(secondNumber + "9");
  const zero = () => setSecondNumber(secondNumber + "0");
  const clear = () => setSecondNumber("");

  //set of operations
  const additionOperator = () => setOperation("+");
  const subtractOperator = () => setOperation("-");
  const multiplyOperator = () => setOperation("*");
  const divideOperator = () => setOperation("÷");

  // a function with an if, else statement
  // if 0 is already being displayed
  // then when a new number is clicked that value will be replaced
  // else 0 will be appended onto whatever value is displaying when 0 is clicked

  //const checkIfInitialNumberIs0 = () => {
  //if(firstNumber === 0) {
  //return something, not sure
  //} else {

  //}
  //}

  //calculate result
  let calculateResult = () => {
    if (operation === "+") {
      result = Number(firstNumber) + Number(secondNumber);
      setResult(result);
    } else if (operation === "-") {
      result = Number(firstNumber) - Number(secondNumber);
      setResult(result);
    } else if (operation === "*") {
      result = Number(firstNumber) * Number(secondNumber);
      setResult(result);
    } else {
      if (operation === "÷") {
        result = Number(firstNumber) / Number(secondNumber);
        setResult(result);
      }
    }
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
