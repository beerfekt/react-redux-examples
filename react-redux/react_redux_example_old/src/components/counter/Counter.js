import React from "react";

//object{} as param instead of props-object
const Counter = ({ counter, onIncrement, onDecrement, onReset }) => {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button
          onClick={() => {
            onDecrement();
          }}
        >
          -
        </button>
        <span className="count">{counter.count}</span>
        <button
          onClick={() => {
            onIncrement();
          }}
        >
          +
        </button>
      </div>
      <div>
        <button className="reset" onClick={() => onReset()}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Counter;
