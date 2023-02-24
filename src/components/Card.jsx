import React from "react";
import styled from "styled-components";
import { colors } from "../shared/styles/utilColors";
import flex from "../shared/styles/utilFlex";

const Card = () => {
  return (
    <CardWrapper>
      <span>제목</span>
      <span>내용</span>
      <span>또뭐</span>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  background-color: ${colors.grayscale.white};
  ${flex({ justify: "center", direction: "column" })}
  width: 100%;
  height: 200px;
  border-radius: 5px;
`;
