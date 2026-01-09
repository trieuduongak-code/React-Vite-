import { Input, Button } from "antd";
import { useState } from "react";
const UserForm = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const handleClick = () => {
    console.log(">>>Check state", { fullName, email, passWord, phoneNumber });
  };
  return (
    <div className="User-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Full Name </span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullname(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Email </span>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Pass Word </span>
          <Input.Password
            value={passWord}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone number </span>
          <Input
            value={phoneNumber}
            onChange={(event) => {
              setPhonenumber(event.target.value);
            }}
          />
        </div>
        <div>
          <Button type="primary" onClick={handleClick}>
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
