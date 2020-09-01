import React, {useState} from 'react';
import ToDo from "./ToDo";

function ToDoList(props) {
  const [toDoListState, setToDoListState] = useState({todos: [], inputValue: ""});
  const {error, todos, inputValue} = toDoListState;
  const handleInputChange = (event) => {
    const {value} = event.target;
    setToDoListState({
      ...toDoListState,
      inputValue: value
    })
  }
  const handleButtonClick = () => {
    const {todos} = toDoListState;
    if (!inputValue) return;
    if (todos.some(todo => todo === inputValue)) {
      setToDoListState({
        ...toDoListState,
        error: "This task already exists!!!!!",
        inputValue: ""
      })
      return;
    }
    setToDoListState({
      todos: [...todos, inputValue],
      inputValue: ""
    })
  }
  const handleToDoRemove = (toDoValue) => {
    setToDoListState({
      ...toDoListState,
      todos: todos.filter(toDo => toDo !== toDoValue)
    });
  };

  return (
      <div className="TodoList">
        <h1>My application:</h1>
        <input className="Input" name="ToDo inout" type="text" placeholder="What we are gonna do today?"
               value={inputValue}
               onChange={handleInputChange}/>
        <button className="Button" onClick={handleButtonClick}>
          Add
        </button>
        {!!error && <div className="Error">{error}</div>}

        {
          todos.map((todo) => (
              <ToDo
                  todo={todo} key={todo} handleCloseClick={handleToDoRemove}
              />

          ))
        }

      </div>
  );

}

export default ToDoList;