import styled from "styled-components";
import { MdEmail } from "react-icons/md";

import React from "react";
import ChatContainer from "components/chat/ChatContainer";

export default function Chat() {
  return (
    <Container>
      {/* <div className="header">
        <div className="navigate">
          <div className="logo">
          </div>
          <div className="navigate-route">
            <p>Về chúng tôi</p>
            <p>Phòng chat</p>
            <p>Lộ trình</p>
            <p>Q&A</p>
          </div>
        </div>
        <div className="contact">
          <div className="item">
            <MdEmail />
          </div>
          <div className="logo"></div>
        </div>
      </div>
       */}
      <div className="body">
        <ChatContainer />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 88vh;
  width: 100vw;
  display: grid;
  /* grid-template-rows: 20% 80%; */
  .header {
    background-color: wheat;
    display: grid;
    grid-template-columns: 80% 20%;
    box-sizing: border-box;
    padding: 0 75px;
    .navigate {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 60%;
      .navigate-route {
        display: flex;
        gap: 15px;
        font-size: 17px;
      }
      .logo {
        width: 90px;
        height: 70px;
        background-color: aliceblue;
      }
    }
    .contact {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 15px;
      height: 60%;
      .logo {
        height: 60px;
        width: 60px;
        background-color: aqua;
        border-radius: 50px;
      }
      .item {
        svg {
          font-size: 20px;
        }
      }
    }
  }
  .body {
    background-color: #f3f3f3;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    position: inherit;
    padding: 0 75px;
    flex-direction: column;
    align-items: center;
  }
`;
