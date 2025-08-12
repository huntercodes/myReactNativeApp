import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, Animated, ScrollView } from 'react-native';
import { useTheme } from './theme';

export default function ContactForm() {
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const confirmOpacity = useRef(new Animated.Value(0)).current;

  const onSubmit = () => {
    // very light validation
    if (!name || !email || !msg) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    confirmOpacity.setValue(0);
    Animated.timing(confirmOpacity, { toValue: 1, duration: 500, useNativeDriver: true }).start();
    // reset fields optionally:
    setName('');
    setEmail('');
    setMsg('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'padding', android: undefined })}
      style={[styles.flex, { backgroundColor: theme.bg }]}
    >
      <ScrollView contentContainerStyle={[styles.container]}>
        <Text style={[styles.heading, { color: theme.textPrimary }]}>Contact Me</Text>

        <Text style={[styles.label, { color: theme.textSecondary }]}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          placeholderTextColor={theme.textSecondary}
          style={[styles.input, { backgroundColor: theme.card, color: theme.textPrimary, borderColor: theme.border }]}
        />

        <Text style={[styles.label, { color: theme.textSecondary }]}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          placeholderTextColor={theme.textSecondary}
          keyboardType="email-address"
          autoCapitalize="none"
          style={[styles.input, { backgroundColor: theme.card, color: theme.textPrimary, borderColor: theme.border }]}
        />

        <Text style={[styles.label, { color: theme.textSecondary }]}>Message</Text>
        <TextInput
          value={msg}
          onChangeText={setMsg}
          placeholder="Say hello!"
          placeholderTextColor={theme.textSecondary}
          multiline
          style={[styles.textarea, { backgroundColor: theme.card, color: theme.textPrimary, borderColor: theme.border }]}
        />

        <View style={styles.buttonWrap}>
          <Button title="Send Message" onPress={onSubmit} />
        </View>

        {submitted && (
          <Animated.View style={{ opacity: confirmOpacity, marginTop: 16 }}>
            <Text style={{ color: theme.textPrimary, fontWeight: '600', textAlign: 'center' }}>
              ✅ Message sent (simulated). I’ll get back to you soon!
            </Text>
          </Animated.View>
        )}

        {/* enhancement note:
            - added animated confirmation (fade-in) after submission using Animated API.
        */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { padding: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  label: { marginTop: 12, marginBottom: 6, fontSize: 14 },
  input: {
    borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, height: 44,
  },
  textarea: {
    borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, paddingTop: 12, height: 120,
  },
  buttonWrap: { marginTop: 16, width: 180, alignSelf: 'center' },
});