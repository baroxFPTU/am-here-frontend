import {
  Box,
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
import Copyright from './Copyright';
import GridItemLinks from './GridItemLinks';

export function generate({ options, element }) {
  return options.map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const aboutUsLinks = [
  {
    label: 'Blog',
    href: '#blog',
  },
  {
    label: 'FAQ',
    href: '#FAQ',
  },
];

const problemLinks = [
  {
    label: 'Công việc',
    href: '#blog',
  },
  {
    label: 'Lo âu',
    href: '#FAQ',
  },
  {
    label: 'Học tập',
    href: '#FAQ',
  },
  {
    label: 'Gia đình',
    href: '#FAQ',
  },
  {
    label: 'Tình cảm',
    href: '#FAQ',
  },
];

const contactLinks = [
  {
    label: '0977.050.271',
    href: '#FAQ',
  },
  {
    label: 'amhere.life@gmail.com',
    href: '#FAQ',
  },
];

const Footer = () => {
  return (
    <Box as='footer' sx={{ pt: 8, background: '#fafafb' }}>
      <Container>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 6 }}>
          <Grid item xs={3}>
            <Logo />
          </Grid>
          <GridItemLinks label='Về chúng tôi' links={aboutUsLinks} />
          <GridItemLinks label='Vấn đề' links={problemLinks} />
          <GridItemLinks label='Liên hệ' links={contactLinks} />
        </Grid>
      </Container>
      <Container>
        <Divider light />
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
