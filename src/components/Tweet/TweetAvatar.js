import React from "react";
import styled from "styled-components";

const TweetAvatarContainer = styled.img`
  flex-shrink: 0;
  overflow: hidden
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid rgb(37, 51, 65);

  img {
    display: block;
  }

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

function TweetAvatar({ image }) {
  return <TweetAvatarContainer src={image} />;
}

export default TweetAvatar;
