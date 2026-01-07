import { useState } from "react";

const Todonew = (props) => {
  //useState hook (getter,setter)
  //const valueInput = "";'
  const [valueInput, setvalueInput] = useState("NTTD");
  const { AddnewTodo } = props;
  const handleEvent = () => {
    AddnewTodo(valueInput);
  };
  const handleOnchange = (name) => {
    setvalueInput(name);
  };
  return (
    <div className="Todo-new">
      <input
        type="text"
        onChange={(event) => handleOnchange(event.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handleEvent}>
        Add
      </button>
      <div>My input is ={valueInput}</div>
    </div>
  );
};
export default Todonew;
