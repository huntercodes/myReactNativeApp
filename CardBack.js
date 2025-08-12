import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CardList from './CardList';
import { useTheme } from './theme';

export default function CardBack({ navigation }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <Text style={[styles.header, { color: theme.textPrimary }]}>Hunter's Workshop</Text>
      <Text style={[styles.link, { color: theme.textSecondary }]}>www.github.com/huntercodes</Text>

      <View style={styles.listContainer}>
        <CardList />
      </View>

      <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <Button title="Portfolio" onPress={() => navigation.navigate('CardPortfolio')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Contact Me" onPress={() => navigation.navigate('ContactForm')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20, flex: 1 },
  header: { fontSize: 24, fontWeight: 'bold' },
  link: { fontSize: 16, marginBottom: 10 },
  listContainer: { width: '100%', flex: 1 },
  row: { flexDirection: 'row', gap: 12, marginTop: 12 },
  buttonContainer: { width: 160 },
});