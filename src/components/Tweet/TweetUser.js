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
    <TweetUserContainer>
      <TweetAvatar image={user.profile_image_url_https} />
      <TweetUsername href={user.url} target="_blank">
        {user.name} (@{user.screen_name})
      </TweetUsername>
    </TweetUserContainer>
  );
}

export default TweetUser;
