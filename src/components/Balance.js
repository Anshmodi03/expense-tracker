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

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  );
};
