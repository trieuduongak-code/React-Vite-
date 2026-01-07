const Todonew = (props) => {
  console.log("Check props", props);
  const { AddnewTodo } = props;
  const handleEvent = () => {
    alert("Click me ");
  };
  const handleOnchange = (name) => {
    console.log(">>> handle On change", name);
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
    </div>
  );
};
export default Todonew;
