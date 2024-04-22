import React from "react";
import { add, minus, multi, division, text } from "./app/taskReducerSlice";
import { useDispatch } from "react-redux";

export default function In() {
  let task1Input = React.createRef();
  let task2Input = React.createRef();

  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(add(task1Input.current.value));
  };
  const minusHandler = () => {
    dispatch(minus(task1Input.current.value));
  };
  const multiHandler = () => {
    dispatch(multi(task1Input.current.value));
  };
  const divisionHandler = () => {
    dispatch(division(task1Input.current.value));
  };

  const textHandler = () => {
    dispatch(text(task2Input.current.value));
  };

  return (
    <>
      <h2>Task in</h2>
      <input type="number" ref={task1Input} />
      <button onClick={addHandler}>+</button>
      <button onClick={minusHandler}>-</button>
      <button onClick={multiHandler}>*</button>
      <button onClick={divisionHandler}>/</button>
      <hr />
      <input type="text" ref={task2Input} />
      <button onClick={textHandler}>Text</button>
    </>
  );
}
