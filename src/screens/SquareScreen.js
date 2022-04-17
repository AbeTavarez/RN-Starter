import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_INCREMENT = 10;

  const setColor = (color, amountToChange) => {
    // color === 'red', ''green, or 'blue'
    // amountoChange === +10 or -10

    switch (color) {
      case 'red':
        // out of range
        red + amountToChange > 255 || red + amountToChange < 0
          ? null
          : setRed(red + amountToChange);
      case 'green':
        // out of range
        green + amountToChange > 255 || green + amountToChange < 0
          ? null
          : setGreen(green + amountToChange);
      case 'blue':
        // out of range
        blue + amountToChange > 255 || blue + amountToChange < 0
          ? null
          : setBlue(blue + amountToChange);
      default:
        return;
    }
  };
  return (
    <View>
      <Text> Square Screen</Text>
      <ColorCounter
        color="Red"
        handleIncrease={() => setColor('red', COLOR_INCREMENT)}
        handleDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        handleIncrease={() => setColor('green', COLOR_INCREMENT)}
        handleDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        handleIncrease={() => setColor('blue', COLOR_INCREMENT)}
        handleDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      />

      <View
        style={{
          height: 200,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      ></View>
    </View>
  );
};

export default SquareScreen;
