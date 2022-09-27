import React, { useState } from 'react';
import {View, Image, TouchableOpacity,Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './storeProducts.style';
const StoreProducts = ({navigation,item}) => {
  const [imageLoader, setImageLoader] = useState(false)
  const imageUrl = 'https://cdn.mallofryk.com/images/products/';
  return (
    <TouchableOpacity
                  key={item.pro_id}
                  style={styles.favourite}
                  onPress={() =>
                    navigation.navigate('StoreProduct', {product: item})
                  }>
                  <FastImage
                    style={styles.itemImage}
                    resizeMode="stretch"
                    source={imageLoader ? {uri: imageUrl + item?.images[0]?.url} : require('../../assets/images/gify.gif')}
                    onLoad={() => setImageLoader(true)}
                  />
                  <Text numberOfLines={1} style={styles.itemText}>
                    {item.pro_name}
                  </Text>
                  <Text style={styles.itemText1}>
                    Rs: {item.pro_new_price}
                  </Text>
                </TouchableOpacity>
  );
};

export default StoreProducts;

