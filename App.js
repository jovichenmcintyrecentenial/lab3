import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistationForm from './components/register-form';
import React, { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistationForm>Open up App.js to start working on your app!</RegistationForm>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100,
    backgroundColor: '#fff',
  },
});

