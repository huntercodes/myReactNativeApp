import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import CardList from'./CardList';

export default function CardBack() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hunter's Workshop</Text>
        <Text style={styles.link}>www.github.com/huntercodes</Text>

        <View style={styles.listContainer}>
            <CardList />
        </View>
      </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2e2e2e',
    },
    link: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#555',
        marginVertical: 8,
    },
    listContainer: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
});