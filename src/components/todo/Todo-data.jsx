const TodoData = (props) => {
  //props là một biến object {}
  const { todoList } = props;
  console.log("Check props : ", todoList);
  return (
    <div className="Todo-data">
      {todoList.map((item, index) => {
        console.log(">>>Check map : ", item, index);
        return (
          <div className="Todo-item">
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}

      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};
export default TodoData;
