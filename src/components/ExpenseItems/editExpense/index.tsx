import {FC, useContext, useState} from 'react';
import {IExpense} from '../../../../constants/interface';
import {Modal, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import IconButton from '../../iconButton';
import PrimaryButton from '../../primaryButton';
import Title from '../../title';
import ExpenseCard from '../expenseCard';
import InputHolder from '../../inputHolder';
import {ExpenseContext} from '../../../store/context/expense-context';
import {deleteExpense, updateExpense} from '../../../util/http';
import LoadingOverlay from '../../loadingOverlay';
import ErrorOverlay from '../../errorOverlay';

const EditExpense: FC<IExpense> = ({}) => {
  const expenseContext = useContext(ExpenseContext);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currId, setCurrId] = useState<string>('');

  const [editItemName, setEditItemName] = useState<string>('');
  const [editDate, setEditDate] = useState<string>('');
  const [editPrice, setEditPrice] = useState<number>(0);

  const [search, setSearch] = useState<any>([]);

  function modalhandler(id: string) {
    setCurrId(id);

    const expenseToEdit = expenseContext?.expenseData.find(
      expense => expense.id === id,
    );

    if (expenseToEdit) {
      setEditItemName(expenseToEdit.itemName);
      setEditDate(expenseToEdit.date);
      setEditPrice(expenseToEdit.price);
    }

    setModalVisible(true);
  }

  function endModalhandler() {
    setModalVisible(false);
  }

  async function updateButtonhandler() {
    const objectForEdit = {
      itemName: editItemName,
      date: editDate,
      price: editPrice,
    };

    try {
      setIsSubmitting(true);
      expenseContext?.editExpense(currId, objectForEdit);

      // console.log('curr ID while update ==>>' + currId);

      await updateExpense(currId, objectForEdit);
      setIsSubmitting(false);
      setModalVisible(false);
    } catch (error) {
      setError('could not update expense - Please Try Again Later');
      setIsSubmitting(false);
    }
  }

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(currId);
      expenseContext?.deleteExpense(currId);
      setModalVisible(false);
      setIsSubmitting(false);

    } catch (error) {
      setError('could not delete expense - Please Try Again Later');
      setIsSubmitting(false);
    }

    // console.log('curr ID while delete ==>>' + currId);
  }

  function searchHandler(SearchName: any) {
    const searchedExpense = expenseContext?.expenseData.filter(expense => {
      if (SearchName != '') {
        return expense.itemName.includes(SearchName);
      }
    });

    setSearch(searchedExpense);
  }

  function errorHandler() {
    setError(null);
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <InputHolder placeholder="Search Items" onChangeText={searchHandler} />
      <Pressable>
        <ExpenseCard onPress={modalhandler} searchedItem={search} />
      </Pressable>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalInnerConatiner}>
          <Title>Edit Expense</Title>

          <View>
            <View style={styles.inputTitleStyle}>
              <Text style={styles.inputTextStyle}>Item</Text>
            </View>
            <InputHolder
              placeholder="Item Name"
              value={editItemName}
              onChangeText={setEditItemName}
            />
            <View style={styles.inputTitleStyle}>
              <Text style={styles.inputTextStyle}>Date</Text>
            </View>
            <InputHolder
              placeholder="Date (DD-MM-YYYY)"
              value={editDate}
              onChangeText={setEditDate}
            />
            <View style={styles.inputTitleStyle}>
              <Text style={styles.inputTextStyle}>Price</Text>
            </View>
            <InputHolder
              placeholder="Price"
              value={editPrice}
              onChangeText={setEditPrice}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={endModalhandler}>Cancel</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={updateButtonhandler}>
                Update
              </PrimaryButton>
            </View>
          </View>
          <View style={styles.IconStyle}>
            <IconButton
              onPress={deleteExpenseHandler}
              name="trash"
              color="red"
              size={44}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default EditExpense;
