import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../shared/styles/utilColors";
import flex from "../shared/styles/utilFlex";

const Card = ({ id, title, contents, isDone }) => {
  return (
    <CardWrapper isDone={isDone}>
      <CardHeader>
        <span>{id}</span>
        <span>{title}</span>
        <CardDeleteBtn>x</CardDeleteBtn>
      </CardHeader>
      <div className="card_contents_wrapper">
        <span>{contents}</span>
      </div>
      <CardFooter>
        <div className="card_switch_button">
          <span>완</span>
        </div>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  ${flex({ justify: "space-between", direction: "column" })}
  width: 100%;
  height: 200px;
  margin: 0px 0px 20px;
  border-radius: 5px;
  background-color: ${({ isDone }) =>
    isDone ? colors.grayscale.black : colors.grayscale.gray07};
  color: ${({ isDone }) =>
    isDone ? colors.grayscale.white : colors.grayscale.black};
  /* position: relative; */

  .card_contents_wrapper {
    width: 80%;
    background-color: ${colors.grayscale.white};
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CardHeader = styled.div`
  /* border: 1px solid red; */
  margin-top: 10px;
  width: 100%;
  ${flex({ justify: "space-between" })};
  padding: 5px 20px;
  box-sizing: border-box;
  span {
    font-weight: 800;
  }
`;

const CardFooter = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  padding: 0px 10px 10px 10px;
  box-sizing: border-box;
  ${flex({ justify: "flex-end" })}
  .card_switch_button {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: ${colors.context.success};
    color: white;
    ${flex({ justify: "center", align: "center" })}
  }
`;

const CardDeleteBtn = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: ${colors.brand};
  color: white;
  ${flex({ justify: "center", align: "center" })}
`;
