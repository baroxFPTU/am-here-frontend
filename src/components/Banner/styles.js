import styled from "styled-components";
// import HeroHomeBg from 'assets/img/hero_home_bg_1.png';
import HeroHomeBg from "../../img/HKT-banner.png";

export const Banner = styled.div`
  background: url(${HeroHomeBg}) no-repeat center bottom;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
  background-position: top;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
