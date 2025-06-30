import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import CardFront from './CardFront';
import CardBack from './CardBack';
import CardPortfolio from './CardPortfolio';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CardPortfolio />
      <CardBack />
      <ScrollView style={styles.scrollView}>
        <CardFront />
      </ScrollView>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollView: {
    padding: 15,
  },
});
