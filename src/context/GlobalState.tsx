import React, { createContext, useReducer } from 'react';
import { ITransaction, IState, IStore } from '../types';
import AppReducer from './AppReducer';

// Initial state
const initialState: IState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext<IStore>({
  state: initialState,
  addTransaction: () => {},
  deleteTransaction: () => {},
  setTransactions: () => {},
});

// Provider component
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function addTransaction(transaction: ITransaction) {
    try {
      await fetch('http://10.0.2.2:3010/transactions', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction,
      });
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  }

  async function deleteTransaction(id: string) {
    try {
      await fetch(`http://10.0.2.2:3010/transactions/${id}`, {
        method: 'DELETE',
      });
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      });
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  }

  function setTransactions(transactions: ITransaction[]) {
    dispatch({
      type: 'SET_TRANSACTIONS',
      payload: transactions,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ state, addTransaction, deleteTransaction, setTransactions }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
