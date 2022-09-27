import React, {useEffect,useContext}from 'react';
import {View, Text, SafeAreaView, ImageBackground,BackHandler,Alert, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './homeScreen.style';
import HomeSwiper from '../../components/homeSwiper/homeSwiper';
import colors from '../../assets/colors/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useSelector , useDispatch} from 'react-redux';
import { get_store_products,get_store_shops } from '../../services/redux/actions/actions';
const HomeScreen = ({navigation}) => {
  const store_Shops = useSelector(state => state.shops);
  const store_Products = useSelector(state => state.store_products);
  const dispatch = useDispatch();
  const feedback = (res)=>{
    console.log("res:",res)
  }
  useEffect(()=>{
    if(store_Shops.length <= 0){
    dispatch(get_store_shops(1,8,feedback))
    }
    if(store_Products.length <= 0){
      dispatch(get_store_products(1,12,feedback))
      }
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />
      <View style={styles.header}>
          {/* <Icon
            name="bars"
            size={27}
            color={colors.primary}
            onPress={() => navigation.openDrawer()}
          /> */}
          <Text style={styles.titleText}>Home</Text>
          {/* <Icon name="search" size={25} color={colors.primary} /> */}
      </View>
        <View style={styles.homeSwiper}>
          <HomeSwiper/>
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>RYK Mall</Text>
          <Text style={styles.description}>Get one step ahead of your competition and reach your customers with the strength of the ""RYK Couriers"" global network.</Text>
          </View>
      <View style={styles.body}>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('FoodDrawer')}>
        <Text style={styles.buttonText1}>RYK Foodies</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CourierDrawer')}>
          <ImageBackground style={styles.buttonImage2} 
          imageStyle={{borderRadius:10,borderWidth:1,borderColor:colors.secondary}} 
          source={require('../../assets/images/slider_images/slide2.jpeg')}>
          <View style={styles.button2}>
        <Text style={styles.buttonText2}>RYK Courier</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('StoreDrawer')}>
        <Text style={styles.buttonText1}>RYK Store</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

