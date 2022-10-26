import React from 'react';
import * as Styled from './styles';

const ConversationSection = ({ children, ...props }) => {
  return <Styled.ConversationSection {...props}>{children}</Styled.ConversationSection>;
};

export default ConversationSection;
