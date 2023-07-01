import React from "react";
import "./style.css";

function Controls({ step, setStep, quantity }) {
  function handleClick(direction) {
    if (direction === "previous") {
      step > 1 && setStep(step - 1);
    } else {
      step < quantity && setStep(step + 1);
    }
  }
  return (
    <div className="Controls">
      <button onClick={() => handleClick("previous")}>Previous</button>
      <button onClick={() => handleClick("next")}>Next</button>
    </div>
  );
}

export default Controls;
