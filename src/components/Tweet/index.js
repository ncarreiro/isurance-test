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
  return (
    <TweetContainer>
      <TweetUser user={tweet.user} />
      <TweetText>{tweet.text}</TweetText>
    </TweetContainer>
  );
}

export default Tweet;
