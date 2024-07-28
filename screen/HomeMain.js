import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import TodoScreen from "../screen copy/todoScreen";

const HomeMain = ({ navigation }) => {
  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.item_view}>
        <TouchableOpacity onPress={() => handleNavigate("bieton")}>
          <Image source={require("../assets/ic_pen.png")} style={styles.Image} />
          <Text>Biết Ơn</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item_view}>
        <TouchableOpacity onPress={() => handleNavigate("MusicScreen")}>
          <Image source={require("../assets/ic_taynghe.jpg")} style={styles.Image} />
          <Text>Nghe nhạc</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item_view}>
        <TouchableOpacity onPress={() => handleNavigate("YogaScreen")}>
          <Image source={require("../assets/ic_yoga.png")} style={styles.Image} />
          <Text>Yoga</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  Image: {
    width: 50,
    height: 50
  },
  item_view: {
    alignItems: 'center',
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    margin: 40,
    padding: 15,
    width: 150
  }
});
