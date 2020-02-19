import React from "react";

const Counter = ({ counter, onIncrement, onSendFive, onSetText }) => {
  return (
    <div>
      <span>{counter.count}</span>
      <button onClick={onIncrement}>increment</button>

      <button
        onClick={() => {
          onSendFive(5);
        }}
      >
        sendFive
      </button>
      <p>{counter.text}</p>
    </div>
  );
};

export default Counter;
