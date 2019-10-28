import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Container from "components/Container";
import Tweet from "components/Tweet";

const TweetsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);

  &[disabled] {
    opacity: 0.5;
  }
`;

const LoadingTweets = styled.h1`
  text-align: center;
`;

const NoTweets = styled.h1`
  text-align: center;
`;

function Tweets(props) {
  const {
    tweets: { isFetching, query, messages }
  } = props;

  return isFetching ? (
    <TweetsContainer>
      <LoadingTweets>Loading new Tweets...</LoadingTweets>
    </TweetsContainer>
  ) : (
    <TweetsContainer>
      {query && <h2>Search results for: {query}</h2>}
      {messages.length > 0 ? (
        messages.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <NoTweets>No tweets, sorry :(</NoTweets>
      )}
    </TweetsContainer>
  );
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets
  };
};

export default connect(mapStateToProps)(Tweets);
