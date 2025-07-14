import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default function CardFetch() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://api.weather.gov/gridpoints/OAX/96,41/forecast');
      const json = await response.json();
      setData(json.properties.periods);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Omaha Weather Forecast</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <Text style={styles.period}>{item.name}</Text>
            <Text style={styles.temp}>{item.temperature}°{item.temperatureUnit}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f0f4f8',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // elevation enhancement
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  period: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  temp: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
});