import React, { useState, useCallback } from "react";
import "./App.css";
import Buttons from "./Buttons";

function App() {
  const [count, setCount] = useState(0);

  const onPlus = useCallback(() => setCount((count) => count + 1), []);
  const onMinus = useCallback(() => setCount((count) => count - 1), []);

  return (
    <div className="App">
      <h1>{count}</h1>
    <Buttons onMinus={onMinus} onPlus={onPlus} />
    </div>
  );
}

export default App;
