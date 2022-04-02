import React from "react";

function Form({ inText,setTodo, todo ,inputText,setFilter}) {
  //JS functions
  const textHandler = (e) => {
    // console.log(e.target.value); //print by using first e then e.target then e.target.value
    inText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault(); //prevent the default behavior like refreshing of page
    setTodo([...todo,{text:inputText, completed:false, id:Math.random()*1000}])
    inText('')
  };
  const statusHandler=(e)=>{
    setFilter(e.target.value)
  }
  return (
    <form action="">
      <input onChange={textHandler} type="text" value={inputText} className="todo-input" />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
