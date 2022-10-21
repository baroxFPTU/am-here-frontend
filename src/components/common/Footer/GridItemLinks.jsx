import { Grid, List, ListItem, Stack, Typography } from '@mui/material';
import GridItemLink from './GridItemLink';

const GridItemLinks = ({ label, links }) => {
  return (
    <Grid item xs={3}>
      <Stack direction='column' alignItems='start' className='AboutUs'>
        <Typography variant='h6' sx={{ textTransform: 'uppercase', fontSize: '0.8rem' }}>
          {label}
        </Typography>
        <List dense={true}>
          {links.map((link) => (
            <ListItem style={{ paddingLeft: 0 }} noPadding>
              <GridItemLink href={link.href} label={link.label} />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Grid>
  );
};

export default GridItemLinks;
