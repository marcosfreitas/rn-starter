import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.animal}
                source={
                    {
                        uri: `${props.src}`
                    }
                }
            />
            <Text>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    animal: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#222',
    }
});

export default ImageDetail;