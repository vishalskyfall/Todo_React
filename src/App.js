import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //run only once
  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (filter) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    saveLocal();
    filterHandler();
  }, [todos, filter]); //to chnage these filter and onchnage events to chnage as state chnages

  //save to local storage

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
     let alreadyPresent =JSON.parse(localStorage.getItem('todos'))
     setTodos(alreadyPresent)
    }
  };

  return (
    <div className="App">
      <header>
        <h1>
          Todo List
          {/* {inputText } */}
        </h1>
      </header>
      <Form
        todo={todos}
        setTodo={setTodos}
        inText={setInputText}
        inputText={inputText}
        setFilter={setFilter}
      />
      <TodoList todo={todos} setTodo={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
