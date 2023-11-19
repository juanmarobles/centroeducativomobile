/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme, View, Text, StyleSheet } from 'react-native';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import BlueBackground from './android/app/src/components/BlueBackground';



function App(): JSX.Element {

  return (
    <View style={styles.container}>
    
      <BlueBackground />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
