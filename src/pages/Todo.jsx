import React, { useState } from "react";
import { CommonDevider } from "../components/GlobalStyles";
import TodoFlatList from "../components/TodoFlatList";
import TodoForm from "../components/TodoForm";
import { InnerWrapper } from "../elements/common.styles";
const Todo = () => {
  const [todoData, setTodoData] = useState([]);

  console.log(todoData);
  return (
    <>
      <InnerWrapper>
        <TodoForm setTodoData={setTodoData} />
      </InnerWrapper>
      <CommonDevider />
      <InnerWrapper>
        <TodoFlatList data={todoData} />
      </InnerWrapper>
    </>
  );
};

export default Todo;
