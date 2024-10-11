import {FC} from 'react';
import {IExpense} from '../../../../constants/interface';
import {Text, View} from 'react-native';
import {styles} from './styles';

const TotalExpenseCard: FC<IExpense> = ({}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.textStyle}>TotalExpenseCard</Text>
        <Text style={styles.textStyle}>price</Text>
      </View>
    </View>
  );
};

export default TotalExpenseCard;
