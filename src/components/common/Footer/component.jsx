import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={3}>
            <Logo />
          </Grid>
          <Grid item xs={3}>
            <Stack direction='column' alignItems='start' className='AboutUs'>
              <Typography variant='h6'>Ve chung toi</Typography>
              <List dense={true}>
                {generate(
                  <ListItem pl={0} style={{ paddingLeft: 0 }}>
                    <ListItemText primary='Single-line item' />
                  </ListItem>
                )}
              </List>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack direction='column' alignItems='start' className='AboutUs'>
              <Typography variant='h6'>Van de</Typography>
              <List dense={true}>
                {generate(
                  <ListItem style={{ paddingLeft: 0 }}>
                    <ListItemText primary='Single-line item' />
                  </ListItem>
                )}
              </List>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack direction='column' alignItems='start' className='AboutUs'>
              <Typography variant='h6'>Lien he</Typography>
              <List dense={true}>
                {generate(
                  <ListItem style={{ paddingLeft: 0 }}>
                    <ListItemText primary='Single-line item' />
                  </ListItem>
                )}
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Divider light style={{ margin: '20px 0' }} />
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <div className=''>
            <Link href='#'>Ban quyen thuoc ve</Link>
            <Link href='#'>AMHERE</Link>
          </div>
          <div className=''>
            <span>© 2022 Copyright</span>
          </div>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
