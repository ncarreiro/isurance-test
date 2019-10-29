import React from "react";

import Header from "containers/header";
import Tweets from "containers/tweets";
import MainContainer from "components/MainContainer";

class App extends React.Component {
  render() {
    return (
      <MainContainer data-testid="main-container">
        <Header />
        <Tweets />
      </MainContainer>
    );
  }
}

export default App;
