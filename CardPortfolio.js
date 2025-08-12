import React, { useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import CardItem from './CardItem';
import { useTheme } from './theme';

const { width } = Dimensions.get('window');

export default function CardPortfolio({ navigation }) {
  const { theme } = useTheme();

  const ITEMS = useMemo(() => ([
    {
      key: '1',
      title: 'RealityHD',
      image: require('./assets/app1.png'),
      caption: 'This was my first Augmented Reality Mobile Application.',
    },
    {
      key: '2',
      title: 'Vibratio',
      image: require('./assets/app2.png'),
      caption: 'This was a custom music app that uses Spotify APIs for Auth and Song Files.',
    },
    {
      key: '3',
      title: 'SuHDoku',
      image: require('./assets/app3.png'),
      caption: 'This was my first project using Google AdMob to monetize my own Sudoku app.',
    },
  ]), []);

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <Text style={[styles.header, { color: theme.textPrimary }]}>Portfolio</Text>
      <Text style={[styles.subtext, { color: theme.textSecondary }]}>Swipe to browse my work:</Text>

      <FlatList
        data={ITEMS}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <CardItem title={item.title} image={item.image} caption={item.caption} />
          </View>
        )}
        // enhancement: snappier swipe experience
        decelerationRate="fast"
        snapToAlignment="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 24 },
  header: { fontSize: 26, fontWeight: 'bold' },
  subtext: { fontSize: 16, marginBottom: 10 },
  slide: { justifyContent: 'center', alignItems: 'center' },
});
