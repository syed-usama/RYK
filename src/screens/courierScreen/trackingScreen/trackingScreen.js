import React, { useContext, useEffect, useState } from 'react';
import {View, Text, SafeAreaView, StatusBar,Image,TouchableOpacity, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../../services/firebase/authProvider';
import styles from './trackingScreen.style';
import colors from '../../../assets/colors/colors';
import { ActivityIndicator } from 'react-native';
import axios from 'axios';
const TrackingScreen = ({navigation}) => {
    const {user} = useContext(AuthContext);
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)
    const [trackingNo , setTrackingNo] = useState('')
    const [trackingDetail , setTrackingDetail] = useState('')
    useEffect(() => {
        console.log('user');
    },[])
    const track = () =>{
      setError(false);
      setLoading(true)
      let url = 'https://codapi.daewoo.net.pk/api/booking/quickTrack?trackingNo='+trackingNo;
    axios.get(url)
      .then(response => {
        // console.log('response:>>',response)
        setLoading(false);
        let data = response.data;
        console.log('data:',data)
      })
      .catch(error => {
        console.log('Error>>>', error);
        setLoading(false);
        setError(true);
      });
      // setTimeout(after,2000)
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
        value={trackingNo}
        onChangeText={(value)=> setTrackingNo(value)}
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

