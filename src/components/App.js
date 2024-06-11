
import React, { useState } from "react";

import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([{task: 'Learn React', completed: false}, {task: 'Build a React App', completed: false}, {task: 'Deploy the React App', completed: false}])
  
  return (
    <div>
        <h1>Parent Component</h1>
        <div>
          <h2>Child Component</h2>
          <ul>
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} setTodos={setTodos} />
            ))}
          </ul>
        </div>
    </div>
  )
}

export default App
