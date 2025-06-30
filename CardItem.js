import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardItem({ title = 'no title', image, caption = 'no caption' }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image source={image} style={styles.image} />
            <Text style={styles.caption}>{caption}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    caption: {
        fontSize: 16,
        textAlign: 'center',
        color: '#444',
    },
});