import React from "react";
import Header from "containers/header/Header";
import Messages from "containers/messages/Messages";
import MainContainer from "components/MainContainer";

function App() {
  return (
    <MainContainer>
      <Header />
      <Messages />
    </MainContainer>
  );
}

export default App;
