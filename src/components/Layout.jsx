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
