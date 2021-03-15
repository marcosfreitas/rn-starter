import * as React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Marcos';
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Component Screen</Text>
            <Text style={styles.subTitle}>
                My name is {name}!
            </Text>
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
    title: {
        fontSize: 40,
        color: '#ff79c6',
        fontWeight: '700',
        textAlign: 'center'
    },
    subTitle: {
        color: '#ffb86c',
        fontSize: 30,
        fontWeight: '700'
    }
});

export default ComponentsScreen;