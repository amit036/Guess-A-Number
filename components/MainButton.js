import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const MainButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
            
        </TouchableOpacity>
    )
}
export default MainButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.header,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
        width: 150,
        marginHorizontal:75,
        marginBottom:15,
        elevation:5
    },
    buttonText:{
        color: 'white'
    }

})