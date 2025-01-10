/** @format */
import Todo from "@/components/custom/Todo";
import TodoList from "@/components/custom/TodoList";
import Navbar from "@/pages/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Todo />
      <TodoList/>
    </>
  );
};

export default Home;
