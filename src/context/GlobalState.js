import React, { createContext, useState } from "react";

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  // Actions
  function deleteTransaction(id) {
    setState((prevState) => ({
      ...prevState,
      transactions: prevState.transactions.filter(
        (transaction) => transaction.id !== id
      ),
    }));
  }

  function addTransaction(transaction) {
    setState((prevState) => ({
      ...prevState,
      transactions: [transaction, ...prevState.transactions],
    }));
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
