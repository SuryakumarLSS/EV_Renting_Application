import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Evehicle3 = () => {
  const navigation = useNavigation();
  
  const electricBikes = [
    { id: 1, name: 'Ola S1 pro', mileage: '195', chargingDuration: '6.5 hr', imageURL: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230531031734_Ola%20lead.jpg&w=700&c=1' },
    { id: 2, name: 'Ather 450x', mileage: '100KM', chargingDuration: '4hr', imageURL: 'https://images.news18.com/ibnlive/uploads/2023/04/ather-450x-new-base-variant-1.jpg' },
    { id: 3, name: 'Vida v1', mileage: '120 KM', chargingDuration: '5hr', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcK0dUXvRXJSwvEDCybls0fIo-qxCm9JZLvQ&usqp=CAU' },
  ];
  const handleItemPress = (id) => {
    if (id === 1) {
      navigation.navigate('Escooter1');
    } else if (id === 2) {
      navigation.navigate('Escooter2');
    } 
    else if (id === 3) {
      navigation.navigate('Escooter3');
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
    backgroundColor: '#ffffff',
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

export default Evehicle3;
