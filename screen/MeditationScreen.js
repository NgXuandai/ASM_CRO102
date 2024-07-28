import React, { useRef } from "react";
import { View, Button, StyleSheet } from "react-native";
import { Audio } from "expo-av";

const MeditationScreen = () => {
  const sound = useRef(new Audio.Sound());

  const playSound = async () => {
    try {
      await sound.current.loadAsync(require("../assets/audio/meditation.mp3"));
      await sound.current.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const stopSound = async () => {
    try {
      await sound.current.stopAsync();
      await sound.current.unloadAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Phát nhạc thiền" onPress={playSound} />
      <Button title="Dừng nhạc" onPress={stopSound} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MeditationScreen;
