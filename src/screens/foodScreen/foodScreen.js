import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  RefreshControl,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useIsFocused} from '@react-navigation/native';
import styles from './foodScreen.style';
import colors from '../../assets/colors/colors';
import FoodSwiper from '../../components/foodSwiper/foodSwiper';
import {useSelector} from 'react-redux';
import style from '../../styles/global.style';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
const FoodScreen = ({navigation}) => {
  const cartDetail = useSelector(state => state.cart.cart);
  const [cart, setCart] = useState(cartDetail.length);
  const [loading, setLoading] = useState(false);
  const [restLoader, setRestLoader] = useState(false);
  const [limit, setLimit] = useState(8);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const imageUrl = 'https://mallofryk.com/admin/assets/pro_img/';
  const dummyResturant = require('../../assets/images/resturantDummy.png');
  const [products, setProducts] = useState([]);
  const [resturants, setResturants] = useState([]);

  const getFoodData = async () => {
    setLoading(true);
    setRefreshing(false);
    let url = 'https://mallofryk.com/api/Items/foodies/18/18';
    axios.get(url)
      .then(response => {
        //console.log('Products Response>', response.data)
        //setLoading(false);
        let data = response.data;
        if (data.length > 0) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log('Error>>>', error);
        setLoading(false);
      });
  };
  const getResturantsData = async (rlimit) => {
    // setLoading(true);
    setRestLoader(true)
    let url = 'https://mallofryk.com/api/Items/resturants/'+rlimit+'/0';
    axios.get(url)
      .then(response => {
        //console.log('Response>', response.data)
        setResturants(response.data)
        setRestLoader(false)
      })
      .catch(error => {
        console.log('Error>>>', error);
        setLoading(false);
      });
  };
  const setImageLoader = (pro_id ) => {
    const filtered = products.filter((item) => {
        if (item.pro_id == pro_id){
            item.loading = true;
        }
        return item;
    });
    setProducts(filtered);
}
  const onRefresh = () => {
    setRefreshing(true);
    getFoodData();
    getResturantsData(limit);
  };
  useEffect(() => {
    getFoodData();
    getResturantsData(limit);
  }, []);
  useEffect(() => {
    setCart(cartDetail.length);
  }, [isFocused]);
  const renderProducts = ({ item }) => {
    return (
      <TouchableOpacity
                  key={item.pro_id}
                  style={styles.favourite}
                  onPress={() =>
                    navigation.navigate('ProductScreen', {product: item})
                  }>
                  <FastImage
                    style={styles.itemImage}
                    resizeMode="stretch"
                    source={item.loading ? {uri: imageUrl + item.url} : require('../../assets/images/gify.gif')}
                    onLoad={() => setImageLoader(item.pro_id)}
                  />
                  <Text numberOfLines={1} style={styles.itemText}>
                    {item.pro_name}
                  </Text>
                  <Text style={styles.itemText1}>
                    Rs: {item.pro_new_price}
                  </Text>
                </TouchableOpacity>
    )
    }
    const renderResturants = ({ item,index }) => {
      return (
        <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ResturantScreen', {
                      resturant: item,
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
                  <FastImage
                      style={{
                        width: 250,
                        height: 140,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                      }}
                      source={item.sho_image ?{uri: imageUrl + item.sho_image} : dummyResturant}
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
                      {item.sho_name}
                    </Text>
                    <Text
                    numberOfLines={1}
                     style={{fontSize: 12, color: colors.secondary}}>
                      {item.sho_location}
                    </Text>
                  </View>
                </TouchableOpacity>
      )
      }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />
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
      <View
        style={{
          marginTop:33,
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
        <Text style={styles.titleText}>RYK<Text style={[styles.titleText,{color:colors.primary}]}> Foodies</Text></Text>
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
      <ScrollView showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
              Your <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.primary,
                marginTop: 5,
              }}>Favourite</Text>
            </Text>
          </View>
          <View style={{ paddingLeft: 10}}>
              <FlatList
                  data={products}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={renderProducts}
              />
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
              <FlatList
                  data={resturants}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  ListFooterComponent={
                    <TouchableOpacity onPress={()=>{setLimit(limit+5); getResturantsData(limit+5) }} style={styles.nextCard}>
                      {restLoader ? 
                      <ActivityIndicator size={24} color={colors.primary}/>
                      :
                      <AntDesign name='arrowright' size={24} color={colors.primary} />
                  }
                    </TouchableOpacity>
                  }
                  renderItem={renderResturants}
              />
            </ScrollView>
          </View>
        </View>
        <View style={{height: hp(50)}}>
          <View style={{paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.secondary,
                marginTop: 5,
                marginBottom: 5,
              }}>
              Summer <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.primary,
                marginTop: 5,
                marginBottom: 5,
              }}>Deals</Text>
            </Text>
          </View>
          <View style={{ paddingLeft: 10}}>
              <FlatList
                  data={products.slice(6, 12)}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={renderProducts}
              />
          </View>
          <View style={{ paddingLeft: 10}}>
              <FlatList
                  data={products.slice(12, 18)}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={renderProducts}
              />
          </View>
        </View>
        {/* </ImageBackground> */}
        <View style={{height: 30}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodScreen;
