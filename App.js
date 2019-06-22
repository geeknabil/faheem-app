import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNav from './components/stackNav';

export default function App() {
  return (
   <StackNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});