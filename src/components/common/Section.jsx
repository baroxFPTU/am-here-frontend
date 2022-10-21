import { Box } from '@mui/material';

const Section = ({ children, noPadding, ...props }) => {
  return (
    <Box as='section' sx={{ py: !noPadding && 10, display: 'flex' }} {...props}>
      {children}
    </Box>
  );
};

export default Section;
