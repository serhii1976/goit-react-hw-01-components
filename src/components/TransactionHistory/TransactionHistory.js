import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  TableBody,
  TableRowHead,
  TableRowData,
  ItemsHead,
  ItemsData,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <TableRowHead>
          <ItemsHead>Type</ItemsHead>
          <ItemsHead>Amount</ItemsHead>
          <ItemsHead>Currency</ItemsHead>
        </TableRowHead>
      </TableHead>

      <TableBody>
        {items.map(transactions => (
          <TableRowData key={transactions.id}>
            <ItemsData>{transactions.type}</ItemsData>
            <ItemsData>{transactions.amount}</ItemsData>
            <ItemsData>{transactions.currency}</ItemsData>
          </TableRowData>
        ))}
      </TableBody>
    </TransactionsTable>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
  transactions: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
