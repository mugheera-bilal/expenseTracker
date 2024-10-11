import {FC} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './styles';
import {IExpense} from '../../../constants/interface';
import PrimaryButton from '../primaryButton';

const ErrorOverlay : FC<IExpense> = ({message, onConfirm}) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={[styles.textStyle, styles.title]}>An error occured!</Text>
      <Text style={styles.textStyle}>{message}</Text>
      <PrimaryButton onPress={onConfirm}>Okay!</PrimaryButton>
    </View>
  );
};

export default ErrorOverlay ;
