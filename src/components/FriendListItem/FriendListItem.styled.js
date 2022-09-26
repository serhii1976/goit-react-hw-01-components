import styled from 'styled-components';

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${e => {
    return e.selected ? 'green' : 'red';
  }};

  border: 1px solid gray;
  border-radius: 50%;
`;
export const Avatar = styled.img`
  border: 2px solid grey;
  border-radius: 5px;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
