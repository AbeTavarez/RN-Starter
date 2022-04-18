import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>👋🏻 Hey</Text>
      <Text style={styles.textStyle}>what's up?</Text>
      <Text style={styles.textStyle}>looking good!👍</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#3498db',
    borderColor: '#8e44ad',
    borderWidth: 5,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: '#fff',
    borderWidth: 3,
    borderColor: '#e74c3c',
    padding: 10,
    margin: 5,
    fontSize: 18,
    fontFamily: 'AppleColorEmoji'
  }
});

export default BoxScreen;
