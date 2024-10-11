import {FC, useContext, useState} from 'react';
import {IExpense, IExpenseData} from '../../../../constants/interface';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {FlatList, Pressable} from 'react-native-gesture-handler';
import {ExpenseContext} from '../../../store/context/expense-context';
import EditExpense from '../editExpense';

const ExpenseCard: FC<IExpense> = ({onPress}) => {
  const expenseContext = useContext(ExpenseContext);
  if (!expenseContext) return <Text>No Expense Context Available</Text>;

  function editModalHandler(){
    console.log('Hello')
  }

 
  return (

    <FlatList 
      data={expenseContext.expenseData} // error // Cannot find name 'expenseData' 
      renderItem={({item}) => {
        return (
          <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            {/* <EditExpense /> */}

          <View style={styles.rootContainer}>
            <View style={styles.innerContainer}>
              <View>
                <Text style={styles.textStyle}>{item.itemName}</Text>
                <Text style={styles.dateTextStyle}>{item.date}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceTextStyle}>{item.price}</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
           
        );
      }}
      />
     
  );
};

export default ExpenseCard;




 // const addExpenseHandler = () => {
  //   const [itemName, setItemName] = useState<string>('');
  //   const [date, setDate] = useState<Date>(new Date());
  //   const [price, setPrice] = useState<number>(0);
    
  //   const newExpense: IExpenseData = {
  //     id: Math.random().toString(), 
  //     itemName,
  //     price,
  //     date,
  //   };
  //   addExpense(newExpense);
  // };
  