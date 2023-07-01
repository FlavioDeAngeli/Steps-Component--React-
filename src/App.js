import React, { useState } from "react";
import Numbers from "./Numbers";
import Steps from "./Steps";
import Controls from "./Controls";
import "./App.css";

import { STEPS_NUMBER } from "./config";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <Numbers quantity={STEPS_NUMBER} step={step} setStep={setStep} />
      <Steps step={step} />
      <Controls step={step} setStep={setStep} quantity={STEPS_NUMBER} />
    </div>
  );
}

export default App;
