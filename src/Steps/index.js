import React from "react";
import { MESSAGES } from "../config";
import "./style.css";

function Steps({ step }) {
  return (
    <h3 className="Steps">
      Step {step}: {MESSAGES[step - 1]}
    </h3>
  );
}

export default Steps;
