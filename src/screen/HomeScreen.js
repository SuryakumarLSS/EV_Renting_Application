import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Card, Header, Icon, SearchBar } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [offers, setOffers] = useState([
    "Get 20% off on EV Bike rentals today!",
    "Special discount on EV Scooters - Limited time offer!",
    "Rent an EV Cycle and get a free accessory!",
    "Limited time offer: Free charging on all EVs!",
    "Join our membership program for exclusive benefits!",
    "Upgrade your EV and get a discount on accessories!"
  ]);

  const updateSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const vehiclesData = [
    {
      id: 1,
      model: 'EV Bike',
      imageURL: 'https://www.gizmochina.com/wp-content/uploads/2021/06/Revolt-RV-400.jpg',
    },
    {
      id: 2,
      model: 'EV Cycle',
      imageURL: 'https://image.made-in-china.com/202f0j00CsMGLwIrHUqQ/Vimode-Two-Wheel-City-48V-500W-Import-Electric-Bikes-From-China.webp',
    },
    {
      id: 3,
      model: 'EV Scooter',
      imageURL: 'https://bd.gaadicdn.com/processedimages/hero-electric/scooter/494X300/scooter648d5e3cde59a.jpg',
    },
  ];

  const VehicleItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleVehiclePress(item.id)}>
      <Card containerStyle={styles.card}>
        <Card.Image source={{ uri: item.imageURL }} />
        <Text style={styles.cardTitle}>{item.model}</Text>
      </Card>
    </TouchableOpacity>
  );

  const handleVehiclePress = (id) => {
    if (id === 1) {
      navigation.navigate('Evehicle');
    } else if (id === 2) {
      navigation.navigate('Evehicle2');
    } else if (id === 3) {
      navigation.navigate('Evehicle3');
    }
    // Add navigation for other electric vehicles here
  };

  const handleLicenseVerificationPress = () => {
    navigation.navigate('LicenseVerification'); // Navigate to LicenseVerification screen
  };

  return (
    <View style={styles.container}>
      <Header
        placement="left"
        centerComponent={{ text: 'Home', style: styles.headerText }}
        containerStyle={styles.headerContainer}
        rightComponent={<Icon name="shopping-cart" type="font-awesome" color="#fff" onPress={() => navigation.navigate('CartScreen')} />}
        leftComponent={<Icon name="ev-station" type="material-community" color="#fff" onPress={() => navigation.navigate('EVStationScreen')} />}
      />
      <ScrollView>
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
          />
        </View>

        <View style={styles.offerContainer}>
          <Text style={styles.heading}>Today's Offers</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {offers.map((offer, index) => (
              <Card key={index} containerStyle={styles.offerItem}>
                <Text style={styles.offerText}>{offer}</Text>
              </Card>
            ))}
          </ScrollView>
        </View>

        <View style={styles.buttonContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Button
              title="Membership"
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
              onPress={() => navigation.navigate('MembershipScreen')}
            />
            <Button
              title="License Verification"
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
              onPress={() => navigation.navigate('LiscenseVerification')}
            />
            <Button
              title="EV News"
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
              onPress={() => navigation.navigate('EVNews')}
            />
          </ScrollView>
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>ELECTRIC VEHICLES</Text>
        </View>

        <View style={styles.vehicleListContainer}>
          <FlatList
            data={vehiclesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <VehicleItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', // Background color
  },
  headerContainer: {
    backgroundColor: '#212121', // Header background color
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerText: {
    color: '#fff', // Header text color
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    paddingHorizontal: 10,
    paddingTop: 10, // Add padding to move it below the Header bar
    paddingBottom: 10,
  },
  searchBarContainer: {
    backgroundColor: '#FFFFFF', // Search bar background color
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    borderRadius: 20, // Curved edges
  },
  searchInputContainer: {
    backgroundColor: '#FFFFFF', // Search input background color
    borderRadius: 20, // Curved edges
    height: 40,
  },
  searchInput: {
    fontSize: 16,
  },
  offerContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  headingContainer: {
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: '#212121', // Text color
    alignSelf: 'center',
  },
  offerItem: {
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  offerText: {
    color: '#000', // Text color
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1976D2', // Button background color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff', // Button text color
    fontWeight: 'bold',
    textAlign: 'center',
  },
  vehicleListContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 200,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default HomeScreen;
