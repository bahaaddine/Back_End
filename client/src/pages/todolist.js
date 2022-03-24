import React from "react";
import Todo from "./todo";

export default function Todolist({ todoList ,deleteHandler}) {
  return (
    <div className="todoListContainer">
     
      {todoList.map((el) => (
        <Todo  task={el}   deleteHandler={deleteHandler}   />
      ))}
    </div>
  );
}
