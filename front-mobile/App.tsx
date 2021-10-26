import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import Home from './src/Home';
import Routes from './src/Routes';

export default function App() { 

  
const styles = StyleSheet.create({
  container: {
  },
});
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false}/>
      <Routes />
    </>
  );}