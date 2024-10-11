import {FC} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './styles';
import { IExpense } from '../../../constants/interface';


const LoadingOverlay : FC<IExpense> = ({children}) => {
  return (
    <View style={styles.rootContainer}>
        <ActivityIndicator size='large' color='blue'  />

    </View>
  );
};

export default LoadingOverlay ;
