import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import UserList from "./users/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-800">
        CRUD with Redux-Toolkit
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
