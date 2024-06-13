export interface ITransaction {
  id: string;
  type: string;
  value: number;
  note: string;
}

export interface IState {
  transactions: ITransaction[];
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IStore {
  state: IState;
  addTransaction(transaction: ITransaction): void;
  deleteTransaction(id: string): void;
  setTransactions: (transactions: ITransaction[]) => void;

}
