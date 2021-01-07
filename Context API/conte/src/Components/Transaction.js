import React, { useContext } from "react";
import { GlobalContext } from "../Context/TransactionContext";

const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = props.transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={props.transaction.amount < 0 ? "minus" : "plus"}>
        {props.transaction.text}{" "}
        <span>
          {sign}
          {Math.abs(props.transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(props.transaction.id)}
        >
          X
        </button>
      </li>
    </>
  );
};

export default Transaction;
