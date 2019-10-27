import React from "react";
import styled from "styled-components";

const StyledMessageAvatar = styled.img`
  overflow: hidden
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #333;

  img {
    display: block;
  }
`;

function MessageAvatar() {
  return <StyledMessageAvatar src="https://via.placeholder.com/150" />;
}

export default MessageAvatar;
