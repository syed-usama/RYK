import React, { useContext, useEffect } from 'react';
import {View, Text, SafeAreaView, StatusBar,Image,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../../services/firebase/authProvider';
import styles from './courierScreen.style';
import colors from '../../../assets/colors/colors';
const CourierScreen = ({navigation}) => {
    const {user} = useContext(AuthContext);
    useEffect(() => {
        console.log(user);
    },[])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />
      <View style={styles.header}>
          <FontAwesome
            name="bars"
            size={25}
            color={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.titleText}>RYK Courier</Text>
          <Text></Text>
          {/* <FontAwesome name="search" size={25} color={colors.primary} /> */}
      </View>
      <View style={styles.body}>
        <Image source={require('../../../assets/images/ryklogo.png')} style={styles.logo}/>
        <Text style={styles.bodyText1}>What would you like to do?</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('RateScreen')}>
            <View style={styles.circle}>
            <MaterialIcons name="corporate-fare" size={30} color={colors.primary} />
            </View>
            <Text style={styles.cardText}>Get Rates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('TrackingScreen')}>
          <View style={styles.circle}>
            <MaterialCommunityIcons name="cellphone-text" size={30} color={colors.primary} />
            </View>
            <Text style={styles.cardText}>Tracking</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('PickupScreen')}>
            <View style={styles.circle}>
            <MaterialCommunityIcons name="truck-delivery" size={30} color={colors.primary} />
            </View>
            <Text style={styles.cardText}>Pick up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('FindusScreen')}>
          <View style={styles.circle}>
            <MaterialCommunityIcons name="file-find" size={30} color={colors.primary} />
            </View>
            <Text style={styles.cardText}>Find Us</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default CourierScreen;

