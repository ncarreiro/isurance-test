import React from "react";

import Header from "containers/header/Header";
import Tweets from "containers/tweets/Tweets";
import MainContainer from "components/MainContainer";

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Header />
        <Tweets />
      </MainContainer>
    );
  }
}

export default App;
