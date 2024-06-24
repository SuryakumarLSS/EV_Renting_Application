import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async() =>{

    //REQUEST

    if(isLoading || email=='' || password==''){
      return;
    }
    setIsLoading(true);
    const response = await fetch('http://192.168.51.6:3000/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email,
        password:password,
      }),
    })
    
    //RESPONSE
    
    setIsLoading(false);
    if(response.ok){
      // const data = await response.json();
      console.log('Login Successful');
      navigation.navigate('TabBarScreen');
    }else{
      // const errorData = await response.json();
      console.error('Login failed')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
     <Button
        title="Sign In"
        onPress={handleSignIn}
        disabled={isLoading}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    
      {isLoading && (<ActivityIndicator style={styles.loader} size="large" color="blue"/>)}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  heading: {
    color:'green',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor:'black',
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color:'white',
  },
  link: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  loader: {
    marginTop: 20,
  }
});


export default SignInScreen;
