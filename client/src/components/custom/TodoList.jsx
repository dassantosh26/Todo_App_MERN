/** @format */

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import axios from "axios";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const fetchTodo = async () => {
    try {
      const res = await axios.get("http://localhost:2222/api/v1/todo/");
      if (res.data.success) {
        setTodoList(res.data.todos);
      }
      //   console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {todoList.map((todo) => (
        <Card key={todo._id} className="bg-slate-500 mt-10">
          <CardHeader>
            <CardTitle>{todo.title}</CardTitle>
            <CardDescription className="text-lime-300">{todo.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
