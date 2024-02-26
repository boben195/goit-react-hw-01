import style from "../Transaction/TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.container}>
      <thead className={style.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map((item) => (
        <tbody key={item.id}>
          <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;
