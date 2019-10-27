import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Input from "components/Input";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: white;
  background-color: #222;
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Input />
      </Container>
    </StyledHeader>
  );
}

export default Header;
