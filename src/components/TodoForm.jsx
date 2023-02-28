import { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";
import useTodoForm from "../hooks/useTodoForm";

const inputProps = [
  {
    placeholder: "제목을 입력해주세요.",
    label: "title",
  },
  {
    placeholder: "내용을 입력해주세요.",
    label: "contents",
  },
];

const TodoForm = ({ setTodoData }) => {
  const { onSubmitHandler, setTodo, todo } = useTodoForm();

  return (
    <TodoFormWrapper onSubmit={onSubmitHandler}>
      {data.map((value, index) => {
        <Input
          key={value.title}
          placeholder={value.title}
          label={value.label}
          setTodo={setTodo}
          value={todo[value.label]}
        />;
      })}
      <Button>추가하기</Button>
    </TodoFormWrapper>
  );
};

export default TodoForm;

const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  gap: 8px;
  height: fit-content;
`;
