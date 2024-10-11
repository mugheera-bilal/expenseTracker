import { StyleSheet } from "react-native";
import { Theme } from "../../../constants/theme";

export const styles = StyleSheet.create({
    rootContainer  : {
        // flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding: 10,
        // margin: 5,
        backgroundColor : Theme.tabBarColor,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10

    },
    textStyle : {
        fontSize : 24,
        color : 'white'
    }

})