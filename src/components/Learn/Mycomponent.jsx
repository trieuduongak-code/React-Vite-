//fragment
import "./style.css";
const MyComponent = () => {
  const Ychenko = {
    name: "NTTD",
    age: 25,
  };
  return (
    <>
      <div className="">{JSON.stringify(Ychenko)} & 24082006</div>
      <div className="child">Child</div>
    </>
  );
};

export default MyComponent;
