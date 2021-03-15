import * as React from 'react';
import faker from 'faker';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    const imgs = [];

    for(let i = 0; i<= 10; i++)
    {
        imgs.push(
            {
                image: `${faker.image.animals(100,100)}?random=${Math.round(Math.random() * 1000)}`,
                name: faker.name.findName()
            }
        );
    }

    const imageList = imgs.map((i, idx) => {
        return <ImageDetail
            key={idx}
            title={i.name}
            src={i.image}
        />
    });

    return (
        <View>
            {imageList}
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;