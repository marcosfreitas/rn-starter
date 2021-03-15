import React, { useState } from "react";
import { Button } from "react-native";
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter+1);
    }

    const decrease = () => {
        setCounter(counter-1);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttons} onPress={increase}>
                <Button title="Increase"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={decrease}>
                <Button title="Decrease"/>
            </TouchableOpacity>

            <Text style={styles.text}>{counter}</Text>
        </View>
    );
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
      fontSize: 40,
      color: '#ff79c6',
      fontWeight: "700"
    },
    buttons: {
        marginVertical: 10,
        borderRadius: 2
    }
});

export default CounterScreen;