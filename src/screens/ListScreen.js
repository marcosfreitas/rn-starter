import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {

    const guys = [
        {name: 'Jay', age: 50},
        {name: 'Gloria', age: 30},
        {name: 'Manny', age: 22},
        {name: 'Phil', age: 32},
        {name: 'Claire', age: 31},
        {name: 'Alex', age: 25},
        {name: 'Dylan', age: 26},
    ];

    return (
            <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={ (guy) => guy.name }
            data={guys}
            renderItem={({ index, item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age} years old</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 150,
        paddingHorizontal: 20,
        fontWeight: '700',

    }
});

export default ListScreen;
