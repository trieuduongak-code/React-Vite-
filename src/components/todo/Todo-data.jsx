const TodoData = (props) => {
  //props là một biến object {}
  const { todoList } = props;
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
    </div>
  );
};
export default TodoData;
