import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Box, Button, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ListenerCard = ({ data }) => {
  if (!data) return null;

  return (
    <Card sx={{ overflow: 'unset', position: 'relative', mt: '48px' }}>
      <Link to={`/chat/${data._id}`}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='250'
          image={'https://source.unsplash.com/random'}
          sx={{
            position: 'absolute',
            top: '-24px',
            left: '24px',
            width: '128px',
            height: '128px',
            borderRadius: '8px',
            marginTop: '-12px',
          }}
        />
      </Link>

      <CardContent sx={{ paddingTop: '120px' }}>
        <Link to={`/chat/${data.uid}`}>
          <Typography gutterBottom variant='h5' component='div'>
            {data?.nickname || 'Listener'}
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center' }} className='Rates'>
          <StarOutlinedIcon /> 5.0 (20)
        </Box>
        <Box className='Category' sx={{ py: 2 }}>
          <Chip label='Clickable Link' component='a' href='#basic-chip' clickable />
          <Chip label='Clickable Link' component='a' href='#basic-chip' clickable />
        </Box>
        <Typography variant='body2' color='text.secondary' className='Bio'>
          {data?.nickname} are a widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Typography>
        <Button
          size='large'
          variant='contained'
          sx={{ background: '#87ceeb', color: '#fff', position: 'absolute', top: 0, right: 0 }}
        >
          <FiSend />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListenerCard;
