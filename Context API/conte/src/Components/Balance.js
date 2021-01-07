import React, { useContext } from "react";
import { GlobalContext } from "../Context/TransactionContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const totalAmount = amount.reduce((prev, next) => prev + next, 0).toFixed(2);
  console.log(totalAmount);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${totalAmount}</h1>
    </>
  );
};

export default Balance;
