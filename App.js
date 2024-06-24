import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Ebike1 from './src/screen/Ebike1';
import Ebike2 from './src/screen/Ebike2';
import Ebike3 from './src/screen/Ebike3';
import Ecycle1 from './src/screen/Ecycle1';
import Ecycle2 from './src/screen/Ecycle2';
import Ecycle3 from './src/screen/Ecycle3';
import Escooter1 from './src/screen/Escooter1';
import Escooter2 from './src/screen/Escooter2';
import Escooter3 from './src/screen/Escooter3';
import Evehicle from './src/screen/Evehicle';
import Evehicle2 from './src/screen/Evehicle2';
import Evehicle3 from './src/screen/Evehicle3';
import LiscenseVerification from './src/screen/LiscenseVerification';
import MembershipScreen from './src/screen/MembershipScreen';
import PaymentScreen from './src/screen/PaymentScreen';
import SignInScreen from './src/screen/SignInScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import TabBarScreen from './src/screen/TabBarScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="TabBarScreen"
          component={TabBarScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="MembershipScreen"
          component={MembershipScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Evehicle"
          component={Evehicle}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Evehicle2"
          component={Evehicle2}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Evehicle3"
          component={Evehicle3}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Ebike1"
          component={Ebike1}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Ebike2"
          component={Ebike2}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Ebike3"
          component={Ebike3}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Ecycle1"
          component={Ecycle1}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Ecycle2"
          component={Ecycle2}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Ecycle3"
          component={Ecycle3}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Escooter1"
          component={Escooter1}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Escooter2"
          component={Escooter2}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Escooter3"
          component={Escooter3}
          options={{ title: '', headerShown: false }}
        />
         <Stack.Screen
          name="LiscenseVerification"
          component={LiscenseVerification}
          options={{ title: '', headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
