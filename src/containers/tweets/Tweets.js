import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Container from "components/Container";
import Tweet from "components/Tweet";

const TweetsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
`;

const NoTweets = styled.h1`
  text-align: center;
`;

function Tweets(props) {
  const { tweets } = props;

  return (
    <TweetsContainer>
      {tweets.length > 0 ? (
        tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <NoTweets>No tweets, sorry :(</NoTweets>
      )}
    </TweetsContainer>
  );
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets.messages
  };
};

export default connect(mapStateToProps)(Tweets);
