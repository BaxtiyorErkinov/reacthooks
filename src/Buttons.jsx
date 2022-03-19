import React from "react";

export default React.memo(function Buttons({ onMinus, onPlus }) {
  console.log("re-render");
  return (
    <div>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
});
