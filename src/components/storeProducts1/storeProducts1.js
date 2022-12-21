import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';
import styles from './storeProducts1.style';
const StoreProducts1 = ({navigation, item}) => {
  const [imageLoader, setImageLoader] = useState(false);
  const imageUrl = 'https://cdn.mallofryk.com/images/products/';
  return (
    <TouchableOpacity
      key={item.pro_id}
      style={styles.favourite1}
      onPress={() => navigation.navigate('StoreProduct', {product: item})}>
      <FastImage
        style={styles.itemImage1}
        resizeMode="stretch"
        source={
          imageLoader
            ? {uri: item.images ? imageUrl + item?.images[0]?.url : imageUrl + item.url}
            : require('../../assets/images/gify.gif')
        }
        onLoad={() => setImageLoader(true)}
      />
      <Text numberOfLines={1} style={styles.itemText}>
        {item.pro_name}
      </Text>
      <View style={{flexDirection:'row',paddingHorizontal:1,paddingTop:1,alignItems:'center',justifyContent:"space-between"}}>
            <Entypo name="shop" size={15} color={colors.primary} style={{marginRight:4}}/>
            <Text numberOfLines={1} style={styles.itemText}>{item.sho_name}</Text>
      </View>
      <Text style={styles.itemText1}>Rs: {item.pro_new_price}</Text>
    </TouchableOpacity>
  );
};

export default StoreProducts1;
