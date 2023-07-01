import React from "react";
import Number from "../Number";
import "./style.css";

function Numbers({ quantity, step, setStep }) {
  const numbersList = Array.from({ length: quantity }, (v, i) => i + 1);

  return (
    <div className="Numbers">
      {numbersList.map((number) => {
        return (
          <Number key={number} value={number} step={step} setStep={setStep} />
        );
      })}
    </div>
  );
}

export default Numbers;
