import styled from "styled-components";
import React from "react";
import { colors } from "../shared/styles/utilColors";
import flex from "../shared/styles/utilFlex";

const Button = ({ text = "확인" }) => {
  return <ButtonWrapper primary>{text}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: ${colors.grayscale.black};
  color: ${colors.grayscale.white};
  ${flex({ justify: "center" })};
`;
