import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonOuterContainer: {
    // alignItems : 'center',
    borderRadius: 20,
    margin: 4,
    width: 120,
    overflow: 'hidden',
},
buttonInnerContainer: {
    borderRadius: 20,
    paddingVertical : 10,
    paddingHorizontal : 10,
    backgroundColor: 'grey',
    elevation: 10,
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  pressed : {
    opacity : 0.25
  }
});
