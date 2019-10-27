import React from "react";
import styled from "styled-components";

import MessageAvatar from "./MessageAvatar";
import MessageText from "./MessageText";

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  padding: 20px 25px;
  border: 2px solid #333;
  background: #fff;
`;

const MessageUser = styled.div`
  display: flex;
  align-items: center;
`;

const MessageUsername = styled.h1`
  margin: 0;
`;

function Message() {
  return (
    <StyledMessage>
      <MessageUser>
        <MessageAvatar />
        <MessageUsername>MessageUsername</MessageUsername>
      </MessageUser>
      <MessageText>MessageText</MessageText>
    </StyledMessage>
  );
}

export default Message;
