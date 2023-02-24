import styled from "styled-components";
import React from "react";
import { colors } from "../shared/styles/utilColors";
import flex from "../shared/styles/utilFlex";

const Button = ({ children }) => {
  return (
    <ButtonWrapper>
      <span>{children}</span>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  /* height: 30px; */
  /* width: 120px; */
  /* height: 50px; */
  border-radius: 2px;
  padding: 10px 0px;
  border: none;
  background-color: ${colors.grayscale.black};
  color: ${colors.grayscale.white};
  ${flex({ justify: "center" })};
`;
