import React, { useState } from "react";
import TodoFlatList from "../components/TodoFlatList";
import TodoForm from "../components/TodoForm";
import { InnerWrapper } from "../elements/common.styles";
const Todo = () => {
  const [todoData, setTodoData] = useState([
    {
      id: 0,
      title: "asdf",
      contents: "asdf",
      isDone: false,
    },
  ]);

  return (
    <InnerWrapper>
      <TodoForm setTodoData={setTodoData} />
      <TodoFlatList data={todoData} />
    </InnerWrapper>
  );
};

export default Todo;
