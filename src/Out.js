import React from "react";
import { selectTest, selectValue } from "./app/taskReducerSlice";
import { useSelector } from "react-redux";

export default function Out() {
  const task1 = useSelector(selectValue); //get data from store
  const task2 = useSelector(selectTest); //get data from store

  return (
    <>
      <hr />
      <h2>Task out</h2>
      <p>{task1}</p>
      <p>{task2}</p>
    </>
  );
}

