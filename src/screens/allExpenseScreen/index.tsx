import {FC} from 'react';
import {IExpense} from '../../../constants/interface';
import {Text, View} from 'react-native';
import {styles} from './styles';
import IconButton from '../../components/iconButton';
import PrimaryButton from '../../components/primaryButton';
import EditExpense from '../../components/ExpenseItems/editExpense';
import TotalExpenseCard from '../../components/ExpenseItems/totalExpenseCard';
import ExpenseCard from '../../components/ExpenseItems/expenseCard';

const AllExpenseScreen: FC<IExpense> = ({}) => {
  return (
    <View style={styles}>
      <TotalExpenseCard />
      
      <EditExpense />
    </View>
  );
};

export default AllExpenseScreen;
