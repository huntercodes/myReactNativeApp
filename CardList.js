import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

export default function CardList() {
    const DATA = [
        {
            title: 'Services Offered',
            data: ['Mobile App Development', 'UI/UX Design', 'Tech Consulting'],
        },
        {
            title: 'Skills & Expertise',
            data: ['React Native', 'Swift', 'JavaScript', 'Problem Solving'],
        },
    ];

    return (
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <Text style={styles.item}>{'\u2022'} {item}</Text>
            )}
            renderSectionHeader={({ section }) => (
                <Text style={styles.header}>{section.title}</Text>
            )}
        />
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#ddd',
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    item: {
        fontSize: 16,
        paddingLeft: 20,
        paddingVertical: 4,
        color: '#333',
    },
});