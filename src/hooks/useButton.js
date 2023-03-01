import { useState } from "react";

/* 커스텀훅 */
export const useButton = () => {
  const [hello, setHello] = useState("");

  const addTodoHandler = () => {
    console.log("...더한다");
    setHello("good morning");
  };

  const deleteTodoHandler = () => {
    console.log("...지운다");
    setHello("good night");
  };

  return [hello, addTodoHandler, deleteTodoHandler];
};
