/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

import LoginScreen from './android/app/src/components/LoginScreen';



function App(): JSX.Element {

  return (
    <View style={styles.container}>
      <LoginScreen />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
