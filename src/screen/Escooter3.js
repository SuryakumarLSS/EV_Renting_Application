import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Escooter3= () => {
  return (
    <View style={styles.pricingTable}>
      <View style={styles.pricingOption}>
        <Image
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqhkEYJU6LIFPl1DhkS9RM8jFtkvCijMUIdGvczpz3lEWGMh31OhhXCmEki5r-XeUTjs&usqp=CAU'}}
          style={styles.image}
        />
        <Text style={styles.heading}>Normal Use</Text>
        <View style={styles.list}>
          <Text>For a day: ₹200</Text>
          <Text>Weekly: ₹1400</Text>
          <Text>Monthly: ₹6200 with free charging everyday</Text>
        </View>
      </View>
      <View style={styles.pricingOption}>
        <Image
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgvKaPm0pHj78zf26ot6Zm9gD0GrJLf1BTUnTWiNWpNuyp9Hy-A65kbEFPnxIlu62LPU&usqp=CAU'}}
          style={styles.image}
        />
        <Text style={styles.heading}>Membership</Text>
        <View style={styles.list}>
          <Text>For a day: 150</Text>
          <Text>Weekly: ₹1050</Text>
          <Text>Monthly: ₹4650</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pricingTable: {
    flexDirection: 'column', // Change to column for vertical alignment
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pricingOption: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    textAlign: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  heading: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
  },
  list: {
    marginBottom: 10,
  },
});

export default Escooter3;
