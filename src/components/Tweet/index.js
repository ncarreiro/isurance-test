import React from "react";
import styled from "styled-components";

import TweetUser from "./TweetUser";
import TweetText from "./TweetText";

const TweetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  padding: 20px 25px;
  border: 3px solid rgb(37, 51, 65);
  border-radius: 5px;
`;

function Tweet({ tweet }) {
  return tweet ? (
    <TweetContainer data-testid="tweet-container">
      <TweetUser user={tweet.user} />
      <TweetText data-testid="tweet-text">{tweet.text}</TweetText>
    </TweetContainer>
  ) : (
    <div data-testid="tweet-container-error">Error: Tweet prop missing.</div>
  );
}

export default Tweet;
