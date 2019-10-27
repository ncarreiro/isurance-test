import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Container from "components/Container";
import Tweet from "components/Tweet";

const TweetsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
`;

class Tweets extends React.Component {
  render() {
    const { tweets } = this.props;

    return (
      <TweetsContainer>
        {tweets.length > 0
          ? tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
          : "No tweets :("}
      </TweetsContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets
  };
};

export default connect(mapStateToProps)(Tweets);
