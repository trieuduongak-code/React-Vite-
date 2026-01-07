const TodoData = (props) => {
  //props là một biến object {}
  const { name, age, data } = props;
  console.log("Check props : ", props);
  return (
    <div className="Todo-data">
      <div>My name is {name} </div>
      <div>Learning React </div>
      <div>Watching video </div>
    </div>
  );
};
export default TodoData;
