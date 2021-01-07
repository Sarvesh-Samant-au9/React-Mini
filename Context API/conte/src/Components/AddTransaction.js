import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/TransactionContext";

const AddTransaction = () => {
  const transactionInfo = useContext(GlobalContext);
  console.log(transactionInfo);
  const [text, setText] = useState("");

  const [amount, setAmount] = useState(0);
  const changeText = (e) => {
    setText(e.target.value);
  };
  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      amount: +amount,
      text: text,
    };
    transactionInfo.addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add a new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            placeholder="Enter Here....."
            onChange={changeText}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative-expense, positive-income)
          </label>
          <input
            value={amount}
            type="number"
            id="amount"
            onChange={changeAmount}
            placeholder="Enter Amount...."
          />
        </div>
        <button className="btn">ADD Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
