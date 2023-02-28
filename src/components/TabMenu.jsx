import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../elements/Button";

const TabMenu = () => {
  return (
    <TabMenuWrapper>
      <Button theme="link">안바뀜</Button>
    </TabMenuWrapper>
  );
};

export default TabMenu;

const TabMenuWrapper = styled.div``;
