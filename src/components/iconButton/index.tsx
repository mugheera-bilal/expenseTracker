import {FC} from 'react';
import {IExpense} from '../../../constants/interface';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'

const IconButton: FC<IExpense> = ({name, color, size, onPress}) => {
  return (
    <Pressable onPress={onPress}>
        <Ionicons name={name} color={color} size={size}/>
    </Pressable>
  );
};

export default IconButton;
