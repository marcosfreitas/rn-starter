import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    const colorize = () => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let rgb = `rgb(${red}, ${green}, ${blue})`;
        setColors([...colors, rgb]);
    }

    const renderElement = (obj) => {
       return <Text style={
            StyleSheet.compose(styles.box, {borderColor: obj.item, backgroundColor: obj.item})
        }>{obj.item}</Text>;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttons} onPress={colorize}>
                <Button title="Add Color Box" />
            </TouchableOpacity>
            <FlatList
                contentContainerStyle={styles.listBoxes}
                data={colors}
                extraData={colors}
                renderItem={renderElement}
                keyExtractor={(color) => color}
                horizontal={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#282a36'
    },
    text: {
      fontSize: 20,
      color: '#ff79c6',
      fontWeight: "700"
    },
    buttons: {
        marginVertical: 10,
        borderRadius: 2
    },
    listBoxes: {
        marginTop: 20,
    },
    box: {
        margin: 5,
        padding: 20,
        borderColor: "#000",
        borderWidth: 1,
        backgroundColor: "#999",
        width: 100,
        height: 100,
    }
});

export default ColorScreen;