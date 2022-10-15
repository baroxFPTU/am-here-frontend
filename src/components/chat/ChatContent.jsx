import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";

function ChatContent() {
  return (
    <Container>
      <div className="chat-header">
        <div className="header-contact"></div>
        <h5>User name</h5>
      </div>
      <div className="chat-messages"></div>
      <ChatInput />
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: 10% 80% 10%;
  .chat-header {
    width: 100%;
    height: 60px;
    display: flex;
    background-color: #cce2f5;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
    .header-contact {
      height: 45px;
      width: 45px;
      background-color: white;
      border-radius: 50px;
    }
    h5 {
      font-size: 17px;
      font-weight: 600;
    }
  }
`;

export default ChatContent;
