import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Tweet from "components/Tweet";

const NoTweets = styled.h1`
  text-align: center;
`;

function TweetsMessages(props) {
  const { query, tweets } = props;

  return (
    <div>
      {query && <h2>Search results for: {query}</h2>}

      {tweets.length > 0 ? (
        tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <NoTweets data-testid="no-tweets">No tweets, sorry :(</NoTweets>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets.messages,
    query: state.tweets.query,
    isFetching: state.tweets.isFetching
  };
};

export default connect(mapStateToProps)(TweetsMessages);
