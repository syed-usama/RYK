import React, {useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../../assets/colors/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './productSwiper.style';
const ProductSwiper = ({navigation, images}) => {
  const imageUrl = 'https://cdn.mallofryk.com/images/products/';
  const [imageLoading, setImageLoading] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Swiper
        style={styles.swiper}
        dotColor={colors.white}
        activeDotColor={colors.primary}
        autoplay={true}>
        {images.map(image => (
          <TouchableOpacity key={image} onPress={() => setImageModal(true)}>
            <ImageBackground
              style={styles.imageStyle4}
              resizeMode='stretch'
              source={
                imageLoading
                  ? {uri: imageUrl + image.url}
                  : require('../../assets/images/gify.gif')
              }
              onLoad={() => setImageLoading(true)}>
              {/* <Image
                source={require('../../assets/images/frame.png')}
                style={styles.frame}
              /> */}
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </Swiper>
      <Modal visible={imageModal} transparent={true} animationType="slide">
        <Swiper
          style={styles.swiper}
          dotColor={colors.white}
          activeDotColor={colors.primary}
          autoplay={true}>
          {images.map(image => (
            <TouchableOpacity key={image} activeOpacity={1}>
              <ImageBackground
                style={styles.imageStyle1}
                resizeMode='contain'
                source={
                  imageLoading
                    ? {uri: imageUrl + image.url}
                    : require('../../assets/images/gify.gif')
                }
                onLoad={() => setImageLoading(true)}>
                <TouchableOpacity
                  onPress={() => setImageModal(false)}
                  style={styles.closeIcon}>
                  <FontAwesome name="close" size={22} color={colors.primary} />
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </Swiper>
      </Modal>
    </View>
  );
};

export default ProductSwiper;
