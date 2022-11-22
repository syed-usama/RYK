import React, { useContext, useEffect } from 'react';
import {View, Text, SafeAreaView, StatusBar,Image,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../../services/firebase/authProvider';
import styles from './pickupScreen.style';
import colors from '../../../assets/colors/colors';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const PickupScreen = ({navigation}) => {
    const {user} = useContext(AuthContext);
    useEffect(() => {
        console.log('user');
    },[])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />
      <View style={styles.header}>
          <FontAwesome
            name="arrow-left"
            size={25}
            color={colors.primary}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.titleText}>RYK Pickup</Text>
          <Text style={styles.titleText}></Text>
          {/* <FontAwesome name="search" size={25} color={colors.primary} /> */}
      </View>
      <ScrollView style={styles.body}>
        <Image source={require('../../../assets/images/ryklogo.png')} style={styles.logo}/>
        <Text style={styles.bodyText1}>Schedule a pickup</Text>

        <Text style={styles.title}>
          Name
        </Text>
        <TextInput
        placeholder='Enter your name'
        style={styles.textInput}
        />

        <Text style={styles.title}>
          Email
        </Text>
        <TextInput
        placeholder='Enter your email'
        style={styles.textInput}
        />
        <Text style={styles.title}>
          Mobile Number
        </Text>
        <TextInput
        placeholder='Enter your mobile number'
        style={styles.textInput}
        />
        <Text style={styles.title}>
          Enter pickup address
        </Text>
        <TextInput
        placeholder='Enter your pickup address'
        style={styles.textInput}
        />
        <Text style={styles.title}>
          Enter destination address
        </Text>
        <TextInput
        placeholder='Enter destination address'
        style={styles.textInput}
        />
        <Text style={styles.title}>
          Comments
        </Text>
        <TextInput
        placeholder='Enter your comments'
        style={styles.textInput}
        />
        <Text style={styles.title}>
          Pieces
        </Text>
        <TextInput
        placeholder='Enter number of pieces'
        style={styles.textInput}
        />
        <Text style={styles.title}>
          Weight (Kg)
        </Text>
        <TextInput
        placeholder='Enter total weight of pickup'
        style={styles.textInput}
        />
        <Text style={styles.title}>
          Shipment value
        </Text>
        <TextInput
        placeholder='Enter shipment value'
        style={styles.textInput}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Create Pickup Request
          </Text>
        </TouchableOpacity>
        
      </ScrollView>

    </SafeAreaView>
  );
};

export default PickupScreen;

