import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num) {
  const sign = num < 0 ? "-" : "";
  const absNum = Math.abs(num);
  const integerPart = Math.floor(absNum);
  const fractionalPart = (absNum - integerPart).toFixed(2).slice(2);
  const formattedIntegerPart = integerPart.toLocaleString("en-US");

  return sign + "$" + formattedIntegerPart + "." + fractionalPart;
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
