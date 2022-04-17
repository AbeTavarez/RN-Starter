import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Image source={{ uri: imageSource }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  image: {
    width: 'auto',
    height: 200
  }
});

export default ImageDetail;
