import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const MembershipScreen = ({ navigation }) => {
  const [membershipId, setMembershipId] = useState('');
  const [showMembershipPlans, setShowMembershipPlans] = useState(false);
  const plansData = [
    { id: 1, type: 'SingleDay Membership' },
    { id: 2, type: 'Weekly Membership' },
    { id: 3, type: 'Monthly Membership' },
  ];

  const PlanItem = ({ item }) => (
    <View style={styles.planItem}>
      <Text style={styles.planType}>{item.type}</Text>
      {/* For demonstration purposes, assuming you have a price property in the plansData */}
      {/* <Text style={styles.planPrice}>{item.price}</Text> */}
    </View>
  );

  const handleMembershipIdChange = (text) => {
    setMembershipId(text);
    if (text === '463140') {
      setShowMembershipPlans(true);
    } else {
      setShowMembershipPlans(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.line}>Enter your Membership ID</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleMembershipIdChange}
        value={membershipId}
      />
      {showMembershipPlans && (
        <Modal animationType="slide" transparent={true} visible={showMembershipPlans}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.heading}>Membership Plans</Text>
              <FlatList
                data={plansData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PlanItem item={item} />}
                vertical
                showsHorizontalScrollIndicator={false}
              />
              <TouchableOpacity onPress={() => setShowMembershipPlans(false)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 10,
    padding: 70,
    backgroundColor: 'lightblue',
  },
  input: {
    width: '100%',
    height: 40,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  line: {
    fontSize: 20,
    fontWeight:'700'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  planItem: {
    backgroundColor: 'red',
    padding: 10,
    margin: 50,
    borderRadius: 5,
  },
  planType: {
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#ccc',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
  },
});

export default MembershipScreen;
