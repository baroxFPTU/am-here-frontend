import Button from 'components/common/Button';
import React from 'react';
import * as Styled from './styles';

const WelcomeChat = ({ isTeller }) => {
  return (
    <Styled.WelcomeChat>
      <h2>Tin nhắn của bạn</h2>
      {isTeller ? (
        <p>Nơi chắc chắn bạn sẽ được lắng nghe.</p>
      ) : (
        <p>Chữa lành thông qua lắng nghe.</p>
      )}
      <Styled.SendMessageButton variant='contained'>Gửi tin nhắn</Styled.SendMessageButton>
    </Styled.WelcomeChat>
  );
};

export default WelcomeChat;
