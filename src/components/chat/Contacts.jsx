import { chatActions, selectCurrentReceiver } from 'features/chat/chatSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Contact from './Contact';

export default function Contacts({ contacts }) {
  const dispatch = useDispatch();
  const currentReceiver = useSelector(selectCurrentReceiver);
  const handleChangeContactSelect = (contactId) => {
    dispatch(chatActions.setCurrentReceiver(contactId));
  };

  return (
    <Container>
      <div className='contacts-header'>
        <h5>Chat</h5>
      </div>
      <div className='contacts'>
        {contacts.map((contact) => (
          <Contact
            key={contact._id}
            data={contact}
            onChangeSelectContact={handleChangeContactSelect}
            isSelected={Boolean(currentReceiver._id === contact._id)}
          />
        ))}
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
