import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import * as Styled from './styles';

const SettingSidebar = () => {
  return (
    <Styled.SettingSidebar>
      <Drawer
        variant='permanent'
        open={true}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { position: 'relative', zIndex: 'unset' },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box sx={{ width: 250 }} role='presentation'>
          <List>
            <ListItem>
              <Typography variant='h4' sx={{ fontSize: '22px', fontWeight: 500 }}>
                Cài đặt
              </Typography>
            </ListItem>
          </List>
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton disableFocusRipple disableRipple>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton disableFocusRipple disableRipple>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Styled.SettingSidebar>
  );
};

export default SettingSidebar;
