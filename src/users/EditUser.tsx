import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import TextField from "./TextField";
import { editUser } from "./userSlice";

const EditUser = () => {
  const users = useSelector((store: any) => store.users);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingUser = users.filter((user: any) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
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
      <Button onClick={handleEditUser}>Update</Button>
    </div>
  );
};

export default EditUser;
