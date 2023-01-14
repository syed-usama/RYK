import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper'
import colors from '../../assets/colors/colors';
import styles from './homeSwiper.style';
const HomeSwiper = ({navigation}) => {
  return (
    <Swiper style={styles.swiper} dotColor={colors.white} activeDotColor={colors.primary} autoplay={true}>
      <View style={styles.slide}>
        <Image style={styles.sliderImage} source={require('../../assets/images/slider_images/slider1.jpeg')}/>
      </View>
      <View style={styles.slide}>
        <Image style={styles.sliderImage} source={require('../../assets/images/slider_images/slider7.jpeg')}/>
      </View>
      <View style={styles.slide}>
        <Image style={styles.sliderImage} source={require('../../assets/images/slider_images/slider2.jpeg')}/>
      </View>
      <View style={styles.slide}>
        <Image style={styles.sliderImage} source={require('../../assets/images/slider_images/slider3.jpeg')}/>
      </View>
      <View style={styles.slide}>
        <Image style={styles.sliderImage} source={require('../../assets/images/slider_images/slider4.jpeg')}/>
      </View>
    </Swiper>
  );
};

export default HomeSwiper;

