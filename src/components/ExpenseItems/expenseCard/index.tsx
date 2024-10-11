import {FC, useContext} from 'react';
import {IExpense} from '../../../../constants/interface';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {ExpenseContext} from '../../../store/context/expense-context';

const ExpenseCard: FC<IExpense> = ({onPress, searchedItem}) => {
  const expenseContext = useContext(ExpenseContext);

  if (!expenseContext) return <Text>No Expense Context Available</Text>;

  function editModalHandler() {
    console.log('Hello');
  }

  const renderSearchList = searchedItem.length > 0
     ? searchedItem
    : expenseContext?.expenseData;
  // console.log(searchedItem);

  return (
    <FlatList
      style={{height: '78%'}}
      data={renderSearchList}
      renderItem={({item}) => {
        // console.log('Items', item);
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              onPress(item.id);
            }}>
            <View style={styles.rootContainer}>
              <View style={styles.innerContainer}>
                <View>
                  <Text style={styles.textStyle}>{item?.itemName}</Text>
                  <Text style={styles.dateTextStyle}>{item?.date}</Text>
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
