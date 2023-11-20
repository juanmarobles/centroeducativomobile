import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/login.bmp')}
        style={styles.background}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loginContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    zIndex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    zIndex: 0,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 60,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
