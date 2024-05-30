import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from 'react'

const Header = () => {
  return (
    <View style={styles.vw1}>
      <Text style={styles.txt1}>Mens Store</Text>
      <TouchableOpacity style={styles.touch}>
        <Text>Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  vw1: {
    width: "100%",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    backgroundColor: "#fff",
  },
  txt1: {
    fontWeight: "600",
    fontSize: 20,
    color: "#000",
    marginLeft: 20,
  },
  touch: {
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 30,
  },
});
export default Header