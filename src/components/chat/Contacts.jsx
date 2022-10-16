import { Typography } from '@mui/material';
import { ROLE_LISTENER_STRING, ROLE_MEMBER_STRING } from 'app/constant';
import { selectCurrentRole } from 'features/auth/authSlice';
import { chatActions, selectCurrentReceiver } from 'features/chat/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Contact from './Contact';

export default function Contacts({ contacts }) {
  const dispatch = useDispatch();
  const currentReceiver = useSelector(selectCurrentReceiver);
  const currentRole = useSelector(selectCurrentRole);
  const handleChangeContactSelect = (contactId) => {
    dispatch(chatActions.setCurrentReceiver(contactId));
  };
  console.log(contacts);

  return (
    <Container>
      <div className='contacts-header'>
        <Typography variant='h6' sx={{ textAlign: 'center', color: '#fff', width: '100%' }}>
          {currentRole == ROLE_MEMBER_STRING && 'Người lắng nghe'}
          {currentRole == ROLE_LISTENER_STRING && 'Người kể chuyện'}
        </Typography>
      </div>
      <div className='contacts'>
        {contacts.map((contact) => (
          <Contact
            key={contact._id}
            data={contact}
            onChangeSelectContact={handleChangeContactSelect}
            isSelected={Boolean(
              (typeof currentReceiver === 'string' ? currentReceiver : currentReceiver._id) ===
                contact._id
            )}
          />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 60px 90%;
  .contacts-header {
    display: flex;
    align-items: center;
    background: #7db4bb;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #fafafa;
    height: 100%;
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
  }
`;
