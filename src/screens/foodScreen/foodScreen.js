import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
const {height} = Dimensions.get('screen');
const height_logo = height + 200;
import {useIsFocused} from '@react-navigation/native';
import styles from './foodScreen.style';
import colors from '../../assets/colors/colors';
import FoodSwiper from '../../components/foodSwiper/foodSwiper';
import {useSelector} from 'react-redux';
import style from '../../styles/global.style';
import axios from 'axios';
const FoodScreen = ({navigation}) => {
  const cartDetail = useSelector(state => state.cart.cart);
  const [cart, setCart] = useState(cartDetail.length);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const isFocused = useIsFocused();
  const imageUrl = 'https://mallofryk.com/admin/assets/pro_img/';
  const dummyResturant = require('../../assets/images/resturantDummy.png');
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [resturants, setResturants] = useState([]);
  const getImage = async data => {
    let imageurl = 'https://mallofryk.com/api/Items/getimage/';
    var products= [];
    for( var a=0 ;a<data.length; a++){
      let product = data[a];
      let yes = await axios
        .get(imageurl + data[a].pro_id)
        .then(response => {
          //console.log('image>', response.data);
          product.pro_image = response.data;
          products.push(product);
        })
        .catch(error => {
          console.log('Error>>>', error);
        });
    };
    setProducts(products);
    setLoading(false);
  };
  const getImage1 = async data => {
    let imageurl = 'https://mallofryk.com/api/Items/getimage/';
    var products= [];
    for( var a=0 ;a<data.length; a++){
      let product = data[a];
      let yes = await axios
        .get(imageurl + data[a].pro_id)
        .then(response => {
          //console.log('image>', response.data);
          product.pro_image = response.data;
          products.push(product);
        })
        .catch(error => {
          console.log('Error>>>', error);
        });
    };
    setProducts1(products);
    setLoading(false);
  };
  const getImage2 = async data => {
    let imageurl = 'https://mallofryk.com/api/Items/getimage/';
    var products= [];
    for( var a=0 ;a<data.length; a++){
      let product = data[a];
      let yes = await axios
        .get(imageurl + data[a].pro_id)
        .then(response => {
          //console.log('image>', response.data);
          product.pro_image = response.data;
          products.push(product);
        })
        .catch(error => {
          console.log('Error>>>', error);
        });
    };
    setProducts2(products);
    setLoading(false);
  };

  const getFoodData = async () => {
    setLoading(true);
    let url = 'https://mallofryk.com/api/Items/foodies/18/0';
    let yes = await axios
      .get(url)
      .then(response => {
        //console.log('Response>', response.data)
        //setLoading(false);
        let data = response.data;
        if (data.length > 0) {
          const products1 = data.slice(0, 6);
          const products2 = data.slice(6, 12);
          const products3 = data.slice(12, 18);
          getImage(products1);
          getImage1(products2);
          getImage2(products3);
        }
      })
      .catch(error => {
        console.log('Error>>>', error);
        setLoading(false);
      });
  };
  const getResturantsData = async () => {
    setLoading(true);
    let url = 'https://mallofryk.com/api/Items/resturants/20/0';
    let yes = await axios
      .get(url)
      .then(response => {
        //console.log('Response>', response.data)
        setResturants(response.data)
      })
      .catch(error => {
        console.log('Error>>>', error);
        setLoading(false);
      });
  };
  useEffect(() => {
    getFoodData();
    getResturantsData();
  }, []);
  useEffect(() => {
    setCart(cartDetail.length);
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={{
            height: 700,
            width: widthPercentageToDP(100),
            position: 'absolute',
            alignSelf: 'center',
            zIndex: 999,
          }}
          color={colors.primary}
          size={50}
        />
      ) : null}
      {/* <StatusBar/> */}
      {/* <ImageBackground source={require('../assets/back3.jpg')} resizeMode="cover" style={styles.backimage}> */}
      <View
        style={{
          height: hp(5),
          flexDirection: 'row',
          paddingHorizontal: 15,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <Icon
          name="bars"
          size={27}
          color={colors.primary}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.titleText}>RYK Foodies</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
          style={style.badgeIconView}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={25}
            color={colors.primary}
          />
          <View style={style.badgeView}>
            <Text style={style.badge}>{cart}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{height: hp(9)}}>
        <View style={styles.searchView}>
          <Icon name="search" size={22} color="grey" />
          <Text style={styles.searchText}>
            Search for Resturant, Food Items
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: hp(26),
          }}>
          <FoodSwiper />
        </View>
        <View style={{height: hp(26)}}>
          <View style={{flex: 1, paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 5,
              }}>
              Your Favourite
            </Text>
          </View>
          <View style={{flex: 4, flexDirection: 'row', paddingLeft: 10}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {products.map(product => (
                <TouchableOpacity
                  key={product.pro_id}
                  style={styles.favourite}
                  onPress={() =>
                    navigation.navigate('ProductScreen', {product: product})
                  }>
                  <Image
                    style={styles.itemImage}
                    resizeMode="stretch"
                    source={{uri: imageUrl + product.pro_image}}
                  />
                  <Text numberOfLines={1} style={styles.itemText}>
                    {product.pro_name}
                  </Text>
                  <Text style={styles.itemText1}>
                    Rs: {product.pro_new_price}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={{height: hp(33)}}>
          <View style={{flex: 1, paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 7,
              }}>
              Restaurants
            </Text>
          </View>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {resturants.map(resturant => (
                <TouchableOpacity
                  key={resturant.sho_id}
                  onPress={() =>
                    navigation.navigate('ResturantScreen', {
                      resturant: resturant,
                    })
                  }
                  style={{
                    width: 250,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    marginLeft: 15,
                    marginVertical: 5,
                    elevation: 5,
                  }}>
                  <View style={{flex: 3}}>
                    <Image
                      style={{
                        width: 250,
                        height: 140,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                      }}
                      source={resturant.sho_image ?{uri: imageUrl + resturant.sho_image} : dummyResturant}
                    />
                  </View>
                  <View style={{flex: 1, paddingLeft: 5}}>
                    <Text
                    numberOfLines={1}
                      style={{
                        fontSize: 16,
                        fontWeight: '700',
                        color: colors.secondary,
                      }}>
                      {resturant.sho_name}
                    </Text>
                    <Text
                    numberOfLines={1}
                     style={{fontSize: 12, color: colors.secondary}}>
                      {resturant.sho_location}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={{height: hp(50)}}>
          <View style={{flex: 1, paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 5,
              }}>
              Summer Deals
            </Text>
          </View>
          <View style={{flex: 4, flexDirection: 'row', paddingLeft: 10}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {products1.map(product => (
                <TouchableOpacity
                  key={product.pro_id}
                  style={styles.favourite}
                  onPress={() =>
                    navigation.navigate('ProductScreen', {product: product})
                  }>
                  <Image
                    style={styles.itemImage}
                    resizeMode="stretch"
                    source={{uri: imageUrl + product.pro_image}}
                  />
                  <Text numberOfLines={1} style={styles.itemText}>{product.pro_name}</Text>
                  <Text style={styles.itemText1}>
                    Rs: {product.pro_new_price}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{flex: 4, flexDirection: 'row', paddingLeft: 10}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {products2.map(product => (
                <TouchableOpacity
                  key={product.pro_id}
                  style={styles.favourite}
                  onPress={() =>
                    navigation.navigate('ProductScreen', {product: product})
                  }>
                  <Image
                    style={styles.itemImage}
                    resizeMode="stretch"
                    source={{uri: imageUrl + product.pro_image}}
                  />
                  <Text numberOfLines={1} style={styles.itemText}>{product.pro_name}</Text>
                  <Text style={styles.itemText1}>
                    Rs: {product.pro_new_price}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        {/* </ImageBackground> */}
        <View style={{height: 30}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodScreen;
