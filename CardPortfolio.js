import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CardItem from './CardItem';

export default function CardPortfolio() {
  const ITEMS = {
    item1: {
      title: 'RealityHD',
      image: require('./assets/app1.png'),
      caption: 'This was my first Augmented Reality Mobile Application.',
    },
    item2: {
      title: 'Vibratio',
      image: require('./assets/app2.png'),
      caption: 'This was a custom music app that uses Spotify APIs for Auth and Song Files.',
    },
    item3: {
      title: 'SuHDoku',
      image: require('./assets/app3.png'),
      caption: 'This was my first project using Google AdMob to monetize my own Sudoku app.',
    },
  };

  const [nextItem, setNextItem] = useState(1);

  const handleNext = () => {
    if (nextItem < Object.keys(ITEMS).length) {
      setNextItem(nextItem + 1);
    } else {
      setNextItem(1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Portfolio</Text>
      <Text style={styles.subtext}>Here are some samples of my work:</Text>

      <CardItem
        title={ITEMS[`item${nextItem}`].title}
        image={ITEMS[`item${nextItem}`].image}
        caption={ITEMS[`item${nextItem}`].caption}
      />

      <Button title="Next Project" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
});
