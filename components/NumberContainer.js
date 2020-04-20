import React from 'react'
import { 
    StyleSheet,
    Text, 
    View
} from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props)=> {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}
export default NumberContainer;

const styles = StyleSheet.create({
    numberContainer:{
        borderColor: Colors.header,
        borderWidth:1,
        borderRadius:5,
        height:55,
        width:60,
        marginHorizontal: '40%',
        marginVertical:10
    },
    number: {
        fontSize:40,
        marginHorizontal:'9%',
        marginBottom:10,
        color:Colors.header
    }
})