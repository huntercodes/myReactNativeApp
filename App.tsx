import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardFront from './CardFront';
import CardBack from './CardBack';
import CardPortfolio from './CardPortfolio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardFront">
        <Stack.Screen
          name="CardFront"
          component={CardFront}
          options={{ title: 'Digital Business Card'}}
        />
        <Stack.Screen
          name="CardBack"
          component={CardBack}
          options={{ title: 'Contact Details'}}
        />
        <Stack.Screen
          name="CardPortfolio"
          component={CardPortfolio}
          options={{ title: 'My Work Showcase'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}