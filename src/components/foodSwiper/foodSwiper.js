import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper'
import colors from '../../assets/colors/colors';
import styles from './foodSwiper.style';
const FoodSwiper = ({navigation}) => {
  return (
    <Swiper style={styles.swiper} dotColor={colors.white} activeDotColor={colors.primary} autoplay={true}>

      <View style={styles.slide}>
        <Image style={styles.sliderImage} source={require('../../assets/images/slider_images/foodslider1.png')}/>
      </View>

      <View style={styles.slide}>
        <Image style={styles.sliderImage} source={require('../../assets/images/slider_images/foodslider2.png')}/>
      </View>
      <View style={styles.slide}>
        <Image style={styles.sliderImage} source={require('../../assets/images/slider_images/foodslider3.png')}/>
      </View>
    </Swiper>
  );
};

export default FoodSwiper;

