import styled from 'styled-components';

export const Cards = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Card = styled.li`
  width: 24vw;
  margin-bottom: 15px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: start;

  border-radius: 5px;
  padding: 5px 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
