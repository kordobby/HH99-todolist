import Card from "./Card";
import styled from "styled-components";
import { useState } from "react";

const TodoFlatList = ({ data }) => {
  const [tabMenu, setTabMenu] = useState(0);

  if (data.length === 0) return <></>;

  console.log(data[0].isDone);
  return (
    <TodoFlatListScrollWrapper>
      {data.map((value, index) => {
        return (
          <Card
            key={`todo-cards-${index}`}
            title={value.title}
            contents={value.contents}
            id={String(value.id).padStart(3, "0")}
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
