import {FC} from 'react';
import {IExpense} from '../../../constants/interface';
import {Text, View} from 'react-native';
import {styles} from './styles';


const Title: FC<IExpense> = ({children}) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
};

export default Title;
