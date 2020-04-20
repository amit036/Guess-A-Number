import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors'
const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style = {styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height: 90,
        paddingTop:36,
        backgroundColor:Colors.header,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        fontSize:20,
        color:'black'
    }
});