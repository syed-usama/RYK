import React, { useContext, useEffect } from 'react';
import {View, Text, SafeAreaView, StatusBar,Image,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../../services/firebase/authProvider';
import styles from './findusScreen.style';
import colors from '../../../assets/colors/colors';
const FoodSupport = ({navigation}) => {
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
          <Text style={styles.titleText}>RYK Contacts</Text>
          <Text style={styles.titleText}></Text>
          {/* <FontAwesome name="search" size={25} color={colors.primary} /> */}
      </View>
      <View style={styles.body}>
        <Image source={require('../../../assets/images/rykmall.png')} style={styles.logo}/>
        <Text style={styles.bodyText1}>Get in touch with us</Text>
        <Text style={styles.text1}>
          Address
        </Text>
        <Text style={styles.text2}>	
          AL HASEEB MARKET SHOP NO 2 MAIN FAISAL ROAD RAHIM YAR KHAN
        </Text>
        <Text style={styles.text1}>
          Phone Number
        </Text>
        <Text style={styles.text2}>
        +92 6858 84505
        </Text>
        <Text style={styles.text1}>
          Email Address
        </Text>
        <Text style={styles.text2}>
        info@rykfoodies.com
        </Text>
      </View>

    </SafeAreaView>
  );
};

export default FoodSupport;

