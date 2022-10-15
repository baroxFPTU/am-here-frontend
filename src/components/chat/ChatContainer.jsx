import React from "react";
import styled from "styled-components";
import ChatContent from "./ChatContent";
import Contacts from "./Contacts";

function ChatContainer() {
  return (
    <>
      <Container>
        <Contacts />
        <ChatContent />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: beige;
  position: relative;
  height: 95%;
  width: 95%;
  border-radius: 10px;
  overflow: hidden;
`;

export default ChatContainer;
