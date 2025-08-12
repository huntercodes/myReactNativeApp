import React, { createContext, useContext, useMemo, useState } from 'react';
import { Button, View } from 'react-native';

const ThemeContext = createContext();

const lightTheme = {
  name: 'light',
  bg: '#f7f7fb',
  card: '#ffffff',
  textPrimary: '#111827',
  textSecondary: '#4b5563',
  border: '#e5e7eb',
  headerBg: '#ffffff',
  headerText: '#111827',
};

const oceanTheme = {
  name: 'ocean',
  bg: '#071e26',
  card: '#0c2a33',
  textPrimary: '#e6f1f5',
  textSecondary: '#b7ccd6',
  border: '#133845',
  headerBg: '#0c2a33',
  headerText: '#e6f1f5',
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);
  const toggle = () => setTheme((t) => (t.name === 'light' ? oceanTheme : lightTheme));
  const value = useMemo(() => ({ theme, toggle }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

// small header button that consumes context
export function ThemeToggleButton() {
  const { theme, toggle } = useTheme();
  return (
    <View style={{ marginRight: 8 }}>
      <Button
        title={theme.name === 'light' ? 'Ocean' : 'Light'}
        onPress={toggle}
      />
    </View>
  );
}