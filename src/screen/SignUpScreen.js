import React, { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSignUp = async () => {

    //REQUEST

   if(isLoading || username=='' || email=='' || password=='') {
    return;
  }
   setIsLoading(true);
   const response = await fetch('http://192.168.51.6:3000/signup',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: username,
      email: email,
      password: password,
    }),
   });
   
   //RESPONSE

   setIsLoading(false);
   if(response.ok){
    const data = await response.json();
    console.log('Signup Successful:',data);
    navigation.navigate('SignInScreen');
   }else{
    const errorData = await response.json();
    console.error('Singup Failed:',errorData);
   }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
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
        title="Sign Up"
        onPress={handleSignUp}
        disabled={isLoading}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
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
    color:'white',
    backgroundColor:'black',
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
   
  },
  link: {
    margin:20,
    color:'blue',
    textDecorationLine:'underline',
  },
  loader: {
    marginTop: 20,
  }
});

export default SignUpScreen;
