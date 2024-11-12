import clsx from "clsx";
import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    let isEven = true;

    return (
        <table className={s.table}>
            <thead className={s.t_head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            
            <tbody>
                {items.map(item => {
                    const snippet = (<tr className={clsx(s.t_row, isEven ? s.is_even : s.is_odd)} key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>);
                    isEven = isEven ? false : true;
                    return snippet;
                })}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;