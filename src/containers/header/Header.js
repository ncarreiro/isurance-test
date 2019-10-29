import React from "react";
import { connect } from "react-redux";
import { fetchTweets } from "../../actions";
import styled from "styled-components";

import Container from "components/Container";
import Input from "components/Input";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  color: white;
`;

function Header(props) {
  let searchTimeout;

  function fetchTweetsByQuery(event) {
    // Clears previous timeout
    clearTimeout(searchTimeout);

    // Creating the query variable
    const query = event.target.value;

    // Verify if query is empty or doesn't have the Hash or Username queries completed. In other case, dispatch the search Redux Action.
    switch (query) {
      case "":
      case "@":
      case "#":
        break;
      default:
        // Input timeout of 2 seconds before the Redux Action is dispatched
        searchTimeout = setTimeout(
          () => props.dispatch(fetchTweets(query)),
          2000
        );
        break;
    }
  }

  return (
    <HeaderContainer data-testid="header">
      <Container>
        <Input
          onChange={fetchTweetsByQuery}
          placeholder="Type a #hash, @user, or any text and wait a second to search"
        />
      </Container>
    </HeaderContainer>
  );
}

export default connect()(Header);
