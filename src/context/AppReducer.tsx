import { ITransaction, IState, IAction } from '../types';

export default (state: IState, action: IAction) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: ITransaction) => transaction.id !== action.payload
        ),
      };
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};
