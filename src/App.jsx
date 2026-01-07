import TodoData from "./components/todo/Todo-data";
import Todonew from "./components/todo/Todo-new";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
const App = () => {
  const name = "NTTD Continental";
  const age = 25;
  const data = {
    address: "Tp HCM",
    country: "Viet Nam",
  };
  const AddnewTodo = (name) => {
    alert(`Call me ${name}`);
  };
  return (
    <div className="Todo-container">
      <div className="Todo-title">Todo list</div>
      <Todonew AddnewTodo={AddnewTodo} />
      <TodoData name={name} age={age} data={data} />
      <div className="Todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
