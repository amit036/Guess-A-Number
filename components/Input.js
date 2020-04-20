import React from 'react'
import { TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
    return <TextInput 
        {...props}
        style={{...styles.input, ...props.style}}
        />
}
export default Input;

const styles = StyleSheet.create({
    input:{
        textAlign : "center" ,
        borderRadius:10,
        marginVertical: 10
    },
})