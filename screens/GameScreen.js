import React, { useState , useRef, useEffect} from 'react'
import { View, Button, StyleSheet,Text, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import colors from '../constants/colors';

const generateRandomNumber = (min,max,exclude) =>{
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max-min)) + min;

    if (randomNumber === exclude){
        return generateRandomNumber(min,max,exclude)
    }
    else{
        return randomNumber;
    }
}

const GameScreen = (props) =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1,100,props.useChoice))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { userChoice , onGameOver } = props;

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if (
          (direction === 'lower' && currentGuess < props.userChoice) ||
          (direction === 'greater' && currentGuess > props.userChoice)
        ) {
          Alert.alert("Don't lie!", 'You know that this is wrong...', [
            { text: 'Sorry!', style: 'cancel' }
          ]);
          return;
        }
        if (direction === 'lower') {
          currentHigh.current = currentGuess;
        } else {
          currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess );
        setCurrentGuess(nextNumber);
        setRounds(currRounds => currRounds + 1);
      };
    return (
        <View style={styles.gameScreen}>
            <Text>
                Opponent's Guess
            </Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                    title = "LOWER" 
                    onPress={()=>{nextGuessHandler('lower')}}
                    color={colors.secondary}
                    />
                </View>
               <View style={styles.button}>
                    <Button 
                    title = "GREATER" 
                    onPress={()=>{nextGuessHandler('greater')}}
                    color={colors.primary}
                    />
               </View>
            </Card>
        </View>
    )
}
export default GameScreen;

const styles = StyleSheet.create({
    gameScreen: {
        flex:1,
        padding: 10,
        alignItems:'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        height: 60
    },
    button:{
        marginVertical:12,
        width:100,
        elevation:5
    }
})
