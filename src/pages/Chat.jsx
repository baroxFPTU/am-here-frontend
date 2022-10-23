/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, Button, Container as MuContainer, Stack } from '@mui/material';

import { baseURL } from 'app/axiosClient';
import { REACT_APP_API_URL, ROLE_LISTENER_STRING, ROLE_MEMBER_STRING } from 'app/constant';

import { selectCurrentRole, selectUser } from 'features/auth/authSlice';
import { chatActions, selectCurrentReceiver } from 'features/chat/chatSlice';

import ChatInput from 'components/chat/ChatInput';
import ChatListMessage from 'components/chat/ChatListMessage';
import ConversationHeader from 'components/chat/conversations/ConversationHeader';
import ConversationList from 'components/chat/conversations/ConversationList';
import { ConversationSection } from 'components/chat/conversations/styles';
import { ChatWrapper } from 'components/chat/styles';

const StyledButton = styled(Button)`
  &:hover {
    background: #e7ebf0 !important;
    box-shadow: none !important ;
  }
`;

const contacts = [
  {
    _id: 1,
    nickname: 'User 1',
  },
  {
    _id: 2,
    nickname: 'User 2',
  },
  {
    _id: 3,
    nickname: 'User 3',
  },
  {
    _id: 1,
    nickname: 'User 1',
  },
  {
    _id: 2,
    nickname: 'User 2',
  },
  {
    _id: 3,
    nickname: 'User 3',
  },
  {
    _id: 1,
    nickname: 'User 1',
  },
  {
    _id: 2,
    nickname: 'User 2',
  },
  {
    _id: 3,
    nickname: 'User 3',
  },
  {
    _id: 1,
    nickname: 'User 1',
  },
  {
    _id: 2,
    nickname: 'User 2',
  },
  {
    _id: 3,
    nickname: 'User 3',
  },
  {
    _id: 1,
    nickname: 'User 1',
  },
  {
    _id: 2,
    nickname: 'User 2',
  },
  {
    _id: 3,
    nickname: 'User 3',
  },

  {
    _id: 1,
    nickname: 'User 1',
  },
  {
    _id: 2,
    nickname: 'User 2',
  },
  {
    _id: 3,
    nickname: 'User 3',
  },
  {
    _id: 1,
    nickname: 'User 1',
  },
  {
    _id: 2,
    nickname: 'User 2',
  },
  {
    _id: 3,
    nickname: 'User 3',
  },
];

export default function Chat() {
  const params = useParams();
  const socket = useRef();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  // const contacts = useSelector(selectContacts);
  const currentRole = useSelector(selectCurrentRole);
  const currentReceiver = useSelector(selectCurrentReceiver);
  const [messages, setMessages] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const senderId = currentUser.id;
  const receiverId = currentReceiver?._id || params.uid;

  useEffect(() => {
    socket.current = io(baseURL);
    socket.current.emit('add-user', senderId);
    socket.current.on('msg-receive', (data) => {
      console.log({ dataReceived: data });
      pushMessageToState(data);
    });
    (async () => {
      try {
        const url =
          currentRole === ROLE_MEMBER_STRING
            ? `${REACT_APP_API_URL}/conversation?senderId=${senderId}`
            : `${REACT_APP_API_URL}/conversation/listener?receiverId=${senderId}`;
        const response = await axios.get(url);
        const currentReceiver = params.uid || response.data[0];
        dispatch(
          chatActions.setData({
            contacts: response.data,
            currentReceiver: currentReceiver,
          })
        );

        const conversationResponse = await axios.post(`${REACT_APP_API_URL}/message/getmsg`, {
          sender: senderId,
          receiver: receiverId,
        });
        setMessages(conversationResponse.data);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [isStart, currentUser, dispatch]);

  useEffect(() => {
    (async () => {
      if (currentReceiver) {
        const conversationResponse = await axios.post(`${REACT_APP_API_URL}/message/getmsg`, {
          sender: senderId,
          receiver: receiverId,
        });
        setMessages(conversationResponse.data);
      }
    })();
  }, [currentReceiver, currentUser]);

  const handleSendMessage = (message) => {
    const data = {
      receiver: receiverId,
      sender: senderId,
      message: message,
    };
    socket.current.emit('send-msg', data);
    pushMessageToState(data);
  };
  const pushMessageToState = (messageData) => {
    setMessages((prevList) => [...prevList, messageData]);
  };

  const handleStartConversation = () => {
    setIsStart(true);
  };

  const handleChangeContact = (contactId) => {
    dispatch(chatActions.setCurrentReceiver(contactId));
  };

  const conversationHeader =
    currentRole === ROLE_LISTENER_STRING ? 'Người kể chuyện' : 'Người lắng nghe';

  return (
    <MuContainer>
      <ChatWrapper sx={{ height: '100%', py: 3, display: 'flex' }}>
        <ConversationSection>
          <ConversationHeader title={conversationHeader} />
          <ConversationList data={contacts} onChangeContact={handleChangeContact} />
        </ConversationSection>
        <ChatContainer sx={{}}>
          <div className='chat-header'>
            <Avatar />
            <h5>{currentReceiver?.nickname}</h5>
          </div>
          <ChatListMessage messages={messages} currentId={senderId} />
          {!isStart && currentRole === ROLE_MEMBER_STRING && (
            <StyledButton
              onClick={handleStartConversation}
              variant='contained'
              size='large'
              sx={{
                background: '#fff',
                color: '#333',
                margin: '10px',
                boxShadow: 'none',
                border: '1px solid #e7ebf0',
              }}
            >
              Bắt đầu cuộc trò chuyện
            </StyledButton>
          )}
          <Stack justifyContent='center' alignItems='center'>
            {(isStart || currentRole === ROLE_LISTENER_STRING) && (
              <ChatInput onSendMessage={handleSendMessage} />
            )}
          </Stack>
        </ChatContainer>
      </ChatWrapper>
    </MuContainer>
  );
}

const ChatContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .chat-header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    gap: 10px;
    background-color: #7db4bb;
    color: #fff;
    h5 {
      font-size: 17px;
      font-weight: 600;
    }
  }
`;
