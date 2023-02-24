import Card from "./Card";
import styled from "styled-components";

const TodoFlatList = ({ data }) => {
  if (data[0].id === 0) return <></>;

  return (
    <TodoFlatListScrollWrapper>
      {data.map((value, index) => {
        return (
          <Card
            key={`todo-cards-${index}`}
            title={value.title}
            contents={value.contents}
            id={value.id}
            isDone={value.isDone}
          />
        );
      })}
    </TodoFlatListScrollWrapper>
  );
};

export default TodoFlatList;

const TodoFlatListScrollWrapper = styled.div`
  overflow-y: scroll;
  height: 500px;
`;
