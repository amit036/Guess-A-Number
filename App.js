import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screens/StartGame';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

const App = () => {

  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber)
  }
  const gameOverHandler = (noOfRounds) =>{
    setGuessRounds(noOfRounds)
  }

  const configureNewGameHandler = () =>{
    setGuessRounds(0)
    setUserNumber(null)

  }

  let content =<StartGame onStartGame ={startGameHandler} />

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice = {userNumber} onGameOver={gameOverHandler}/>
  }
  else if(guessRounds > 0){
    content = <GameOver userChoice = {userNumber} rounds={guessRounds} newGameStart={configureNewGameHandler}/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number! "/>
      {content}
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
