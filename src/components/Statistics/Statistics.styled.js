import styled from 'styled-components';

export const StatisticsWraper = styled.section`
  width: 24vw;
  background-color: #7884984a;
  margin: 0 auto;
  padding: 100px 80px;
  margin-top: 20px;
`;
export const StatisticsBox = styled.div`
  background-color: white;
  border: 1px solid #8080804a;
`;
export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 2vw;
`;
export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsElement = styled.li`
  background-color: ${getRandomHexColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border: 2px solid #8080804a;
  padding-top: 5px;
  padding-bottom: 5px;
`;
