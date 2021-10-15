import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/header';
import Home from './src/home';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
