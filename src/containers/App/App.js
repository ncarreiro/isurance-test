import React from "react";

import Header from "containers/header/Header";
import Messages from "containers/messages/Messages";
import MainContainer from "components/MainContainer";

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Header />
        <Messages />
      </MainContainer>
    );
  }
}

export default App;
