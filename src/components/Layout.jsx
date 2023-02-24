import styled from "styled-components";
import flex from "../shared/styles/utilFlex";
import { colors } from "../shared/styles/utilColors";

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
  overflow: hidden;
`;

const Container = styled.div`
  width: 348px;
  height: 100vh;
  ${flex({ direction: "column" })};
  background-color: ${colors.grayscale.gray};
`;
