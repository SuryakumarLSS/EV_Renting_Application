import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('./img/logo1.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome to EV app </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('SignInScreen');
        }}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('SignUpScreen');
        }}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    color: 'black',
    fontSize: 20,
  },
  highlight: {
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  highlightButton: {
    backgroundColor: 'orange',
  },
  button: {
    marginTop: 20,
    width: '80%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, 
    borderWidth: 2, 
    borderColor: 'white', 
  },
  buttonText: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  buttonTextHighlight: {
    textTransform: 'uppercase', // Convert button text to uppercase for emphasis
  },
});

export default WelcomeScreen;
