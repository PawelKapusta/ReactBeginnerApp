import React from 'react';
import './App.css';
import './styles/button.css'
import './styles/input.css'
import './styles/todo.css'
import './styles/todoList.css'
import './styles/error.css'
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  return (
      <div className="App">
        <ToDoList> </ToDoList>
      </div>
  );

}

export default App;
