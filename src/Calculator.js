import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [equalPressed, setEqualPressed] = useState(false);

  const handleDigitClick = (digit) => {
    const lastDigit = displayValue.charAt(displayValue.length - 1);
    const secondLastDigit = displayValue.charAt(displayValue.length - 2);
    if (displayValue === "" && digit != 0) {
      setDisplayValue(digit);
    } else if (
      lastDigit == 0 &&
      (isNaN(secondLastDigit) || secondLastDigit == "")
    ) {
      var expression = displayValue.slice(0, -1) + digit;
      setDisplayValue(expression);
    } else if (equalPressed && !isNaN(lastDigit)) {
      setDisplayValue(digit);
      setEqualPressed(false);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const handleOperatorClick = (operator) => {
    const lastDigit = displayValue.charAt(displayValue.length - 1);
    var expression;
    if (!isNaN(lastDigit) && displayValue != "") {
      expression = displayValue + operator;
      setDisplayValue(expression);
    } else if (operator == "-" && lastDigit != "-" && lastDigit != "+") {
      expression = displayValue + operator;
      setDisplayValue(expression);
    } else if (isNaN(lastDigit)) {
      expression = displayValue.slice(0, -1) + operator;
      setDisplayValue(expression);
    }
  };
  const handleEqualsClick = () => {
    const lastDigit = displayValue.charAt(displayValue.length - 1);
    setEqualPressed(true);
    if (!isNaN(lastDigit)) {
      var result = Math.floor(eval(displayValue));
      if (isFinite(result)) {
        setDisplayValue(String(result));
      } else {
        setDisplayValue("");
      }
    }
  };
  const handleClearClick = () => {
    setDisplayValue("");
  };
  return (
    <div className="calculator">
      <div className="output">{displayValue}</div>
      <div className="button-row">
        <button className="digit-7" onClick={() => handleDigitClick("7")}>
          7
        </button>
        <button className="digit-8" onClick={() => handleDigitClick("8")}>
          8
        </button>
        <button className="digit-9" onClick={() => handleDigitClick("9")}>
          9
        </button>
        <button className="op-div" onClick={() => handleOperatorClick("/")}>
          /
        </button>
      </div>
      <div className="button-row">
        <button className="digit-4" onClick={() => handleDigitClick("4")}>
          4
        </button>
        <button className="digit-5" onClick={() => handleDigitClick("5")}>
          5
        </button>
        <button className="digit-6" onClick={() => handleDigitClick("6")}>
          6
        </button>
        <button className="op-mul" onClick={() => handleOperatorClick("*")}>
          *
        </button>
      </div>
      <div className="button-row">
        <button className="digit-1" onClick={() => handleDigitClick("1")}>
          1
        </button>
        <button className="digit-2" onClick={() => handleDigitClick("2")}>
          2
        </button>
        <button className="digit-3" onClick={() => handleDigitClick("3")}>
          3
        </button>
        <button className="op-sub" onClick={() => handleOperatorClick("-")}>
          -
        </button>
      </div>
      <div className="button-row">
        <button className="digit-0" onClick={() => handleDigitClick("0")}>
          0
        </button>
        <button className="op-add" onClick={() => handleOperatorClick("+")}>
          +
        </button>
        <button className="eq" onClick={handleEqualsClick}>
          =
        </button>
        <button className="clear" onClick={handleClearClick}>
          c
        </button>
      </div>
    </div>
  );
};
export default Calculator;
