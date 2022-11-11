import Button from 'components/common/Button';
import styled from 'styled-components';

export const WelcomeChat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  h2 {
    margin-top: 18px;
    font-size: 22px;
  }
  p {
    margin-top: 10px;
  }
`;

export const SendMessageButton = styled(Button)`
  margin-top: 24px;
`;
