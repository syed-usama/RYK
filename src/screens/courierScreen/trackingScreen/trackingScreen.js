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
        let data = response.data.Result;
        console.log('data:',data)
        if(data.CurrentTrackStatus.length > 0){
          setTrackingDetail(data.CurrentTrackStatus[0])
        }else{
          setError(true);
        }
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
        placeholderTextColor={'black'}
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
        {error  ?
        <Text style={styles.error}>
          No record found !
        </Text>
        :
        trackingDetail ?
        <View style={styles.card}>

          <View style={styles.row}>
            <View style={styles.text1}>
              <Text style={styles.tabletext}>
                Consignment No:
              </Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.tabletext2}>
                {trackingDetail.track_no}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.text1}>
              <Text style={styles.tabletext}>
                Delivery Status:
              </Text>
            </View>
            <View style={styles.text2}>
              <Text style={[styles.tabletext2,{fontWeight:'600',fontSize:14}]}>
              {trackingDetail.status_name}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.text1}>
              <Text style={styles.tabletext}>
                Booking Date:
              </Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.tabletext2}>
              {trackingDetail.booking_date_time}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.text1}>
              <Text style={styles.tabletext}>
                Sender Name:
              </Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.tabletext2}>
              {trackingDetail.sender_name}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.text1}>
              <Text style={styles.tabletext}>
                Receiver Name:
              </Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.tabletext2}>
              {trackingDetail.receiver_name}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.text1}>
              <Text style={styles.tabletext}>
                Origin:
              </Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.tabletext2}>
              {trackingDetail.source_terminal}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.text1}>
              <Text style={styles.tabletext}>
                Destination:
              </Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.tabletext2}>
              {trackingDetail.destination_terminal} 
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.text1}>
              <Text style={styles.tabletext}>
                Delivery Type:
              </Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.tabletext2}>
              {trackingDetail.payment_mode_name}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.text1}>
              <Text style={styles.tabletext}>
                Weight:
              </Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.tabletext2}>
              {trackingDetail.tweight}
              </Text>
            </View>
          </View>

        </View>:null
}
      </View>

    </SafeAreaView>
  );
};

export default TrackingScreen;

