import {FC, useContext, useEffect, useLayoutEffect, useState} from 'react';
import {IExpense} from '../../../constants/interface';
import TotalExpenseCard from '../../components/ExpenseItems/totalExpenseCard';
import AddExpense from '../../components/ExpenseItems/addExpense';
import {ExpenseContext} from '../../store/context/expense-context';
import EditExpense from '../../components/ExpenseItems/editExpense';
import {fetchExpenses} from '../../util/http';
import LoadingOverlay from '../../components/loadingOverlay';
import ErrorOverlay from '../../components/errorOverlay';

const RecentsScreen: FC<IExpense> = ({navigation}) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const expenseContext = useContext(ExpenseContext);

  if (!expenseContext) {
    throw new Error(
      'ExpenseContext must be used within an ExpenseContextProvider',
    );
  }

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expenseContext?.setExpense(expenses);
      } catch (error) {
        setError('could not fetch expenses!');
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <AddExpense />,
    });
  }, [navigation]);

  function errorHandler () {
    setError(null)
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay  />;
  }

  return (
    <>
      <TotalExpenseCard />
      <EditExpense />
    </>
  );
};

export default RecentsScreen;


