import TodoData from "./components/todo/Todo-data";
import Todonew from "./components/todo/Todo-new";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  const name = "NTTD Continental";
  const age = 25;
  const data = {
    address: "Tp HCM",
    country: "Viet Nam",
  };
  const [todoList, settodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching video" },
  ]);
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
  return (
    <div className="Todo-container">
      <div className="Todo-title">Todo list</div>
      <Todonew AddnewTodo={AddnewTodo} />
      <TodoData name={name} age={age} data={data} todoList={todoList} />
      <div className="Todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
