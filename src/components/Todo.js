
import React from "react";
import './../styles/App.css';

const Todo = (props) => {
    const { todo, setTodos } = props

    const handleClick = (task) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => (todo.task==task ? {...todo, status: !todo.status} : todo))
        ))
    }
  
  return (
    <div>
        <li>{todo.task} </li>
    </div>
  )
}

export default Todo
