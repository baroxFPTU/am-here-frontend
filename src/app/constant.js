export const ROLE_MEMBER_STRING = 'member';
export const ROLE_LISTENER_STRING = 'listener';
export const REACT_APP_API_URL = 'http://10.1.106.147:3000/api';

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
