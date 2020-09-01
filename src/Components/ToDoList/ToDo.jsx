import React from 'react';

function ToDo(props){
  const {todo, handleCloseClick} = props;
  return (

      <div className="Todo">
        <span>{todo}</span>
        <button className="Close" onClick={() => handleCloseClick(todo)}>X</button>
      </div>
  )
}

export default ToDo;