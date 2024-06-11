
import React from "react";
import './../styles/App.css';

const Todo = (props) => {
    const { todo, setTodos } = props

    const handleClick = (task) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => (todo.task==task ? {...todo, completed: !todo.completed} : todo))
        ))
    }
  
  return (
    <div>
        <li>{todo.task} {!todo.completed ? <button onClick={() =>handleClick(todo.task)}>Complete</button> : ''}</li>
    </div>
  )
}

export default Todo
