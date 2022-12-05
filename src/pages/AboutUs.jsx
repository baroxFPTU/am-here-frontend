import { Container } from '@mui/material';
import Section from 'components/AboutUs/Section';
import AboutSection from 'components/AboutUs/Section/AboutSection';
import FeedbackSection from 'components/AboutUs/FeedbackSection/component';
import React from 'react';
import ServiceSection from 'components/AboutUs/ServiceSection/component';
import IntroSection from 'components/AboutUs/Section/IntroSection';

const AboutUs = () => {
  return (
    <>
      <IntroSection />
      <Section
      // header={{
      //   title: 'Về AMHERE',
      //   subtitle: 'Chia sẻ và lắng nghe là giá trị cốt lõi của tổ chức chúng tôi',
      // }}
      >
        <AboutSection />
      </Section>
      <Section
        header={{
          title: 'TẠI SAO LẠI CHỌN AMHERE',
          subtitle: 'AMHERE đem đến cho bạn những trải nghiệm tuyệt vời nhất.',
        }}
        bgColor={'#f5f8fa'}
      >
        <ServiceSection />
      </Section>
      <Section
        header={{
          title: 'KHÁCH HÀNG ĐÁNH GIÁ CHÚNG TÔI',
          subtitle: 'AMHERE đã giải quyết vấn đề tâm tư của hơn 1.000 khách hàng khác nhau',
        }}
      >
        <FeedbackSection />
      </Section>
    </>
  );
};

export default AboutUs;
