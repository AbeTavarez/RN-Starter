import { View, Text, Button } from 'react-native';

const ColorCounter = ({ color, handleIncrease, handleDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => handleIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => handleDecrease()} />
    </View>
  );
};

export default ColorCounter;
