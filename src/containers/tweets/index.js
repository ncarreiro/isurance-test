import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import Container from "components/Container";

import TweetsLoading from "./TweetsLoading";
import TweetsMessages from "./TweetsMessages";

const TweetsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
`;

function Tweets(props) {
  const { isFetching } = props;

  return (
    <TweetsContainer data-testid="tweets-container">
      {isFetching ? <TweetsLoading /> : <TweetsMessages />}
    </TweetsContainer>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.tweets.isFetching
  };
};

export default connect(mapStateToProps)(Tweets);
