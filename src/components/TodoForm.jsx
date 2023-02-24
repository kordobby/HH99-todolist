import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";
const TodoForm = () => {
  return (
    <TodoFormWrapper>
      <Input label="제목" />
      <Input label="내용" />
      <Button>추가하기</Button>
    </TodoFormWrapper>
  );
};

export default TodoForm;

const TodoFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
