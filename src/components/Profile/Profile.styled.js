import styled from 'styled-components';

export const Card = styled.div`
  width: 21vw;
  background-color: #7884984a;
  margin: 0 auto;
  padding: 100px;
  margin-top: 20px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid #8080804a;
  border-bottom: 0;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const Avatar = styled.img`
  margin: 0 auto;
  width: 13vw;
  height: 13vw;
  border: 2px solid #8080804a;
  border-radius: 50%;
  padding: 5px;
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  font-size: 18px;
  color: grey;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const Location = styled.p`
  font-size: 18px;
  color: grey;
  text-align: center;
  margin: 0;
`;
export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  list-style: none;
`;
export const Item = styled.li`
  height: 6.5vw;
  background-color: #e4e7e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  border: 2px solid #8080804a;
`;
export const Label = styled.span`
  font-size: 14px;
`;
export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
