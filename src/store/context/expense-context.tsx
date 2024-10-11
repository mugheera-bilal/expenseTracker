import {createContext, FC, useState} from 'react';
import {IExpense, IExpenseData} from '../../../constants/interface';

interface ExpenseContextType {
  expenseData: IExpenseData[];
  addExpense: (newExpense: IExpenseData) => void;
  setExpense: (expense: object) => {};
  editExpense: (id: string, updatedExpense: IExpenseData) => void;
  deleteExpense: (id: string) => void;
}

export const ExpenseContext = createContext<ExpenseContextType | null>(null);



const ExpenseContextProvider: FC<IExpense> = ({children}) => {
  const [expenseData, setExpenseData] = useState<IExpenseData[]>([]);

  function addExpense(newExpense: IExpenseData) {
    // (newExpense.id = Math.random().toString()),
    //  console.log(newExpense.id);

    setExpenseData(prevData => [...prevData, newExpense]);

  }

  function setExpense(expenses: any) {
    // const reverseExpense = expenses.reverse()
    setExpenseData(expenses);
  }

  function editExpense(id: string, updatedExpense: IExpenseData) {


    let tempData = [...expenseData];

    let indexFinder = tempData.findIndex(item => item.id == id);
    console.log(indexFinder);

    tempData[indexFinder] = updatedExpense;
    setExpenseData(tempData);
  }

  function deleteExpense(id: string) {
    setExpenseData(prevData => prevData.filter(expense => expense.id !== id));
  }

  const value = {
    expenseData: expenseData,
    addExpense: addExpense,
    setExpense: setExpense,
    editExpense: editExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
