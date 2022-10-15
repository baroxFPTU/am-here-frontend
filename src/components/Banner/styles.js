import styled from 'styled-components';
import HeroHomeBg from 'assets/img/hero_home_bg_1.png';

export const Banner = styled.div`
  background: #87ceeb url(${HeroHomeBg}) no-repeat center bottom;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
