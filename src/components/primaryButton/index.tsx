import {FC} from 'react';
import {IExpense} from '../../../constants/interface';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import IconButton from '../../components/iconButton';

const PrimaryButton: FC<IExpense> = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{color: '#white'}}
        onPress={onPress}
        disabled={false}>
        <Text style={styles.textStyle}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
