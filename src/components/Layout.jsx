import styled from "styled-components";
import flex from "../shared/styles/utilFlex";
import { colors } from "../shared/styles/utilColors";
import { InnerWrapper } from "../elements/common.styles";
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Container>{children}</Container>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  ${flex({ justify: "center" })};
`;

const Container = styled.div`
  width: 348px;
  height: 100vh;
  ${flex({ justify: "center" })};
  background-color: ${colors.grayscale.gray};
`;
