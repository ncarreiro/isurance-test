import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Container from "components/Container";
import Message from "components/Message";
import { fetchTweets } from "../../actions";

const StyledMessages = styled(Container)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
`;

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.fetchNewTweets = this.fetchNewTweets.bind(this);
  }

  fetchNewTweets() {
    this.props.dispatch(fetchTweets());
  }

  render() {
    return (
      <StyledMessages>
        <button onClick={this.fetchNewTweets}>PRESS ME FOR TWEETS!</button>
        <Message />
      </StyledMessages>
    );
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets
  };
};

export default connect(mapStateToProps)(Messages);
