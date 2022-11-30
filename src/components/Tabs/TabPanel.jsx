import { Box } from '@mui/material';

export function TabPanel(props) {
  const { children, currentIndex, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={currentIndex !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {currentIndex === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default TabPanel;
