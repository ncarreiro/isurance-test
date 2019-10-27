import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Message from "components/Message";

const StyledMessages = styled(Container)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
`;

function Messages() {
  return (
    <StyledMessages>
      <Message />
    </StyledMessages>
  );
}

export default Messages;
