import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo,setTodo,filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* <Todo /> */}
        {filteredTodos.map((t) => (
          <Todo setTodo={setTodo} todo={todo} t={t} todoText={t.text} id={t.id} key={t.id}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
