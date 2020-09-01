import React, {useState} from 'react';
import ToDo from "./ToDo";

function ToDoList(props) {
  const [toDoListState, setToDoListState] = useState({todos: [], inputValue: ""});
  const handleInputChange = (event) => {
    const {value} = event.target;
    setToDoListState({
      ...toDoListState,
      inputValue: value
    })
  }
  const handleButtonClick = () => {
    const { todos } = toDoListState;
    setToDoListState({
      todos: [...todos, inputValue],
      inputValue: ""
    })
  }
  const {todos, inputValue} = toDoListState;
  return (
      <div>
        My application:
        <input name="ToDo inout" type="text" placeholder="What we are gonna do today?" value={inputValue}
               onChange={handleInputChange}/>
        <button onClick={handleButtonClick}>
          Add
        </button>
        {
          todos.map((todo) => (
              <ToDo
                  todo={todo} key={todo}
              />

          ))
        }
      </div>
  );

}

export default ToDoList;