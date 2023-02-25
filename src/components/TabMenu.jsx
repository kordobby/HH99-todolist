import React, { useState } from "react";

const initialState = {
  id: 1,
  title: "react 마스터!", // "rlaehdcks"
  content: "리팩토링 많이 해보기",
  isDone: false,
};

const TabMenu = () => {
  const [todo, setTodo] = useState([initialState]);
  console.log("2", todo[0].title); // 원래값
  console.log("2-2", todo); // initialState =>  "rlaehdcks"
  todo[0].title = "가까운놈"; //#1
  console.log("4", todo[0].title);
  todo[0].title = "먼놈"; // 근데 저도 이상한게요 그렇게 치면 useState 이스키의 불변성도 못믿죠

  const result = todo.map((value, index) => {
    console.log(value);
    console.log(todo[0].title);
    return value.title === todo[0].title;
  });

  console.log(result);

  return <></>;
};

export default TabMenu;
