import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../rudex/count/action";
const Count = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.count.value);

  return (
    <div className="App">
      <h1>Your number {selector}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default Count;
