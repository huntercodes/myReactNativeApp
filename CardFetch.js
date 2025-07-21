import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Animated } from 'react-native';

export default function CardFetch() {
  const [data, setData] = useState([]);

  // useRef for animated value
  const fadeAim = useRef(new Animated.Value(0)).current;

  const getData = async () => {
    try {
      const response = await fetch('https://api.weather.gov/gridpoints/OAX/96,41/forecast');
      const json = await response.json();
      setData(json.properties.periods);

      // animated timing
      Animated.timing(fadeAim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
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
      <Animated.View style={{ opacity: fadeAim }}>
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
      </Animated.View>
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