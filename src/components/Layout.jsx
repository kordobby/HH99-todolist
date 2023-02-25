import styled from "styled-components";
import flex from "../shared/styles/utilFlex";
import { colors } from "../shared/styles/utilColors";
import {
  LayoutCenteredWrapper,
  LayoutChildrenWrapper,
  LayoutInnerWrapper,
  LayoutWrapper,
} from "./Layout.style";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutCenteredWrapper>
        <LayoutChildrenWrapper>
          <LayoutInnerWrapper>{children}</LayoutInnerWrapper>
        </LayoutChildrenWrapper>
      </LayoutCenteredWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

// const LayoutWrapper = styled.div`
//   ${flex({ justify: "center" })};
//   overflow: hidden;
// `;

// const Container = styled.div`
//   width: 348px;
//   height: 100vh;
//   ${flex({ direction: "column" })};
//   background-color: ${colors.grayscale.gray};
// `;
