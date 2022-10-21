import HeroHomeBg from '../../img/HKT-banner.png';
import * as Styled from './styles';

const ListenerCard = () => {
  return (
    <Styled.Banner>
      <img src={HeroHomeBg} alt='Banner AmHere' />
      {/* <Typography variant='h2' sx={{ color: '#fff' }}>
        Chữa lành thông qua lắng nghe
      </Typography> */}
    </Styled.Banner>
  );
};

export default ListenerCard;
