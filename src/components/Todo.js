import React from "react";

function Todo({ todoText, setTodo, todo, t }) {
  //here t is individual one and todo is whole list
  const deleteHandler = () => {
    setTodo(todo.filter((e) => e.id !== t.id));
  };

  const completeHandler = () => {
    setTodo(
      todo.map((item) => {
        if (item.id === t.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item
      })
    );
  };

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${t.completed?"completed":""}`}>{todoText}</li>
        <button onClick={completeHandler}  className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
