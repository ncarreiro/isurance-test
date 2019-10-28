import React from "react";
import styled from "styled-components";

const TweetAvatarContainer = styled.img`
  overflow: hidden
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid rgb(37, 51, 65);

  img {
    display: block;
  }
`;

function TweetAvatar({ image }) {
  return <TweetAvatarContainer src={image} />;
}

export default TweetAvatar;
