import React from "react";
import styled from "styled-components";

export default function Contacts() {
  return (
    <Container>
      <div className="contacts-header">
        <h5>Chat</h5>
      </div>
      <div className="contacts">
        <div className="contact selected">
          <div className="contact_logo"></div>
          <div className="contact_user">
            <h4>User name</h4>
            <p>New message</p>
          </div>
        </div>

        <div className="contact">
          <div className="contact_logo"></div>
          <div className="contact_user">
            <h4>User name</h4>
            <p>New message</p>
          </div>
        </div>

        <div className="contact">
          <div className="contact_logo"></div>
          <div className="contact_user">
            <h4>User name</h4>
            <p>New message</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  box-sizing: border-box;
  border-right: 2px solid #bebebe;
  display: grid;
  grid-template-rows: 10% 90%;
  .contacts-header {
    padding-left: 15px;
    display: flex;
    align-items: center;
    h5 {
      font-size: 20px;
      color: #3881a0;
      font-weight: 400;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* background-color: #3881a0; */
    height: 100%;
    padding: 0 5px;

    .selected {
      background-color: #cce2f5 !important;
    }

    .contact {
      box-sizing: border-box;
      width: 100%;
      height: 70px;
      padding-left: 15px;
      /* background-color: #bebebe; */
      border-radius: 3px;
      align-items: center;
      display: flex;
      gap: 10px;
      cursor: pointer;
      transition: 0.2s ease;

      &:hover {
        background-color: #ebebeb7a;
        transition: 0.2s ease;
      }

      .contact_logo {
        height: 60px;
        width: 60px;
        background-color: #3881a0;
        border-radius: 50px;
      }
      .contact_user {
        h4 {
          margin: 0;
        }
        p {
          margin: 0;
        }
      }
    }
  }
`;
