import React from "react";
import styled from "styled-components";

import TweetAvatar from "./TweetAvatar";
import TweetText from "././TweetText";

const StyledTweet = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  padding: 20px 25px;
  border: 2px solid #333;
  border-radius: 5px;
  box-shadow: 1px 1px #333;
  background: #fff;
`;

const TweetUser = styled.div`
  display: flex;
  align-items: center;
`;

const TweetUsername = styled.a`
  font-size: 2em;
  text-decoration: none;
`;

function Tweet({ tweet }) {
  return (
    <StyledTweet>
      <TweetUser>
        <TweetAvatar image={tweet.user.profile_image_url_https} />
        <TweetUsername href={tweet.user.url} target="_blank">
          {tweet.user.name}
        </TweetUsername>
      </TweetUser>
      <TweetText>{tweet.text}</TweetText>
    </StyledTweet>
  );
}

export default Tweet;
