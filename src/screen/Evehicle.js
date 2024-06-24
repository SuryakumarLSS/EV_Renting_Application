import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Evehicle = () => {
  const navigation = useNavigation();
  
  const electricBikes = [
    { id: 1, name: 'Tork Kratos R', mileage: '120 KM', chargingDuration: '6 hr', imageURL: 'https://m.media-amazon.com/images/I/71m2uHFJhcL._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, name: 'Revolt Rv 400', mileage: '150 KM', chargingDuration: '5 hr', imageURL: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/40710/rv-400-right-front-three-quarter-2.jpeg?isig=0&q=80' },
    { id: 3, name: 'Matter AERA', mileage: '125 KM', chargingDuration: '6 hr', imageURL: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/137187/aera-right-front-three-quarter.jpeg?isig=0' },
  ];

  const handleItemPress = (id) => {
    if (id === 1) {
      navigation.navigate('Ebike1');
    } else if (id === 2) {
      navigation.navigate('Ebike2');
    } 
    else if (id === 3) {
      navigation.navigate('Ebike3');
    } 
    
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={electricBikes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item.id)}>
          <View style={styles.card}>
            <Image source={{ uri: item.imageURL }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detail}>Mileage: <Text style={styles.bold}>{item.mileage}</Text></Text>
              <Text style={styles.detail}>Charging Duration: <Text style={styles.bold}>{item.chargingDuration}</Text></Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    marginBottom: 20,
    backgroundColor: 'grey',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Evehicle;
