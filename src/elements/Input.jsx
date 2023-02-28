import styled from "styled-components";
import flex from "../shared/styles/utilFlex";
import { colors } from "../shared/styles/utilColors";

const data = {
  title: "제목",
  contents: "내용",
};
const Input = ({ placeholder, label, setTodo, value }) => {
  const onChangeHandler = (e, key) => {
    setTodo((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <InputWrapper>
      {label && <InputLabel>{data[label]}</InputLabel>}
      <InnerContainer>
        <input
          max="18"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeHandler(e, label)}
        ></input>
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
  background-color: ${colors.grayscale.gray07};
  ${flex({ justify: "center" })};
  padding: 10px 50px;
  border-radius: 2px;
  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background-color: ${colors.grayscale.gray07};
  }
`;
