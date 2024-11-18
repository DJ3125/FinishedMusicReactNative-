import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
// import {useEffect} from "react";
// import Sound from "react-native-sound";

import {Audio} from "expo-av";

// impor 

// const sound = new Sound("./assets/correctRound.mp3");

// function playSound():void{
//   sound.play();
// }



export default function App() {
  const audio = async function(){
    const {sound} = await Audio.Sound.createAsync(require("./assets/correctRound.mp3"));
    await sound.playAsync();
  }


  return (
    <View style={styles.container}>
      <Pressable onPress={audio}><Text>Press me</Text></Pressable>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
