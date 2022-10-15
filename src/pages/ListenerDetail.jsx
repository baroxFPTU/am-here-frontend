import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid as SwiperGrid, Navigation } from 'swiper';
import 'swiper/css/grid';
import { Swiper, SwiperSlide } from 'swiper/react';

//Swiper styles
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ListenerDetail = ({ listener }) => {
  const [value, setValue] = React.useState(0);
  const [dateValue, setDateValue] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = [
    {
      id: 0,
      label: '8h00',
      hourState: 8,
      minuteState: 0,
    },
    {
      id: 1,
      label: '9h00',
      hourState: 9,
      minuteState: 0,
    },
    {
      id: 2,
      label: '10h00',
      hourState: 10,
      minuteState: 0,
    },
    {
      id: 3,
      label: '11h00',
      hourState: 11,
      minuteState: 0,
    },
    {
      id: 4,
      label: '12h00',
      hourState: 12,
      minuteState: 0,
    },
    {
      id: 5,
      label: '13h00',
      hourState: 13,
      minuteState: 0,
    },
    {
      id: 6,
      label: '14h00',
      hourState: 14,
      minuteState: 0,
    },
    {
      id: 7,
      label: '15h00',
      hourState: 15,
      minuteState: 0,
    },
    {
      id: 8,
      label: '16h00',
      hourState: 16,
      minuteState: 0,
    },
    {
      id: 9,
      label: '17h00',
      hourState: 17,
      minuteState: 0,
    },
    {
      id: 10,
      label: '18h00',
      hourState: 18,
      minuteState: 0,
    },
    {
      id: 11,
      label: '19h00',
      hourState: 19,
      minuteState: 0,
    },
  ];

  const numberOfSlidesPerView = data && data.length < 7 ? 3 : 3;

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item sx={12} md={8}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
              <Tab label='Thong tin co ban' {...a11yProps(0)} />
              <Tab label='Phan hoi' {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box id='info'>
              <Stack direction='row' className='BasicInfo'>
                <Box className='Avatar' sx={{ width: 300, height: 300, overflow: 'hidden', mr: 5 }}>
                  <img
                    style={{ width: '100%', objectFit: 'cover' }}
                    src='https://source.unsplash.com/random'
                    alt={listener?.name || 'User Avatar'}
                  />
                </Box>
                <Box>
                  <Typography variant='overline' sx={{ textTransform: 'uppercase' }}>
                    Primary care - Internist
                  </Typography>
                  <Typography variant='h4'>DR. Julia Jhones</Typography>
                  <span className='rating'>
                    <StarOutlinedIcon htmlColor='#ffc107' />
                    <StarOutlinedIcon htmlColor='#ffc107' />
                    <StarOutlinedIcon htmlColor='#ffc107' />
                    <StarOutlinedIcon htmlColor='#ffc107' />
                    <StarOutlineIcon />
                    <small>(145)</small>
                  </span>
                  <Stack direction='row' className='statistic' spacing={1}>
                    <Chip label='854 Views'></Chip>
                    <Chip label='124 Patients'></Chip>
                  </Stack>
                  <Box className='contacts'>
                    <Box sx={{ pt: 3 }}>
                      <Typography variant='subtitle2'>Address</Typography>
                      2726 Shinn Street, New York -
                      <a
                        href='https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {' '}
                        <strong>View on map</strong>
                      </a>
                    </Box>
                    <Box sx={{ pt: 3 }}>
                      <Typography variant='subtitle2'>Phone</Typography>{' '}
                      <a href='tel://000434323342'>+00043 4323342</a> -{' '}
                      <a href='tel://000434323342'>+00043 4323342</a>
                    </Box>
                  </Box>
                </Box>
              </Stack>
              <Box sx={{ py: 4 }}>
                <Typography variant='body' sx={{ fontStyle: 'italic' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque, dolore non
                  velit consequatur cum sunt debitis numquam nam minus sequi amet? Optio deserunt
                  voluptates quasi dignissimos laudantium nobis atque!
                </Typography>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box id='feedbacks'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti dolores
              adipisci suscipit accusamus, quisquam quibusdam consequatur temporibus ipsa, expedita
              ipsam natus amet distinctio non nesciunt est odio, exercitationem unde?
            </Box>
          </TabPanel>
        </Grid>
        <Grid item sx={12} md={4}>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', border: '1px solid #ddd' }}>
            <Box sx={{ p: 3 }}>
              <Typography variant='h4'>Book a conversation</Typography>
            </Box>
            <Box className='Content' sx={{ padding: 3 }}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  sx={{ width: '100%' }}
                  label='Chon ngay'
                  value={dateValue}
                  onChange={(newValue) => {
                    setDateValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <Box sx={{ py: 3 }}>
                  <Swiper
                    modules={[Navigation, SwiperGrid]}
                    spaceBetween={18}
                    slidesPerView={numberOfSlidesPerView}
                    navigation={true}
                    grid={{
                      fill: 'row',
                      rows: 3,
                    }}
                    nextEl={<button>next</button>}
                    className='mySwiper'
                  >
                    {data &&
                      data.map((time) => (
                        <SwiperSlide key={time.hour}>
                          <Button variant='outlined' fullWidth sx={{ textTransform: 'lowercase ' }}>
                            {time.label}
                          </Button>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </Box>
              </LocalizationProvider>
              <Button variant='contained' size='large' sx={{ width: '100%' }}>
                Book now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListenerDetail;
