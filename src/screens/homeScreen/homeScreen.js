import React, { useContext, useEffect } from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../services/firebase/authProvider';
import styles from './homeScreen.style';
import HomeSwiper from '../../components/homeSwiper/homeSwiper';
import colors from '../../assets/colors/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HomeScreen = ({navigation}) => {
    const {user} = useContext(AuthContext);
    useEffect(() => {
        console.log(user);
    },[])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Icon
            name="bars"
            size={27}
            color={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.titleText}>Home</Text>
          <Icon name="search" size={25} color={colors.primary} />
      </View>
        <View style={styles.homeSwiper}>
          <HomeSwiper/>
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>RYK Services</Text>
          <Text style={styles.description}>Get one step ahead of your competition and reach your customers with the strength of the ""RYK Couriers"" global network.</Text>
          </View>
      <View style={styles.body}>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('FoodScreen')}>
        <Text style={styles.buttonText1}>RYK Food</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CourierScreen')}>
          <ImageBackground style={styles.buttonImage2} 
          imageStyle={{borderRadius:20,borderWidth:1,borderColor:colors.secondary}} 
          source={require('../../assets/images/slider_images/slide2.jpeg')}>
          <View style={styles.button2}>
        <Text style={styles.buttonText2}>RYK Courier</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

