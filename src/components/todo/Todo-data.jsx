const TodoData = (props) => {
  //props là một biến object {}
  const { todoList, deleteTodo } = props;
  const handleClick = (id) => {
    deleteTodo(id);
  };
  return (
    <div className="Todo-data">
      {todoList.map((item, index) => {
        return (
          <div className="Todo-item" key={item.id}>
            <div>{item.name}</div>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
