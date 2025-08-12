import React from 'react';
import { NavigationContainer, DefaultTheme, Theme as NavTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CardFront from './CardFront';
import CardBack from './CardBack';
import CardPortfolio from './CardPortfolio';
import CardFetch from './CardFetch';
import ContactForm from './ContactForm';
import { ThemeProvider, useTheme, ThemeToggleButton } from './theme';

const Stack = createNativeStackNavigator();

function ThemedNavigator() {
  const { theme } = useTheme();

  const navTheme: NavTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.bg,
      card: theme.headerBg,
      text: theme.headerText,
      border: theme.border,
      primary: theme.textPrimary,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="CardFront"
        screenOptions={{
          headerStyle: { backgroundColor: theme.headerBg },
          headerTintColor: theme.headerText,
          headerTitleStyle: { color: theme.headerText },
          headerRight: () => <ThemeToggleButton /> // enhancement: global theme toggle in header
        }}
      >
        <Stack.Screen name="CardFront" component={CardFront} options={{ title: 'Digital Business Card' }} />
        <Stack.Screen name="CardBack" component={CardBack} options={{ title: 'Contact Details' }} />
        <Stack.Screen name="CardPortfolio" component={CardPortfolio} options={{ title: 'Portfolio' }} />
        <Stack.Screen name="CardFetch" component={CardFetch} options={{ title: 'Live Weather Fetch' }} />
        <Stack.Screen name="ContactForm" component={ContactForm} options={{ title: 'Contact Me' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedNavigator />
    </ThemeProvider>
  );
}