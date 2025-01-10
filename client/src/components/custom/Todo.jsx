/** @format */

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import toast from "react-hot-toast";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodoHandler = async () => {
    // console.log(title,description);
    try {
      const res = await axios.post(
        "http://localhost:2222/api/v1/todo/",
        { title, description },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        setTitle("");
        setDescription("");
      }
    } catch (error) {
      toast.error(error.res.data.message);
    }
  };
  return (
    <div className="flex justify-center  mt-10 ">
      <div className="w-1/2 flex flex-col justify-center items-center gap-3 p-5 shadow-2xl">
        <Input
          type="text"
          placeholder="Add new todo..."
          className="w-1/4 "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Textarea
          placeholder="Add description of todo..."
          className="w-1/2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Button onClick={addTodoHandler}>Add Todo</Button>
      </div>
    </div>
  );
};

export default Todo;
