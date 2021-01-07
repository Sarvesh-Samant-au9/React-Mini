import React, { useContext } from "react";
import { GlobalContext } from "../Context/TransactionContext";
import Transaction from "./Transaction";
const TransactionList = () => {
  // const context = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions)
  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        {/* {transactions.map((transaction) => {
          <li className="minus">
            {transaction.text} <span> {transaction.amount}</span>
            <button className="delete-btn">X</button>
          </li>;
        })} */}
        {transactions.map(function (transaction) {
          return (
            // <li className="minus" key={transaction.id}>
            //   {transaction.text} <span>{transaction.amount}</span>
            //   <button className="delete-btn">X</button>
            // </li>
            <Transaction transaction={transaction} key={transaction.id} />
          );
        })}
      </ul>
    </>
  );
};

export default TransactionList;
