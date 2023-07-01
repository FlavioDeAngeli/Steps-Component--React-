import React from "react";
import "./style.css";

function Number({ value, step, setStep }) {
  function handleClick(value) {
    setStep(value);
  }
  return (
    <div
      className={`Number ${step >= value && "active"}`}
      onClick={() => handleClick(value)}
    >
      {value}
    </div>
  );
}

export default Number;
