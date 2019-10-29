import React from "react";
import { connect } from "react-redux";
import { clearTweetsQuery, fetchTweetsByQuery } from "actions";
import styled from "styled-components";

import Container from "components/Container";
import Input from "components/Input";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  color: white;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

function Header(props) {
  let searchTimeout;

  function handleOnChange(event) {
    // Clears previous timeout
    clearTimeout(searchTimeout);

    // Creating the query variable
    const query = event.target.value;

    // Verify if query is empty or doesn't have the Hash or Username queries filled. In other case, dispatch the search Redux Action.
    switch (query) {
      case "":
      case " ":
      case "@":
      case "#":
        // If no value, empty space or only @ and # symbols are sent, prevent the search
        break;
      default:
        // Shows the user that the Search Action begins
        props.dispatch(clearTweetsQuery());
        // Input timeout of 2 seconds before the Redux Action is dispatched
        searchTimeout = setTimeout(
          () => props.dispatch(fetchTweetsByQuery(query)),
          1000
        );
        break;
    }
  }

  return (
    <HeaderContainer data-testid="header-container">
      <Container>
        <Input
          data-testid="header-search-input"
          onChange={handleOnChange}
          placeholder="Type a #hash, @user, or any text to start searching"
        />
      </Container>
    </HeaderContainer>
  );
}

export default connect()(Header);
