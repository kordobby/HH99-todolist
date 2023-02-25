import { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";

const TodoForm = ({ setTodoData }) => {
  const [todo, setTodo] = useState({
    title: "",
    contents: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("....");
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

  return (
    <TodoFormWrapper onSubmit={onSubmitHandler}>
      <Input
        placeholder="제목을 입력해주세요."
        label="title"
        setTodo={setTodo}
        value={todo.title}
      />
      <Input
        placeholder="내용을 입력해주세요."
        label="contents"
        setTodo={setTodo}
        value={todo.contents}
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
