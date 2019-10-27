import React from "react";
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

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Input placeholder="Type a #hash, @user, or any text and wait a second to search" />
      </Container>
    </HeaderContainer>
  );
}

export default Header;
