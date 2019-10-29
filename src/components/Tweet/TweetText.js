import styled from "styled-components";

const MessageText = styled.p`
  margin-left: 70px;
  text-align: left;
  font-size: 1.2em;
  line-height: 1.4em;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1em;
  }
`;

export default MessageText;
