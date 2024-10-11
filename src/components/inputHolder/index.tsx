import {FC} from 'react';
import {IExpense} from '../../../constants/interface';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const InputHolder: FC<IExpense> = (props) => {
  return (
    <View style={styles.rootContainer}>
        <TextInput {...props}/>
    </View>
   
  );
};

export default InputHolder;