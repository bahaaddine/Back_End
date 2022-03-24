import React from 'react'
import Navbar from "../components/wallet-contents/Navbar"
import Dashboard from "../components/wallet-contents/Dashboard"
import Add from "./add";
import Todolist from "./todolist";
import { useState } from "react";



export const Admindash = () => {

  const [todos, setTodos] = useState([
    { text: "BTC now 39k", id: 1, isDone: false }
  ]);

  const deleteHandler = (ID) => {
    setTodos(todos.filter((el) => el.id !== ID));
  };

  
  const [input, setInput] = useState("");
  const addHandler = (newTodo) => {
    input&&
    setTodos([...todos, newTodo])
  };

    return (
            <div>
              <Navbar/>
              <Dashboard/>
              <Add addHandler={addHandler} input={input} setInput={setInput} />
      <Todolist
        todoList={todos}
        deleteHandler={deleteHandler}
       
      />
            </div>
            
            
    )
}
export default Admindash