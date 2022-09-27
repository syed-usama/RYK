import React, { useState } from 'react';
import {View, Image, TouchableOpacity,Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../../assets/colors/colors';
import styles from './storeShops.style';
const StoreShops = ({navigation,item}) => {
  const [imageLoader, setImageLoader] = useState(false)
  const imageUrl = 'https://cdn.mallofryk.com/images/products/';
  const dummyResturant = require('../../assets/images/storeDummy.png');
  return (
    <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ShopScreen', {
                      resturant: item,
                    })
                  }
                  style={styles.favourite}>
                  <View style={{flex: 3}}>
                  <FastImage
                      style={styles.itemImage}
                      source={item.sho_image ? (imageLoader ? {uri: imageUrl + item.sho_image}: require('../../assets/images/gify.gif')) : dummyResturant}
                      onLoad={() => setImageLoader(true)}
                    />
                  </View>
                  <View style={{flex: 1, paddingLeft: 5}}>
                    <Text
                    numberOfLines={1}
                      style={styles.itemText}>
                      {item.sho_name}
                    </Text>
                    <Text
                    numberOfLines={1}
                     style={styles.itemText1}>
                      {item.sho_location}
                    </Text>
                  </View>
                </TouchableOpacity>
  );
};

export default StoreShops;

