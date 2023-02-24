import Card from "./Card";
import styled from "styled-components";

const TodoFlatList = () => {
  const arr = [1, 2, 3, 4];

  return (
    <TodoFlatListScrollWrapper>
      {arr.map((value, index) => {
        return <Card key={`todo-cards-${index}`} />;
      })}
    </TodoFlatListScrollWrapper>
  );
};

export default TodoFlatList;

const TodoFlatListScrollWrapper = styled.div`
  overflow-y: scroll;
  height: 500px;
`;
