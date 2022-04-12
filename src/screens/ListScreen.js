import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'},
        {name: 'Friend #7'},
        {name: 'Friend #8'},
        {name: 'Friend #9'},
    ];
    return (
       <FlatList 
       data={friends}
       keyExtractor={friend => friend.name} // key needs to be unique and be a string
       renderItem={({item}) => {
           // element, is an object with item and index in it === { item: {name: 'Friend #1}, index: 0 }, so we will destructure item }
           return <Text style={styles.textStyle}>{item.name}</Text>
       }}
       horizontal
       showsHorizontalScrollIndicator={false}
       />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;