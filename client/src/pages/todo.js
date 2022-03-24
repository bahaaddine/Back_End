import React from "react"

export default function Todo({ task, deleteHandler, doneHandler }) {
    const deleteTodo = () => {
      deleteHandler(task.id);
    };
  
    const doneTodo = () => {
      doneHandler(task.id);
    };
    return (
      <div className="todoContainer">
        <h1
          className={task.isDone ? "done" : "undone"}
          style={task.isDone ? { textDecoration: "line-through" } : {}}
        >
          {" "}
          {task.text}{" "}
        </h1>
        <div className='todoBtns' >
          <button onClick={deleteTodo}> <i class="far fa-trash-alt"></i> </button>
         
        </div>
      </div>
    );
  }