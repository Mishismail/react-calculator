//Calculator.js

import React, { useState } from "react";
import Wrapper from "./components/Wrapper.js";
import Screen from "./components/Screen.js";
import ButtonBox from "./components/ButtonBox.js";
import Button from "./components/Button.js";

const Calculator = () => {
    const [value, setValue] = useState("");
    const [operation, setOperation] = useState(null);
    const [memory, setMemory] = useState(0);
  
    const handleNumber = (number) => {
      if (number === "." && value.includes(".")) return;
      setValue(value + number);
    };
  
    const handleOperator = (operator) => {
      if (value === "") return;
      if (operation !== null) calculate(operation);
  
      setOperation(operator);
      setMemory(parseFloat(value));
      setValue("");
    };
  
    const handleCalculate = () => {
      if (value === "" || operation === null) return;
      calculate(operation);
      setOperation(null);
    };
  
    const calculate = (operator) => {
      let currentValue = parseFloat(value);
      let memoryValue = parseFloat(memory);
  
      switch (operator) {
        case "+":
          setValue(memoryValue + currentValue);
          break;
        case "-":
          setValue(memoryValue - currentValue);
          break;
        case "*":
          setValue(memoryValue * currentValue);
          break;
        case "/":
          setValue(memoryValue / currentValue);
          break;
        default:
          break;
      }
    };
  
    return (
      <Wrapper>
        <div className="calculator-title">Calculator</div>
        <Screen value={value} />
        <ButtonBox>
          <Button onClick={() => handleNumber("7")}>7</Button>
          <Button onClick={() => handleNumber("8")}>8</Button>
          <Button onClick={() => handleNumber("9")}>9</Button>
          <Button
            onClick={() => handleOperator("+")}
            className="operator"
          >
            +
          </Button>
          <Button onClick={() => handleNumber("4")}>4</Button>
          <Button onClick={() => handleNumber("5")}>5</Button>
          <Button onClick={() => handleNumber("6")}>6</Button>
          <Button
            onClick={() => handleOperator("-")}
            className="operator"
          >
            -
          </Button>
          <Button onClick={() => handleNumber("1")}>1</Button>
          <Button onClick={() => handleNumber("2")}>2</Button>
          <Button onClick={() => handleNumber("3")}>3</Button>
          <Button
            onClick={() => handleOperator("*")}
            className="operator"
          >
            *
          </Button>
          <Button onClick={() => handleNumber("0")}>0</Button>
          <Button onClick={() => handleNumber(".")}>.</Button>
          <Button onClick={handleCalculate}>=</Button>
          <Button
            onClick={() => handleOperator("/")}
            className="operator"
          >
            /
          </Button>
        </ButtonBox>
      </Wrapper>
    );
  };
  
  export default Calculator;