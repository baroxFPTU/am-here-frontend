import { selectCurrentReceiver } from 'features/chat/chatSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Contact from '../Contact';

const ConversationList = ({ data, onChangeContact }) => {
  const currentReceiver = useSelector(selectCurrentReceiver);

  const isSelected = (contactId) => {
    if (!currentReceiver) return false;

    return Boolean(
      (typeof currentReceiver === 'string' ? currentReceiver : currentReceiver?._id) === contactId
    );
  };

  return (
    <ConversationListWrapper>
      {data.map((contact) => (
        <Contact
          key={contact._id}
          data={contact}
          onChangeSelectContact={onChangeContact}
          isSelected={isSelected(contact?._id)}
        />
      ))}
    </ConversationListWrapper>
  );
};

const ConversationListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 0;

  /* max-height: calc(100% - 60px); */
  overflow-y: auto;
  padding: 12px;

  .selected {
    background-color: #cce2f5 !important;
  }

  .contact {
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    padding-left: 15px;
    background-color: #fff;
    border-radius: 8px;
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
`;

export default ConversationList;
