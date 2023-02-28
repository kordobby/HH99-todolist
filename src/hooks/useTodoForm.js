import { useState } from "react";

const useTodoForm = () => {
  const [todo, setTodo] = useState({
    title: "",
    contents: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTodoData((prev) => [
      ...prev,
      {
        title: todo.title,
        contents: todo.contents,
        id: 1,
        isDone: false,
      },
    ]);
    setTodo({
      title: "",
      contents: "",
    });
  };

  return { onSubmitHandler, setTodo, todo };
};

export default useTodoForm;
