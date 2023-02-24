import styled from "styled-components";
import { colors } from "../shared/styles/utilColors";
const Header = () => {
  return <HeaderWrapper></HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.div`
  background-color: ${colors.grayscale.black};
  width: 348px;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 1;
`;
