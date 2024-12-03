import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>DODY SAPUTRA SIMANJORANG TUGAS 2 LAB DPM </Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#FF6347', 
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#4682B4', 
  },
});
