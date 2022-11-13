import { BsFillPeopleFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { SlSupport } from 'react-icons/sl';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';

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

export const FEEDBACKS_SAMPLE = [
  {
    id: 1,
    rating: {
      value: 5,
      title: 'Xuất sắc',
    },
    body: 'Cảm ơn AMHERE đã cho tôi cơ hội được chia sẻ những tâm tư và tình cảm của mình. Từ khi biết đến AMHERE, tâm hồn tôn đã mỗi ngày tích cực hơn và có nhiều niềm vui hơn trong cuộc sống.',
    owner: {
      name: 'Lê Mai Bình',
      role: 'Người dùng dịch vụ',
    },
  },
  {
    id: 2,
    rating: {
      value: 4.5,
      title: 'Xuất sắc',
    },
    body: 'Thật tuyệt vời, nhờ AMHERE tôi đã thoát khỏi những cảm xúc tiêu cực được dồn nén bấy lâu nay. Thật sự Việt Nam rất cần những con người như bạn để giải quyết những vấn đề tâm lý của xã hội.',
    owner: {
      name: 'Trần Thanh Nhã',
      role: 'Người dùng dịch vụ',
    },
  },
  {
    id: 3,
    rating: {
      value: 4,
      title: 'Xuất sắc',
    },
    body: 'Tôi thực sự đã được chữa lành tâm hồn sau khi sử dụng dịch vụ. Tôi đã giới thiệu cho gia đình mình và họ cũng đánh giá rất cao mô hình dịch vụ hoàn toàn mới mẻ này. Cảm ơn các bạn rất nhiều.',
    owner: {
      name: 'Mai Văn Nhật Hoàng',
      role: 'Người dùng dịch vụ',
    },
  },
  {
    id: 4,
    rating: {
      value: 5,
      title: 'Xuất sắc',
    },
    body: 'Suy nghĩ tiêu cực trong tôi đã dần dần biết mất sau khi tiếp cận được với AMHERE',
    owner: {
      name: 'Hoàng Thị Nguyệt',
      role: 'Người dùng dịch vụ',
    },
  },
  {
    id: 5,
    rating: {
      value: 5,
      title: 'Xuất sắc',
    },
    body: 'Việt Nam chúng ta cần thêm rất nhiều những người như các bạn. Tôi lấy lòng ngưỡng mộ và biết ơn AMHERE.',
    owner: {
      name: 'Nguyễn Phúc Lâm',
      role: 'Người dùng dịch vụ',
    },
  },
  {
    id: 6,
    rating: {
      value: 5,
      title: 'Xuất sắc',
    },
    body: 'Dịch vụ hay như này mà chưa được nhiều người biết đến nhỉ? Chúc các bạn mỗi ngày một thành công',
    owner: {
      name: 'Nguyễn Thành Tài',
      role: 'Người dùng dịch vụ',
    },
  },
];

export const SERVICES_SAMPLE = [
  {
    id: 1,
    icon: BsFillPeopleFill,
    title: '+ 1000 người lắng nghe',
    description:
      'Đội ngũ những người lắng nghe được đào tạo bài bản và đã hỗ trợ hơn 1000 khách hàng.',
  },
  {
    id: 2,
    icon: SlSupport,
    title: 'Hỗ trợ 24/7',
    description: 'Hỗ trợ cấp cứu trầm cảm và giải đáp mọi thắc mắc khi dùng dịch vụ .',
  },
  {
    id: 3,
    icon: AiOutlineCalendar,
    title: 'Đặt lịch hẹn ngay lập tức',
    description:
      'Hỗ trợ đặt lịch với người lắng nghe và chuyên gia tâm lý để giải quyết vấn đề của bạn.',
  },
  {
    id: 4,
    icon: BiSupport,
    title: 'Đường dây nóng khẩn cấp',
    description: 'Hỗ trợ 24/7 giúp bạn giải quyết những vấn đề khủng hoảng trong tâm lý.',
  },
  {
    id: 5,
    icon: RiGitRepositoryPrivateLine,
    title: 'Bảo mật thông tin',
    description: 'Thông tin của bạn được hoàn toàn bảo mật khi dùng dịch vụ của AMHERE.',
  },
  {
    id: 6,
    icon: HiOutlineChatAlt2,
    title: 'Cộng đồng chữa lành',
    description:
      'Nơi bạn có thể chia sẻ những tâm sự và tìm lời khuyên với những người từng gặp vấn đề về tâm lý. ',
  },
];
