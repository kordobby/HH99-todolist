import styled from "styled-components";
import flex from "../shared/styles/utilFlex";
import { colors } from "../shared/styles/utilColors";
const Input = ({ label, onChangeHandler }) => {
  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <InnerContainer>
        <input onChange={onChangeHandler}></input>
      </InnerContainer>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  position: relative;
`;

const InputLabel = styled.div`
  color: ${colors.grayscale.black};
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 12px;
  font-weight: 700;
`;

const InnerContainer = styled.div`
  height: 30px;
  background-color: ${colors.grayscale.white};
  ${flex({ justify: "center" })};
  padding: 10px 50px;
  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
  }
`;
