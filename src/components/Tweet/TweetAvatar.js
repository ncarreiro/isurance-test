import React from "react";
import styled from "styled-components";

const StyledTweetAvatar = styled.img`
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

function TweetAvatar({ image }) {
  return <StyledTweetAvatar src={image} />;
}

export default TweetAvatar;
