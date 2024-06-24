import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';

const PaymentScreen = ({ navigation }) => {

    const paymentGateway = (vpa) => {
        RNUpiPayment.initializePayment(
            {
              vpa: vpa,
              payeeName: 'John Doe',
              amount: '1',
              transactionRef: 'aasf-332-aoei-fn',
            },
            successCallback,
            failureCallback
          );
    }

    function successCallback(data) {
        console.log(data);
    }
    
    function failureCallback(data) {
        console.log(data);
    }

    return(
       <View style={styles.container}> 
        <Text style={styles.title}>PAY HERE</Text>
        <View style={styles.paymentOptions}>
            <TouchableOpacity onPress={() => paymentGateway('john@upi')}>
                <Image source={require('./assets/upi_logo.png')} style={styles.logo} />
            </TouchableOpacity>
          
        </View>
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontStyle:'bold',
        
        marginBottom: 20,
    },
    paymentOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
});

export default PaymentScreen;
