/** @format */

import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:2222/api/v1/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.res.data.message);
    }
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Enter Ur email..."
        name="email"
        onChange={changeHandler}
        value={user.email}
      />
      <Input
        type="password"
        placeholder="Enter Ur Password"
        name="password"
        onChange={changeHandler}
        value={user.password}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
