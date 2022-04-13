import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>

      <Button 
      title='Go to Components Demo'
      onPress={() => console.log('btn pressed')}
      />

      <TouchableOpacity onPress={() => console.log('List Pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    paddingBottom: 20
  },
});

export default HomeScreen;
