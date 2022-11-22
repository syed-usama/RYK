import React, { useContext, useEffect, useState } from 'react';
import {View, Text, SafeAreaView, StatusBar,Image,TouchableOpacity, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../../services/firebase/authProvider';
import styles from './trackingScreen.style';
import colors from '../../../assets/colors/colors';
import { ActivityIndicator } from 'react-native';
const TrackingScreen = ({navigation}) => {
    const {user} = useContext(AuthContext);
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)
    useEffect(() => {
        console.log('user');
    },[])
    const track = () =>{
      setError(false);
      setLoading(true)
      setTimeout(after,2000)
    }
    const after = () =>{
      setLoading(false);
      setError(true);
    }
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
          <Text style={styles.titleText}>RYK Tracking</Text>
          <Text style={styles.titleText}></Text>
          {/* <FontAwesome name="search" size={25} color={colors.primary} /> */}
      </View>
      <View style={styles.body}>
        <Image source={require('../../../assets/images/ryklogo.png')} style={styles.logo}/>
        <Text style={styles.bodyText1}>What would you like to track?</Text>
        <TextInput
        placeholder='Enter your tracking number'
        style={styles.textbox}
        />
        <TouchableOpacity style={styles.button} onPress={()=> track()}>
          {loading ?
          <ActivityIndicator  color={'white'} size={20}/>
          :
          <Text style={styles.buttonText}>
            Track
          </Text>
          }
        </TouchableOpacity>
        {error  &&
        <Text style={styles.error}>
          No record found !
        </Text>
}
      </View>

    </SafeAreaView>
  );
};

export default TrackingScreen;

