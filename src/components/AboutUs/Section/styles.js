import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${(props) => props.bgColor || '#fff'};
  ${(props) => props.bgImage && `background:  no-repeat center center url(${props.bgImage});`}
  background-size: cover;
  min-height: 100vh;
  ${(props) => props.bgImage && `color: #fff;`}

  .section-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 0 20px 4rem 20px;
    h2 {
      font-size: 2.7rem;
      margin-bottom: 12px;
      text-align: center;
      font-weight: 500;
      text-transform: uppercase;
    }
    p {
      text-align: center;
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    padding: 8rem 0;
    .section-header {
      h2 {
        font-size: 1.6rem;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;

export const AboutSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7rem;
  & > div {
    flex: 1;
  }

  img {
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 32px;
  }
`;
