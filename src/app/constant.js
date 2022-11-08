export const ROLE_MEMBER_STRING = 'nguoi-ke-chuyen';
export const ROLE_LISTENER_STRING = 'nguoi-lang-nghe';
export const REACT_APP_API_URL = 'http://localhost:4000/api';

export const APP_ROUTES = {
  login: '/auth/login',
  register: '/auth/register',
  home: '/',
  aboutUs: '/about-us',
  chat: '/chat',
  listenerDetail: '/listeners',
};

export const NAV_ITEMS = [
  {
    label: 'Trang chủ',
    href: '/',
  },
  {
    label: 'Về chúng tôi',
    href: '/about-us',
  },
  {
    label: 'Phòng chat',
    href: '/chat',
  },
];

export const CATEGORIES = [
  { label: 'Công việc', value: 'working' },
  { label: 'Học tập', value: 'learning' },
  { label: 'Lo âu', value: 'anxious' },
  { label: 'Gia đình', value: 'family' },
  { label: 'Tình cảm', value: 'love' },
  { label: 'Xâm hại', value: 'harm-sex' },
];

export const SELECT_FIELD_LIST = [
  {
    id: 'gender',
    label: 'Giới tính',
    options: [
      {
        label: 'Nữ',
        value: 'female',
      },
      {
        label: 'Nam',
        value: 'male',
      },
      {
        label: 'Khác',
        value: 'others',
      },
    ],
  },
  {
    id: 'category',
    label: 'Lĩnh vực',
    options: [
      {
        label: 'Người nghe',
        value: 'normal',
      },
      {
        label: 'Chuyên nghiệp',
        value: 'pro',
      },
      {
        label: 'Bác sĩ',
        value: 'master',
      },
    ],
  },
  {
    id: 'region',
    label: 'Khu vực',
    options: [
      {
        label: 'Hà Nội',
        value: 'hanoi',
      },
      {
        label: 'Hồ Chí Minh',
        value: 'hcm',
      },
      {
        label: 'Đà Nẵng',
        value: 'danang',
      },
    ],
  },
];

export const CONVERSATION_EXAMPLE = [
  {
    _id: 1,
    nickname: 'User 1',
  },
  {
    _id: 2,
    nickname: 'User 2',
  },
  {
    _id: 3,
    nickname: 'User 3',
  },
];

export const CHAT_SAMPLE = [
  {
    id: 1,
    nickname: 'Barox',
    message: 'Hello World',
    isSender: true,
  },
  {
    id: 2,
    nickname: 'Ngyn',
    message: 'Hi',
    isSender: false,
  },
  {
    id: 3,
    nickname: 'Barox',
    message: 'I love you',
    isSender: true,
  },
];
