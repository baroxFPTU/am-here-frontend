import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const GridItemLinkStyled = styled(Link)`
  &:hover {
    color: #1da9b3;
  }
`;

const GridItemLink = ({ label, href }) => {
  return (
    <GridItemLinkStyled
      component={RouterLink}
      to={href}
      sx={{
        textDecoration: 'none',
        color: '#333',
      }}
    >
      {label}
    </GridItemLinkStyled>
  );
};

export default GridItemLink;
