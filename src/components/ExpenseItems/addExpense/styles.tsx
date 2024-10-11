import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        padding: 10,
        marginHorizontal: 60,
    
      },
      buttonContainer: {
        alignItems: 'center',
      },
      modalInnerContainer : {
        flex : 1,
        backgroundColor : '#535353',
        // padding : 10,
        marginTop : 60,
        // marginHorizontal : 10,
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20
      },
      inputTitleStyle : {
        marginLeft : 70  
      },
      inputTextStyle : {
        color: 'white'
      }
      

})