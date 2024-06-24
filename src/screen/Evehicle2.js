import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Evehicle2 = () => {
  const navigation = useNavigation();
  
  const electricBikes = [
    { id: 1, name: 'Motovolt Urban E bike', mileage: '70KM', chargingDuration: '4 hr', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrAwlQGjJTs3JVwj1wdi5TrwgB1S7HAAIyhhWrlvxh7iHhfVYZJuktnSmxITebGLmZPnU&usqp=CAU' },
    { id: 2, name: 'Yulu e bike', mileage: '40KM', chargingDuration: '3hr', imageURL: 'https://techcrunch.com/wp-content/uploads/2019/11/yulu_india.jpg?w=1024' },
    { id: 3, name: 'Uboard Path finder', mileage: '60 KM', chargingDuration: '6 hr', imageURL: 'https://m.media-amazon.com/images/I/71iNxc9K23L.jpg' },
  ];
  const handleItemPress = (id) => {
    if (id === 1) {
      navigation.navigate('Ecycle1');
    } else if (id === 2) {
      navigation.navigate('Ecycle2');
    } 
    else if (id === 3) {
      navigation.navigate('Ecycle3');
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

export default Evehicle2;
