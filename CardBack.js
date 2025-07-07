import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CardList from'./CardList';

export default function CardBack({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hunter's Workshop</Text>
        <Text style={styles.link}>www.github.com/huntercodes</Text>

        <View style={styles.listContainer}>
            <CardList />
        </View>

        <View style={styles.buttonContainer}>
            <Button title="Portfolio" onPress={() => navigation.navigate('CardPortfolio')} />
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
    buttonContainer: {
        width: 200,
        marginTop: 20,
        /* enhancement: size-limited button container */
    },
});