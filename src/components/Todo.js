
import React from "react";
import './../styles/App.css';

const Todo = (props) => {
    const { todo, setTodos } = props

    const handleClick = (task) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => ({...todo, completed: !todo.completed}))
        ))
    }
  
  return (
    <>
        <li>{todo.task} {!todo.completed ? <button onClick={() =>handleClick(todo.task)}>Complete</button> : null}</li>
    </>
  )
}

export default Todo
