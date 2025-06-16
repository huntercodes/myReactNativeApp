import React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';

export default function CardFront() {
    return (
      <View style={styles.container}>
        <Image source={require('./computer.png')} style={styles.profileImage} />
        <Text style={styles.name}>Hunter Downey</Text>
        <Text style={styles.tagline}>Creative Developer & Tech Enthusiast</Text>

        <View style={styles.contactContainer}>
            <Text style={styles.contact}>(402)936-5495</Text>
            <Text style={styles.contact}>hjdowneyi@mail.mccneb.edu</Text>
        </View>

        <Image source={require('./deco.png')} style={styles.decorative} />
      </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 30,
    },
    profileImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222',
    },
    tagline: {
        fontSize: 16,
        fontStyle: 'italic',
        marginVertical: 10,
        color: '#555',
    },
    contactContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    contact: {
        fontSize: 16,
        color: '#444',
        marginVertical: 2,
    },
    decorative: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginTop: 30,
    },
});