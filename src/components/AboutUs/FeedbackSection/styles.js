import styled from 'styled-components';

export const FeedbackCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 10px;
  border: 1px solid #e1e8ed;
  height: 100%;
  transition: all 0.25s ease-in-out;
  background: #fff;

  &:hover {
    box-shadow: 3px 2px 7px 1px #e1e8ed;
  }

  .fb-rating {
    display: flex;
    align-items: center;
    column-gap: 24px;
    margin-bottom: 12px;

    .fb-rating__title {
      font-weight: 600;
    }
  }
  .fb-content {
    font-size: 15px;
    color: #555;
    font-style: italic;
    margin-bottom: 24px;
  }

  .fb-owner {
    margin-top: auto;
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  .fb-owner__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .name {
      font-weight: 500;
    }
  }
`;
