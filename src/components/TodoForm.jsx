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
      <Input
        placeholder={"제목 입력"}
        label={`title`}
        setTodo={setTodo}
        value={todo[`title`]}
      />
      <Input
        placeholder={"내용 입력"}
        label={`contents`}
        setTodo={setTodo}
        value={todo[`contents`]}
      />
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
