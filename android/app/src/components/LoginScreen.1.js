import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './LoginScreen';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <BlueBackground />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address" />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true} />
    </View>
  );
};
