import {StyleSheet} from 'react-native';
import { Theme } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 16,
    color: Theme.tabBarColor1,
    textAlign: 'center',
  },
  innerContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
});
