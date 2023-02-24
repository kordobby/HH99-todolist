import React, { useState } from "react";
import Card from "../components/Card";
import TodoFlatList from "../components/TodoFlatList";
import TodoForm from "../components/TodoForm";
import Button from "../elements/Button";
import Input from "../elements/Input";

const Todo = () => {
  return (
    <>
      <TodoForm />
      <TodoFlatList />
      {/* <Input onChangeHandler={onChangeHandler} />
      <Card />
      <Button>추가하기</Button> */}
    </>
  );
};

export default Todo;
