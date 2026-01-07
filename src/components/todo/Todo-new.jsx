const Todonew = (props) => {
  console.log("Check props", props);
  const { AddnewTodo } = props;
  AddnewTodo("NTTD");
  return (
    <div className="Todo-new">
      <input type="text" />
      <button>Add</button>
    </div>
  );
};
export default Todonew;
