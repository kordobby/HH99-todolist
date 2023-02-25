import styled from "styled-components";

export const LayoutWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  overflow: scroll;
  overflow-x: hidden;
`;

export const LayoutCenteredWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 576px) {
    width: 375px;
  }
`;

export const LayoutChildrenWrapper = styled.div`
  flex-grow: 1;
  z-index: 1;
  height: 100%;
`;

export const LayoutInnerWrapper = styled.div`
  height: 100vh;
`;
