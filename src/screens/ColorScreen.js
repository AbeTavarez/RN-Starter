import { Button, StyleSheet, View, Text, FlatList } from 'react-native';
import { useState } from 'react';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  // console.log(colors);
  return (
    <View>
      <Text>Colors</Text>
      <Button
        title="Get random color!"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ width: 100, height: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;
