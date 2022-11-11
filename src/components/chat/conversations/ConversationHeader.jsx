import { Box, Typography } from '@mui/material';
import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useWindowSizeChange } from 'features/common/hooks/useWindowSizeChange';
import BackButton from 'components/common/Button/BackButton';
const ConversationHeaderWrapper = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  background: #7db4bb;

  padding: 0 20px;
  height: 60px;
`;

const HeaderTitle = styled(Typography)`
  text-align: center;
  color: #fff;
  width: 100%;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: fit-content;
    transform: translate(-50%, -50%);
  }
`;

const ConversationHeader = ({ title }) => {
  const { isMobile } = useWindowSizeChange();

  return (
    <ConversationHeaderWrapper>
      {isMobile && <BackButton />}
      <HeaderTitle
        variant='h6'
        sx={{
          fontSize: ['16px', '18px'],
        }}
      >
        {title}
      </HeaderTitle>
    </ConversationHeaderWrapper>
  );
};

export default ConversationHeader;
