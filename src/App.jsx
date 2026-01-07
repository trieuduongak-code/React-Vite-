import TodoData from "./components/todo/Todo-data";
import Todonew from "./components/todo/Todo-new";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  const [todoList, settodoList] = useState([]);
  const AddnewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000),
      name: name,
    };
    settodoList([...todoList, newTodo]);
  };
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
  };
  const deleteTodo = (id) => {
    const newTodolist = todoList.filter((item) => item.id !== id);
    settodoList(newTodolist);
  };
  return (
    <div className="Todo-container">
      <div className="Todo-title">Todo list</div>
      <Todonew AddnewTodo={AddnewTodo} />
      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        <div className="Todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )}
    </div>
  );
};

export default App;
