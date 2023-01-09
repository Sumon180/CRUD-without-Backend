import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Button from "../components/Button";
import TextField from "./TextField";
import { addUser } from "./userSlice";

const initialState = {
  name: "",
  email: "",
};

const AddUser = () => {
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e: any) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Sumon Hossain" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e: any) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "emial", placeholder: "sumon@gmail.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
