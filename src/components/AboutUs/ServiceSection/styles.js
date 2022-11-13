import styled from 'styled-components';

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 32px;
  background: #fff;
  border-radius: 20px;
  /* box-shadow: 3px 2px 7px 1px #e1e8ed; */
  border: 1px solid #e1e8ed;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  .icon {
    font-size: 4rem;
    color: #87ceeb;
    margin-bottom: 8px;
  }

  h3 {
    color: inherit;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    text-align: center;
  }
`;
