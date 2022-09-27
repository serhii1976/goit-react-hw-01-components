import styled from 'styled-components';

export const TransactionsTable = styled.table`
  margin: 20px auto;
  border: 2px solid black;
  border-spacing: 0;
    box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
}
`;
export const TableHead = styled.thead`
  background-color: #00d0ff;
`;
export const TableBody = styled.tbody``;
export const TableRowHead = styled.tr`
  color: white;
  width: 60vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;
export const TableRowData = styled.tr`
  width: 60vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
    :nth-child(2n) {
    background-color: #bdbdbd61;
`;
export const ItemsHead = styled.th`
  text-transform: uppercase;
  width: 100%;
  padding: 10px 0;
  margin: 0;
  border: 1px solid grey;
`;
export const ItemsData = styled.td`
  text-transform: capitalize;
  text-align: center;
  color: #747272;
  width: 100%;
  padding: 10px 0;
  margin: 0;
  border: 1px solid grey;
`;
