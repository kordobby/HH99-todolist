import { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    title: "",
    contents: "",
  });

  return (
    <TodoFormWrapper>
      <Input label="title" setTodo={setTodo} />
      <Input label="contents" setTodo={setTodo} />
      <Button>추가하기</Button>
    </TodoFormWrapper>
  );
};

export default TodoForm;

const TodoFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  gap: 8px;
  height: fit-content;
`;
