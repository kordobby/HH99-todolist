import styled, { css } from "styled-components";
import React from "react";
import { colors } from "../shared/styles/utilColors";
import flex from "../shared/styles/utilFlex";

const Button = ({ children, onClick, theme }) => {
  return (
    <ButtonWrapper onClick={onClick} theme={theme}>
      <span>{children}</span>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  ${flex({ justify: "center" })};
  border: none;
  cursor: pointer;
  ${({ theme }) => {
    switch (theme) {
      case "link":
        return css`
          padding: 0;
          color: ${colors.grayscale.gray03};
          background: none;
          text-decoration: underline;
          width: fit-content;
        `;
      case "secondary":
        return css``;
      default:
        return css`
          border-radius: 2px;
          padding: 15px 0px;
          background-color: ${colors.grayscale.black};
          color: ${colors.grayscale.white};
        `;
    }
  }}
`;
