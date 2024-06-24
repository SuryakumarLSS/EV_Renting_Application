import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import PaymentScreen from './PaymentScreen';

const Tab = createMaterialBottomTabNavigator();

function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
    </View>
  );
}

const TabBarScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="red"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          tabBarLabel: 'Payments',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarScreen;
