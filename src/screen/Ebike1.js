import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Ebike1 = () => {
  const navigation = useNavigation();

  const handleNormalUsePayment = () => {
    navigation.navigate('PaymentScreen', { type: 'Normal Use' });
  };

  const handleMembershipPayment = () => {
    navigation.navigate('PaymentScreen', { type: 'Membership' });
  };

  return (
    <View style={styles.pricingTable}>
      <View style={styles.pricingOption}>
        <Image
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqhkEYJU6LIFPl1DhkS9RM8jFtkvCijMUIdGvczpz3lEWGMh31OhhXCmEki5r-XeUTjs&usqp=CAU'}}
          style={styles.image}
        />
        <Text style={styles.heading}>Normal Use</Text>
        <View style={styles.list}>
          <Text>For a day: ₹500</Text>
          <Text>Weekly: ₹3500</Text>
          <Text>Monthly: ₹15500 with free charging everyday</Text>
        </View>
        <TouchableOpacity onPress={handleNormalUsePayment}>
          <Text style={styles.button}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pricingOption}>
        <Image
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgvKaPm0pHj78zf26ot6Zm9gD0GrJLf1BTUnTWiNWpNuyp9Hy-A65kbEFPnxIlu62LPU&usqp=CAU'}}
          style={styles.image}
        />
        <Text style={styles.heading}>Membership</Text>
        <View style={styles.list}>
          <Text>For a day: ₹250</Text>
          <Text>Weekly: ₹1750</Text>
          <Text>Monthly: ₹7750</Text>
        </View>
        <TouchableOpacity onPress={handleMembershipPayment}>
          <Text style={styles.button}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pricingTable: {
    flexDirection:'column', // Change to column for vertical alignment
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgreen',
  },
  pricingOption: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
    backgroundColor: 'lightgreen',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 25,
  },
  heading: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
  },
  list: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Ebike1;
