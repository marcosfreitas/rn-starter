import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ColorChanger = ({ color, disableColorize, disableDecolorize, onColorize, onDecolorize }) => {
    // screen
    return (
        <View>
            <TouchableOpacity
                style={styles.buttons}
                onPress={
                    onColorize
                }
                disabled={disableColorize}
            >
                <Button
                    disabled={disableColorize}
                    title={`Colorize ${color}`}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttons}
                onPress={
                    onDecolorize
                }
                disabled={disableDecolorize}
            >
                <Button
                    disabled={disableDecolorize}
                    title={`Decolorize ${color}`}
                />
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    buttons: {
        marginVertical: 10,
        borderRadius: 2
    },
});

export default ColorChanger;