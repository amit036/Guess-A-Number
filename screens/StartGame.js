import React, {useState} from 'react'
import { StyleSheet,
        Text, 
        View, 
        Button, 
        TouchableWithoutFeedback,
        Keyboard,
        Alert
    } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartGame = (props) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [selectedValue, setSelectedValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)

    const numberInputHandler = (inputText) =>{
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    
    const resetValueHandler = () =>{
        setEnteredValue('')
        setConfirmed(false)
    }
    const confirmValueHandler = () =>{
        const chooseNumber = parseInt(enteredValue);
        if(isNaN(chooseNumber)|| chooseNumber <= 0 || chooseNumber >99){
            Alert.alert(
                'Invalid Number',
                'Number has to be between 1 and 99',
                [{text:'Okay', style: 'destructive', onPress:resetValueHandler}]
                );
            return;
        }
        setSelectedValue(chooseNumber)
        setEnteredValue('')
        setConfirmed(true)
        Keyboard.dismiss()
    }

    let confirmedValue;
    if(confirmed){
        confirmedValue = <Card style={styles.cardConfirmed}>
                            <Text style={styles.showConfiredValue}>
                                Choosen Number
                            </Text>
                            <NumberContainer>
                                {selectedValue}
                            </NumberContainer>
                            <MainButton onPress={()=>props.onStartGame(selectedValue)}>
                                START GAME
                            </MainButton>
                         </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
            <View>        
                <Text style={styles.newGame}>
                    Start a New Game
                </Text>
                <Card style={styles.inputContainer}>
                    <Input 
                        style={styles.textInput}
                        placeholder="Enter a Number"
                        autoCorrect={false}
                        blurOnSubmit
                        keyboardType={'number-pad'}
                        maxLength = {2}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                        />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetValueHandler} color={Colors.primary}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmValueHandler} color={Colors.secondary}/>
                        </View>
                    </View>
                </Card>
                {confirmedValue}
            </View>
        </TouchableWithoutFeedback>
    )
}
export default StartGame;

const styles = StyleSheet.create({
    newGame:{
      fontSize: 20,
      marginTop: 80,
      marginHorizontal:110
    },
    inputContainer:{
      width: '80%',
      alignItems: 'center',
      marginHorizontal:40,
      marginVertical:20,
      paddingVertical:20,
    },
    textInput:{
        height : 40, 
        width : '70%',
        borderColor:'gray', 
        borderWidth: 1, 
    },
    buttonContainer:{
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 50
    },
    button:{
        width:80,
        elevation:5
    },
    showConfiredValue: {
        marginHorizontal:'30%',
        marginVertical:5,
        fontSize: 15,
        fontWeight:'bold'
    },
    cardConfirmed: {
        width:'80%',
        marginHorizontal:40,
        borderRadius:5
    },
    buttonStartGame:{
        marginVertical:10,
        marginHorizontal:75,
        width:'50%',
        elevation:10
    }
  });