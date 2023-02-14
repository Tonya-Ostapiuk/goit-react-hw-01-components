import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css'

 export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
        <thead className={css.th}>
          <tr className={css.tr}>
            <th className={css.border}>Type</th>
            <th className={css.border}>Amount</th>
            <th className={css.border}>Currency</th>
          </tr>
        </thead>
      
        <tbody>
           {items.map(item => (
            <tr className={css.tr} key = {item.id}>
                <td className={css.bord}>{item.type}</td>
                <td className={css.bord}>{item.amount}</td>
                <td className={css.bord}>{item.currency}</td>
             </tr>
      
           ))}
          
        </tbody>
      </table>
    );
  };

  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  }