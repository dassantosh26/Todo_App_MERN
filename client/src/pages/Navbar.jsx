/** @format */

import { Button } from "@/components/ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
  try {
    const res = await axios.post("http://localhost:2222/api/v1/user/logout");
    if (res.data.success) {
      toast.success(res.data.message);
      navigate("/login")
    }
  } catch (error) {
    alert(error)
  }
}


  return (
    <div className="bg-gray-600">
      <div className="w-full flex items-center justify-around p-2">
        <h1 className="font-bold text-lg">Todo-App-MERN</h1>
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;
