import React, { useState } from "react";
import { CommonDevider } from "../components/GlobalStyles";
import TodoFlatList from "../components/TodoFlatList";
import TodoForm from "../components/TodoForm";
import { InnerWrapper } from "../elements/common.styles";
import { useButton } from "../hooks/useButton";
const Todo = () => {
  const [todoData, setTodoData] = useState([]);
  const [hello, addTodoHandler, deleteTodo] = useButton();

  return (
    <>
      <InnerWrapper>
        <TodoForm setTodoData={setTodoData} />
      </InnerWrapper>
      <CommonDevider />
      <p>{hello}</p>
      <button onClick={addTodoHandler}>추가</button>
      <button onClick={deleteTodo}>삭제</button>
      <InnerWrapper>
        <TodoFlatList data={todoData} />
      </InnerWrapper>
    </>
  );
};

export default Todo;
