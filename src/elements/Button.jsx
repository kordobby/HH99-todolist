import styled from "styled-components";
import React from "react";
import { colors } from "../shared/styles/utilColors";
import flex from "../shared/styles/utilFlex";

const Button = ({ children, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <span>{children}</span>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  border-radius: 2px;
  padding: 15px 0px;
  border: none;
  background-color: ${colors.grayscale.black};
  color: ${colors.grayscale.white};
  ${flex({ justify: "center" })};
`;
