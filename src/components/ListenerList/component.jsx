import { Grid, Link, Pagination, Stack, Typography } from '@mui/material';

import ListenerCard from 'components/ListenerCard';
import { Link as RouterLink } from 'react-router-dom';

const ListenerList = ({ listeners, haveListeners }) => {
  const NotHaveListeners = (
    <Stack direction='row' justifyContent='center' alignContent='center' p={6}>
      <Typography>
        Không có người lắng nghe nào.{' '}
        <Link component={RouterLink} to='/#thanh-nguoi-lang-nghe'>
          Trở thành người lắng nghe
        </Link>
      </Typography>
    </Stack>
  );

  return haveListeners ? (
    <>
      <Grid container spacing={4} alignItems='stretch'>
        {listeners.map((listener, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ListenerCard data={listener} />
          </Grid>
        ))}
      </Grid>
      <Stack direction='row' justifyContent='center'>
        <Pagination sx={{ p: 5 }} count={10} />
      </Stack>
    </>
  ) : (
    NotHaveListeners
  );
};

export default ListenerList;
