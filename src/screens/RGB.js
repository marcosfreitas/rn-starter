import React, {useReducer} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorChanger from "../components/ColorChanger";

const MULTIPLY = 15;

const RGB = () => {

    const buttonReducer = (state, action) => {
        switch (action.type) {
            case 'change_red_disabled':

                return {
                    ...state,
                    redColorizeDisabled: action.payload > 255,
                    redDecolorizeDisabled: action.payload < 0
                };

            case 'change_green_disabled':

               return {
                    ...state,
                    greenColorizeDisabled: action.payload > 255,
                    greenDecolorizeDisabled: action.payload < 0
                };

            case 'change_blue_disabled':

               return {
                    ...state,
                    blueColorizeDisabled: action.payload > 255,
                    blueDecolorizeDisabled: action.payload < 0
                };

            default:
               return state;
        }
    };

    const [buttonState, runButtonStateReducer] = useReducer(buttonReducer, {
        redColorizeDisabled: false, redDecolorizeDisabled: false,
        greenColorizeDisabled: false, greenDecolorizeDisabled: false,
        blueColorizeDisabled: false, blueDecolorizeDisabled: false,
    });

    const reducer = (state, action) => {
        // community convention
        // action === { type: string, payload: number }

        switch (action.type) {
            case 'change_red':

                // calling other reducer
                runButtonStateReducer({type: 'change_red_disabled', payload: state.red + action.payload});

                // not changing original state object
                return (state.red + action.payload > 255 || state.red + action.payload < 0)
                    ? state
                    : { ...state, red: state.red + action.payload };

            case 'change_green':

                runButtonStateReducer({type: 'change_green_disabled', payload: state.red + action.payload});
                return (state.green + action.payload > 255 || state.green + action.payload < 0)
                    ? state
                    : { ...state, green: state.green + action.payload};

            case 'change_blue':

                runButtonStateReducer({type: 'change_blue_disabled', payload: state.red + action.payload});
                return (state.blue + action.payload > 255 || state.blue + action.payload < 0)
                    ? state
                    : { ...state, blue: state.blue + action.payload};

            default:
                return state;
        }
    };

    const [colorState, runStateReducer] = useReducer(reducer, {red:0, green:0, blue:0});
    const {red, green, blue} = colorState;
    console.log(red, green, blue);
    console.log(buttonState);
    // screen
    return (
        <View style={styles.container}>

            <ColorChanger
                onColorize={() => runStateReducer({type:"change_red", payload: MULTIPLY})}
                onDecolorize={() => runStateReducer({type:"change_red", payload: -1*MULTIPLY})}
                disableColorize={buttonState.redColorizeDisabled}
                disableDecolorize={buttonState.redDecolorizeDisabled}
                color="Red"
            />
            <ColorChanger
                onColorize={() => runStateReducer({type:"change_green", payload: MULTIPLY})}
                onDecolorize={() => runStateReducer({type:"change_green", payload: -1*MULTIPLY})}
                disableColorize={buttonState.greenColorizeDisabled}
                disableDecolorize={buttonState.greenDecolorizeDisabled}
                color="Green"
            />
            <ColorChanger
               onColorize={() => runStateReducer({type:"change_blue", payload: MULTIPLY})}
               onDecolorize={() => runStateReducer({type:"change_blue", payload: -1*MULTIPLY})}
               disableColorize={buttonState.blueColorizeDisabled}
               disableDecolorize={buttonState.blueDecolorizeDisabled}
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

export default RGB;