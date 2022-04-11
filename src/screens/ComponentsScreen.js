import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const author = "by Abe.js";
  return (
    <View style={{ display: "flex" }}>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <View style={{ justifyContent: "flex-end" }}>
        <Text style={styles.abe}>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  abe: {
    fontSize: 20,
    fontFamily: "monospace",
  },
});

export default ComponentsScreen;
