import React from "react";
import styled from "styled-components";

import TweetAvatar from "./TweetAvatar";

const TweetUserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TweetUsername = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  color: #00a1ef;
`;

function TweetUser({ user }) {
  return (
    <TweetUserContainer data-testid="tweet-user-container">
      <TweetAvatar
        data-testid="tweet-user-avatar"
        image={user.profile_image_url_https}
      />
      <TweetUsername
        data-testid="tweet-user-name"
        href={user.url}
        target="_blank"
      >
        <span data-testid="tweet-user-name-text">{user.name}</span> (
        <span data-testid="tweet-user-screen-name">@{user.screen_name}</span>)
      </TweetUsername>
    </TweetUserContainer>
  );
}

export default TweetUser;
