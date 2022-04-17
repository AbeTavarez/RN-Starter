import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Current Count:{counter}</Text>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter + -1)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
