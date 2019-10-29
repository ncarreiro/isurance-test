import React from "react";
import styled from "styled-components";

const TweetsLoadingContainer = styled.h1`
  text-align: center;
`;

function TweetsLoading() {
  return (
    <TweetsLoadingContainer data-testid="tweets-loading-container">
      Loading new Tweets...
    </TweetsLoadingContainer>
  );
}

export default TweetsLoading;
