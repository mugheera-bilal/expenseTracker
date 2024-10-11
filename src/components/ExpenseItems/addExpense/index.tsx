import {FC, useContext, useState} from 'react';
import {IExpense} from '../../../../constants/interface';
import {Modal, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import IconButton from '../../iconButton';
import PrimaryButton from '../../primaryButton';
import Title from '../../title';
import InputHolder from '../../inputHolder';
import {ExpenseContext} from '../../../store/context/expense-context';
import {storeExpense} from '../../../util/http';
import ErrorOverlay from '../../errorOverlay';
import LoadingOverlay from '../../loadingOverlay';

const AddExpense: FC<IExpense> = ({}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const [itemName, setItemName] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState(0);
  
  let expenseContext = useContext(ExpenseContext);

  const modalHandler = () => setModalVisible(true);

  const endModalHandler = () => setModalVisible(false);


  const addExpenseHandler = async () => {
    let objectforalldatacombined = {itemName, date, price};
    // setIsSubmitting(true);
    setError(null);
    try {
      const id = await storeExpense(objectforalldatacombined);
      expenseContext?.addExpense({...objectforalldatacombined, id: id});
      setModalVisible(false);
      setItemName('');
      setDate('');
      setPrice(0);
    } catch (error) {
      setError('could not save expense - Please Try Again Later');
    }
      // setIsSubmitting(false);
    
  };

  function errorHandler() {
    setError(null);
  }

  if (error) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  // if (isSubmitting) {
  //   return <LoadingOverlay />;
  // }

  return (
    <>
      <Pressable>
        <IconButton name="add" color="white" size={34} onPress={modalHandler} />
      </Pressable>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalInnerContainer}>
          <Title>Add Expense</Title>

          <View>
            <View style={styles.inputTitleStyle}>
              <Text style={styles.inputTextStyle}>Item</Text>
            </View>
            <InputHolder
              placeholder="Item Name"
              value={itemName}
              onChangeText={setItemName}
            />
            <View style={styles.inputTitleStyle}>
              <Text style={styles.inputTextStyle}>Date</Text>
            </View>
            <InputHolder
              placeholder="Date (DD-MM-YYYY)"
              value={date}
              onChangeText={setDate}
            />
            <View style={styles.inputTitleStyle}>
              <Text style={styles.inputTextStyle}>Price</Text>
            </View>
            <InputHolder
              placeholder="Price"
              value={price}
              onChangeText={setPrice}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={endModalHandler}>Cancel</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={addExpenseHandler}>Add</PrimaryButton>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AddExpense;
