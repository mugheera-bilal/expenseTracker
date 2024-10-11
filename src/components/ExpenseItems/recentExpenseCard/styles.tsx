import {StyleSheet} from 'react-native';
import {Theme} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  rootContainer: {
    flex : 1,
    justifyContent : 'center',
    // alignItems : 'center',
    backgroundColor: Theme.tabBarColor1,
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation : 10
  },
  textStyle: {
    fontSize: 15,
    color: '#d5def8',
    // textAlign: 'center',
  },
  dateTextStyle: {
    fontSize: 12,
    color: '#d5def8',
    // textAlign: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent: 'space-between',
  },
  priceTextStyle: {
    fontSize: 15,
    color: Theme.tabBarColor1,
    textAlign: 'center',
  },
  priceContainer: {
    borderRadius: 5,
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor: 'white',
  },
});
