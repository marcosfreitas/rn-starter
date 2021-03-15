import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorChanger from "../components/ColorChanger";

const MULTIPLY = 10;

const CombineColors = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    // disabled states
    const [disableBtnRed1, setDisableBtnRed1] = useState(false);
    const [disableBtnRed2, setDisableBtnRed2] = useState(false);
    const [disableBtnGreen1, setDisableBtnGreen1] = useState(false);
    const [disableBtnGreen2, setDisableBtnGreen2] = useState(false);
    const [disableBtnBlue1, setDisableBtnBlue1] = useState(false);
    const [disableBtnBlue2, setDisableBtnBlue2] = useState(false);

    const colorize = (color, change) => {
        switch (color) {
            case 'red':
                if (red + change > 255) {
                    setDisableBtnRed1(true);
                    setDisableBtnRed2(false);
                    return;
                } else if(red + change < 0) {
                    setDisableBtnRed1(false);
                    setDisableBtnRed2(true);
                    return;
                } else {
                    setDisableBtnRed1(false);
                    setDisableBtnRed2(false);
                }

                setRed(red + change);
                break;
            case 'green':
                if (green + change > 255) {
                    setDisableBtnGreen1(true);
                    setDisableBtnGreen2(false);
                    return;
                } else if(green + change < 0) {
                    setDisableBtnGreen1(false);
                    setDisableBtnGreen2(true);
                    return;
                } else {
                    setDisableBtnGreen1(false);
                    setDisableBtnGreen2(false);
                }

                setGreen(green + change);
                break;
            case 'blue':
                if (blue + change > 255) {
                    setDisableBtnBlue1(true);
                    setDisableBtnBlue2(false);
                    return;
                } else if(blue + change < 0) {
                    setDisableBtnBlue1(false);
                    setDisableBtnBlue2(true);
                    return;
                } else {
                    setDisableBtnBlue1(false);
                    setDisableBtnBlue2(false);
                }

                setBlue(blue + change);
                break;
            default:
                break;
        }
    };


    // screen
    return (
        <View style={styles.container}>

            <ColorChanger
                onColorize={() => colorize('red', MULTIPLY)}
                onDecolorize={() => colorize('red', -1*MULTIPLY)}
                disableColorize={disableBtnRed1}
                disableDecolorize={disableBtnRed2}
                color="Red"
            />
            <ColorChanger
                onColorize={() => colorize('green', MULTIPLY)}
                onDecolorize={() => colorize('green', -1*MULTIPLY)}
                disableColorize={disableBtnGreen1}
                disableDecolorize={disableBtnGreen2}
                color="Green"
            />
            <ColorChanger
               onColorize={() => colorize('blue', MULTIPLY)}
               onDecolorize={() => colorize('blue', -1*MULTIPLY)}
               disableColorize={disableBtnBlue1}
               disableDecolorize={disableBtnBlue2}
               color="Blue"
            />

            <View style={StyleSheet.compose(styles.box, {borderColor: `rgb(${red}, ${green}, ${blue})`, backgroundColor: `rgb(${red}, ${green}, ${blue})`})}>

            </View>
        </View>
    )
};


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
        borderColor: "#fff",
        borderWidth: 1,
        width: '100%',
        height: 100,
    }
});

export default CombineColors;