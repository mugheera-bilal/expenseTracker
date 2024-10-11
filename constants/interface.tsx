import { ReactNode } from "react";

export interface IExpense {
  
  name?: any;
  color?: string;
  size?: number;
  onPress?: any;
  onPressAdd? : any
  navigation? : any
  children? : ReactNode
  modalVisible? :boolean
  setModalVisible? : any
  screenName? : any
  placeholder? : string,
  value? : any
  onChangeText? : any
  id? : string
  searchedItem? : any
  searchedExpense? : any
  message? : ReactNode
  onConfirm?: any
}

export interface IExpenseData {
  id? : string
  itemName? : any
  date? : any
  price? : any
}
