import React from 'react';
import * as Styled from './styles';
import AboutUsImage from '../../../assets/img/about-us.png';

const AboutSection = () => {
  return (
    <Styled.AboutSection>
      <div className='left'>
        <img src={AboutUsImage} alt='' />
      </div>
      <div className='right'>
        <p>
          Thế giới xung quanh chúng ta đang ngày một phát triển, thế nhưng những con người trong thế
          giới ấy lại ngày càng lạc lõng trong sự cô đơn. Chúng ta luôn cố gắng tìm kiếm một nơi
          chốn, một bến bờ, một cuộc sống mà chúng ta có thể thoải mái chia sẻ tâm sự, được lắng
          nghe và có thể dựa vào một ai đó. Nhưng để tìm được một người có thể tâm sự, nói chuyện
          cùng thì vô cùng khó.
        </p>

        <p>
          Lắng nghe được sự khó khăn đó, AMHERE đã ra đời AMHERE là nơi cung cấp dịch vụ chữa lành
          qua phương thức lắng nghe. Chúng tôi tập trung vào ngành tâm lý, với slogan “CHỮA LÀNH
          THÔNG QUA LẮNG NGHE” và CHIA SẺ và LẮNG NGHE là GIÁ TRỊ CỐT LÕI của tổ chức.
        </p>
        <p>
          Với những người lắng nghe tình nguyện đưa đến một nơi tâm sự cho mọi người, chúng tôi rất
          vui khi được nói rằng: “Chúng tôi sẵn sàng được nghe câu chuyện của bạn!”{' '}
        </p>
        <p>
          Dù là bất kỳ vấn đề gì, không quan trọng bạn là ai, AMHERE vẫn luôn là chỗ dựa tinh thần
          cho bạn - là nơi bạn được lắng nghe và quan tâm, chia sẻ.
        </p>
        <p className='italic'>Tuấn Khang - Amhere CEO</p>
      </div>
    </Styled.AboutSection>
  );
};

export default AboutSection;
