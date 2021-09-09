import React from "react";

const ToDoList = ({ todos, onDeleteTodo }) => {
  return (
    <div className="todo-list">
  
        <h4>My List</h4>
      
       { todos.map(todo => (
          <div className="todo-item" key={todo.id}>
            <div className="row">
              <div className="col-xs-10">
                <h4>{todo.title}</h4>
              </div>
              <div className="col-xs-2">
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ToDoList;
