import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Tweet from "components/Tweet";

const SearchQuery = styled.h2`
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const NoTweets = styled.h1`
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

function TweetsMessages(props) {
  const { query, tweets } = props;

  return (
    <div>
      {query && <SearchQuery>Search results for: {query}</SearchQuery>}

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
