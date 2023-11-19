import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './LoginScreen'; // Ajusta la ruta según tu estructura de carpetas

const BlueBackground = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
});

export default BlueBackground;
