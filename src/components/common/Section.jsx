import { Box } from '@mui/material';

const Section = ({ children, ...props }) => {
  return (
    <Box as='section' sx={{ py: 10, display: 'flex' }} {...props}>
      {children}
    </Box>
  );
};

export default Section;
