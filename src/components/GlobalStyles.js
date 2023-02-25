import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { colors } from "../shared/styles/utilColors";
export const GlobalStyles = createGlobalStyle`
    ${reset}
`;

export const CommonDevider = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${colors.grayscale.gray08};
  margin: 20px 0px;
`;
