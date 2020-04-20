import React from 'react'
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOver = (props) =>{

    return (
        <View style={styles.screen}>
            <Image 
                source ={require('../assets/gamer.png')}
                style={styles.image}        
            />
            <Text>
               Number of rounds: 
               <Text style={styles.roundsNumber}>{props.rounds}</Text>
            </Text>
                <Text>
                    Your Guess Number is
                </Text>     
            <NumberContainer>
                {props.userChoice}
            </NumberContainer>
            <MainButton onPress={props.newGameStart}>
                New Game
            </MainButton>
        </View>
    )
}
export default GameOver;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: 'center'
    },
    gameOver:{
        fontSize:40,
        color: 'red',
        fontWeight: 'bold'
    },
    image:{
        width:'45%',
        height:'30%',
    },
    roundsNumber:{
        fontSize: 18,
        fontWeight:'bold',
        color:colors.header
    }
})